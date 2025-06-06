import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, interval } from 'rxjs';
import * as MovieActions from '../../store/movies/movies.actions';
import * as MovieSelectors from '../../store/movies/movies.selectors';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private destroy$ = new Subject<void>();
  public movieService = inject(MovieService);

  // Featured movies for carousel
  featuredMovies: Movie[] = [];
  currentMovieIndex = 0;
  currentFeaturedMovie!: Movie;
  currentImageLoaded = false;

  // Category selection
  selectedCategory: 'feelGood' | 'action' | 'mindBender' | null = null;

  // Auto-rotation
  private autoRotateInterval?: any;

  // Selectors
  popularMovies$ = this.store.select(MovieSelectors.selectPopularMovies);
  popularMoviesLoading$ = this.store.select(
    MovieSelectors.selectPopularMoviesLoading
  );

  ngOnInit() {
    // Load popular movies for featured carousel
    this.store.dispatch(MovieActions.loadPopularMovies());

    // Subscribe to popular movies and use them for featured carousel
    this.popularMovies$.pipe(takeUntil(this.destroy$)).subscribe((movies) => {
      if (movies.length > 0) {
        // Take first 5 popular movies for featured carousel
        this.featuredMovies = movies.slice(0, 5);
        this.currentFeaturedMovie = this.featuredMovies[0];
        this.currentImageLoaded = false;

        // Preload the first image
        this.preloadImage(this.currentFeaturedMovie.backdrop_path);

        // Preload next few images in background
        this.preloadNextImages();

        this.startAutoRotation();
      }
    });
  }

  selectCategory(category: 'feelGood' | 'action' | 'mindBender') {
    this.selectedCategory = category;

    // Dispatch the category selection action
    this.store.dispatch(MovieActions.selectCategory({ category }));

    // Then dispatch appropriate action based on category
    switch (category) {
      case 'feelGood':
        this.store.dispatch(MovieActions.loadFeelGoodMovies());
        break;
      case 'action':
        this.store.dispatch(MovieActions.loadActionMovies());
        break;
      case 'mindBender':
        this.store.dispatch(MovieActions.loadMindBenderMovies());
        break;
    }

    // Scroll to results section (you can adjust this selector)
    setTimeout(() => {
      const resultsSection = document.querySelector('.category-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  goToSlide(index: number) {
    this.currentMovieIndex = index;
    this.currentFeaturedMovie = this.featuredMovies[index];
    this.currentImageLoaded = false; // Reset loading state
    this.preloadImage(this.currentFeaturedMovie.backdrop_path);
    this.restartAutoRotation();
  }

  private preloadImage(imagePath: string) {
    if (imagePath) {
      const img = new Image();
      img.onload = () => {
        this.currentImageLoaded = true;
      };
      img.onerror = () => {
        this.currentImageLoaded = true; // Show fallback
      };
      img.src = this.movieService.getBackdropUrl(imagePath);
    } else {
      this.currentImageLoaded = true;
    }
  }

  onImageLoad() {
    this.currentImageLoaded = true;
  }

  onImageError(event: any) {
    this.currentImageLoaded = true;
    // The onerror attribute will handle the fallback image
  }

  private preloadNextImages() {
    // Preload the next 2-3 images in background for smoother transitions
    for (let i = 1; i < Math.min(4, this.featuredMovies.length); i++) {
      const movie = this.featuredMovies[i];
      if (movie.backdrop_path) {
        const img = new Image();
        img.src = this.movieService.getBackdropUrl(movie.backdrop_path);
      }
    }
  }

  private startAutoRotation() {
    if (this.featuredMovies.length > 1) {
      this.autoRotateInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
  }

  private restartAutoRotation() {
    this.stopAutoRotation();
    this.startAutoRotation();
  }

  private stopAutoRotation() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  private nextSlide() {
    this.currentMovieIndex =
      (this.currentMovieIndex + 1) % this.featuredMovies.length;
    this.currentFeaturedMovie = this.featuredMovies[this.currentMovieIndex];
    this.currentImageLoaded = false; // Reset loading state
    this.preloadImage(this.currentFeaturedMovie.backdrop_path);
  }

  viewMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }

  getMovieYear(releaseDate: string): string {
    return releaseDate
      ? new Date(releaseDate).getFullYear().toString()
      : 'Unknown';
  }

  getTruncatedOverview(overview: string): string {
    if (!overview) return 'No description available.';
    return overview.length > 150
      ? overview.substring(0, 150) + '...'
      : overview;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopAutoRotation();
  }

  getCurrentFeaturedMovie(): string {
    return this.movieService.getBackdropUrl(
      this.currentFeaturedMovie.backdrop_path
    );
  }
}
