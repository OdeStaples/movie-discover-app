import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHeart,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import * as WatchlistSelectors from '../../store/watchlist/watchlist.selectors';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-watchlist-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './watchlist-section.component.html',
  styleUrl: './watchlist-section.component.scss',
})
export class WatchlistSectionComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private router = inject(Router);
  public movieService = inject(MovieService);
  private destroy$ = new Subject<void>();

  // Font Awesome icons
  faHeart = faHeart;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // Component state
  watchlistMovies: Movie[] = [];
  currentIndex = 0;
  itemsPerView = 6;
  scrollOffset = 0;

  ngOnInit() {
    this.store
      .select(WatchlistSelectors.selectWatchlistMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies) => {
        this.watchlistMovies = movies;
        this.currentIndex = 0;
        this.updateScrollOffset();
      });

    // Adjust items per view based on screen size
    this.updateItemsPerView();
    window.addEventListener('resize', () => this.updateItemsPerView());
  }

  get visibleMovies(): Movie[] {
    return this.watchlistMovies.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerView
    );
  }

  get maxIndex(): number {
    return Math.max(0, this.watchlistMovies.length - this.itemsPerView);
  }

  get currentPage(): number {
    return Math.floor(this.currentIndex / this.itemsPerView);
  }

  get scrollPages(): number[] {
    const totalPages = Math.ceil(
      this.watchlistMovies.length / this.itemsPerView
    );
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerView);
      this.updateScrollOffset();
    }
  }

  scrollRight() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex = Math.min(
        this.maxIndex,
        this.currentIndex + this.itemsPerView
      );
      this.updateScrollOffset();
    }
  }

  goToPage(pageIndex: number) {
    this.currentIndex = pageIndex * this.itemsPerView;
    this.updateScrollOffset();
  }

  private updateScrollOffset() {
    const cardWidth = window.innerWidth <= 768 ? 156 : 196; // includes margin
    this.scrollOffset = -this.currentIndex * cardWidth;
  }

  private updateItemsPerView() {
    const width = window.innerWidth;
    if (width <= 576) {
      this.itemsPerView = 2;
    } else if (width <= 768) {
      this.itemsPerView = 3;
    } else if (width <= 1200) {
      this.itemsPerView = 4;
    } else {
      this.itemsPerView = 6;
    }
    this.updateScrollOffset();
  }

  removeFromWatchlist(movie: Movie, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(
      WatchlistActions.removeFromWatchlist({ movieId: movie.id })
    );
  }

  viewMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }

  viewAllWatchlist() {
    // Navigate to a dedicated watchlist page or show modal
    // For now, we'll scroll to show more
    this.router.navigate(['/watchlist']); // You can create this route later
  }

  exploreMovies() {
    // Scroll to movie categories or navigate to explore page
    const heroSection = document.querySelector('.home-container');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getMovieYear(releaseDate: string): string {
    return releaseDate
      ? new Date(releaseDate).getFullYear().toString()
      : 'Unknown';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('resize', () => this.updateItemsPerView());
  }

  getImagePath(movie: Movie): string {
    return this.movieService.getImageUrl(movie.poster_path, 'w342');
  }
}
