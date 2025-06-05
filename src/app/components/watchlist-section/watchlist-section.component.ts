import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as WatchlistSelectors from '../../store/watchlist/watchlist.selectors';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-watchlist-section',
  imports: [CommonModule, FontAwesomeModule, MovieCardComponent],
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

  // Component state
  watchlistMovies: Movie[] = [];
  showAll = false;

  ngOnInit() {
    this.store
      .select(WatchlistSelectors.selectWatchlistMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((movies) => {
        this.watchlistMovies = movies;
        this.showAll = false; // Reset when movies change
      });
  }

  get displayedMovies(): Movie[] {
    if (this.showAll) {
      return this.watchlistMovies;
    }
    return this.watchlistMovies.slice(0, 6); // Show first 6 movies by default
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll;

    if (this.showAll) {
      // Scroll to ensure all movies are visible
      setTimeout(() => {
        const element = document.querySelector('.watchlist-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  getSectionSubtitle(): string {
    const movieCount = this.watchlistMovies.length;
    const displayCount = this.displayedMovies.length;

    return `${movieCount} movie${movieCount !== 1 ? 's' : ''} saved for later${
      !this.showAll && movieCount > 6 ? ` (showing ${displayCount})` : ''
    }`;
  }

  exploreMovies() {
    // Scroll to movie categories or navigate to explore page
    const heroSection = document.querySelector('.home-container');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
