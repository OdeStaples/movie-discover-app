import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, combineLatest } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faHeart,
  faShare,
  faExclamationTriangle,
  faArrowLeft,
  faPlay,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

import * as MovieActions from '../../store/movies/movies.actions';
import * as MovieSelectors from '../../store/movies/movies.selectors';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';
import * as WatchlistSelectors from '../../store/watchlist/watchlist.selectors';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, FontAwesomeModule, MovieCardComponent],
  templateUrl: './movie-detail.page.html',
  styleUrl: './movie-detail.page.scss',
})
export class MovieDetailPage implements OnInit, OnDestroy {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private sanitizer = inject(DomSanitizer);
  public movieService = inject(MovieService);
  private destroy$ = new Subject<void>();

  // Font Awesome icons
  faStar = faStar;
  faHeart = faHeart;
  faHeartOutline = faHeartOutline;
  faShare = faShare;
  faExclamationTriangle = faExclamationTriangle;
  faArrowLeft = faArrowLeft;
  faPlay = faPlay;
  faExternalLink = faExternalLink;

  // Component state
  movie: any = null; // Use any to handle the extended movie object with credits, videos, etc.
  loading = false;
  error = false;
  movieId: number | null = null;
  activeTab = 'overview';
  isInWatchlist = false;
  showTrailer = false;

  // Display state for tabs
  showAllCast = false;
  showAllReviews = false;
  showAllVideos = false;
  showAllImages = false;

  // Similar movies
  similarMovies: Movie[] = [];
  similarMoviesLoading = false;
  showAllSimilar = false;

  // Selectors
  selectedMovie$ = this.store.select(MovieSelectors.selectSelectedMovie);
  selectedMovieLoading$ = this.store.select(
    MovieSelectors.selectSelectedMovieLoading
  );
  selectedMovieError$ = this.store.select(
    MovieSelectors.selectSelectedMovieError
  );
  similarMovies$ = this.store.select(MovieSelectors.selectSimilarMovies);
  similarMoviesLoading$ = this.store.select(
    MovieSelectors.selectSimilarMoviesLoading
  );

  ngOnInit(): void {
    // Get movie ID from route params
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = +params['id'];
      if (id && !isNaN(id)) {
        this.movieId = id;
        this.loadMovieDetails(id);
        this.loadSimilarMovies(id);
      } else {
        this.error = true;
      }
    });

    // Subscribe to movie details from store
    combineLatest([
      this.selectedMovie$,
      this.selectedMovieLoading$,
      this.selectedMovieError$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([movie, loading, error]) => {
        this.movie = movie;
        this.loading = loading;
        this.error = !!error;

        // Check if movie is in watchlist
        if (movie) {
          this.store
            .select(WatchlistSelectors.selectIsInWatchlist(movie.id))
            .pipe(takeUntil(this.destroy$))
            .subscribe((inWatchlist) => {
              this.isInWatchlist = inWatchlist;
            });
        }
      });

    // Subscribe to similar movies
    combineLatest([this.similarMovies$, this.similarMoviesLoading$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([movies, loading]) => {
        this.similarMovies = movies;
        this.similarMoviesLoading = loading;
      });
  }

  private loadMovieDetails(movieId: number): void {
    // Clear previous movie data
    this.store.dispatch(MovieActions.clearSelectedMovie());
    // Load new movie details
    this.store.dispatch(MovieActions.loadMovieDetails({ movieId }));
  }

  private loadSimilarMovies(movieId: number): void {
    // Clear previous similar movies
    this.store.dispatch(MovieActions.clearSimilarMovies());
    // Load similar movies
    this.store.dispatch(MovieActions.loadSimilarMovies({ movieId }));
  }

  // UI Methods
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleWatchlist(): void {
    if (this.movie) {
      this.store.dispatch(
        WatchlistActions.toggleWatchlist({ movie: this.movie })
      );
    }
  }

  toggleSimilarMovies(): void {
    this.showAllSimilar = !this.showAllSimilar;
  }

  toggleShowAllCast(): void {
    this.showAllCast = !this.showAllCast;
  }

  toggleShowAllReviews(): void {
    this.showAllReviews = !this.showAllReviews;
  }

  toggleShowAllVideos(): void {
    this.showAllVideos = !this.showAllVideos;
  }

  toggleShowAllImages(): void {
    this.showAllImages = !this.showAllImages;
  }

  openImageModal(imagePath: string): void {
    // Open image in new tab for now - you can implement a proper modal later
    const fullImageUrl = this.getImageUrl(imagePath, 'original');
    window.open(fullImageUrl, '_blank');
  }

  goBack(): void {
    this.location.back();
  }

  // Display getters
  get displayedSimilarMovies(): Movie[] {
    if (this.showAllSimilar) {
      return this.similarMovies;
    }
    return this.similarMovies.slice(0, 6);
  }

  // Cast and Crew methods
  getCastMembers(): any[] {
    return this.movie?.credits?.cast || [];
  }

  getCrewMembers(): any[] {
    return this.movie?.credits?.crew || [];
  }

  getDisplayedCast(): any[] {
    const cast = this.getCastMembers();
    return this.showAllCast ? cast : cast.slice(0, 12);
  }

  getCrewByDepartment(): { [key: string]: any[] } {
    const crew = this.getCrewMembers();
    return crew.reduce((departments: { [key: string]: any[] }, member: any) => {
      const dept = member.department || 'Other';
      if (!departments[dept]) {
        departments[dept] = [];
      }
      departments[dept].push(member);
      return departments;
    }, {});
  }

  // Reviews methods
  getReviews(): any[] {
    return this.movie?.reviews?.results || [];
  }

  getDisplayedReviews(): any[] {
    const reviews = this.getReviews();
    return this.showAllReviews ? reviews : reviews.slice(0, 3);
  }

  // Media methods
  getVideos(): any[] {
    return this.movie?.videos?.results || [];
  }

  getDisplayedVideos(): any[] {
    const videos = this.getVideos();
    return this.showAllVideos ? videos : videos.slice(0, 4);
  }

  getBackdrops(): any[] {
    return this.movie?.images?.backdrops || [];
  }

  getDisplayedBackdrops(): any[] {
    const backdrops = this.getBackdrops();
    return this.showAllImages ? backdrops : backdrops.slice(0, 6);
  }

  getOfficialTrailer(): any {
    const videos = this.getVideos();
    return (
      videos.find(
        (video: any) =>
          video.type === 'Trailer' && video.site === 'YouTube' && video.official
      ) ||
      videos.find(
        (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
      )
    );
  }

  // Helper Methods
  getMovieYear(): string {
    return this.movie?.release_date
      ? new Date(this.movie.release_date).getFullYear().toString()
      : 'Unknown';
  }

  getPosterUrl(): string {
    return this.movieService.getImageUrl(this.movie?.poster_path || '', 'w500');
  }

  getBackdropUrl(): string {
    return this.movieService.getBackdropUrl(this.movie?.backdrop_path || '');
  }

  getCompanyLogoUrl(logoPath: string): string {
    return this.movieService.getImageUrl(logoPath, 'w200');
  }

  getCollectionPosterUrl(posterPath: string): string {
    return this.movieService.getImageUrl(posterPath, 'w200');
  }

  getPersonImageUrl(profilePath: string | null): string {
    return profilePath
      ? this.movieService.getImageUrl(profilePath, 'w200')
      : '//movie-discover-app/no-image.png';
  }

  getImageUrl(imagePath: string, size: string = 'w500'): string {
    return this.movieService.getImageUrl(imagePath, size);
  }

  getAvatarUrl(avatarPath: string): string {
    if (avatarPath.startsWith('/https://')) {
      return avatarPath.substring(1); // Remove leading slash for external URLs
    }
    return this.movieService.getImageUrl(avatarPath, 'w200');
  }

  getTrailerEmbedUrl(): SafeResourceUrl {
    const trailer = this.getOfficialTrailer();
    if (trailer) {
      const url = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }

  getVideoEmbedUrl(videoKey: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  formatRuntime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours > 0
      ? `${hours}h ${remainingMinutes}m`
      : `${remainingMinutes}m`;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  formatReviewDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  getVideoDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  formatReviewContent(content: string): string {
    // Basic formatting - convert line breaks to <br> tags
    return content.replace(/\n/g, '<br>');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    // Optional: Clear movie data when leaving the component
    this.store.dispatch(MovieActions.clearSelectedMovie());
    this.store.dispatch(MovieActions.clearSimilarMovies());
  }
}
