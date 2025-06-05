import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHeart,
  faStar,
  faPlay,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';
import * as WatchlistSelectors from '../../store/watchlist/watchlist.selectors';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  public movieService = inject(MovieService);

  @Input() movie!: Movie;
  @Input() showQuickActions = true;

  // Font Awesome icons
  faHeart = faHeart;
  faHeartOutline = faHeartOutline;
  faStar = faStar;
  faPlay = faPlay;
  faCalendar = faCalendar;

  // Component state
  imageLoaded = false;
  isInWatchlist = false;

  ngOnInit(): void {
    // Check if movie is in watchlist
    this.store
      .select(WatchlistSelectors.selectIsInWatchlist(this.movie.id))
      .subscribe((inWatchlist) => {
        this.isInWatchlist = inWatchlist;
      });
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: any) {
    this.imageLoaded = true;
    // Fallback image will be handled by onerror attribute
  }

  viewDetails(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.router.navigate(['/movie', this.movie.id]);
  }

  toggleWatchlist(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.store.dispatch(
      WatchlistActions.toggleWatchlist({ movie: this.movie })
    );
  }

  getMovieYear(): string {
    return this.movie.release_date
      ? new Date(this.movie.release_date).getFullYear().toString()
      : 'Unknown';
  }

  getTruncatedOverview(): string {
    if (!this.movie.overview) return '';
    const maxLength = 120;
    return this.movie.overview.length > maxLength
      ? this.movie.overview.substring(0, maxLength) + '...'
      : this.movie.overview;
  }

  getMovieImage(): string {
    return this.movieService.getImageUrl(this.movie.poster_path);
  }
}
