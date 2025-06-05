import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, combineLatest } from 'rxjs';
import { Movie } from '../../models/movie.model';
import * as MovieSelectors from '../../store/movies/movies.selectors';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-grid',
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss',
})
export class MovieGridComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private destroy$ = new Subject<void>();

  currentMovies: Movie[] = [];
  selectedCategory: 'feelGood' | 'action' | 'mindBender' | null = null;
  isLoading = false;
  hasError = false;
  showAll = false;

  feelGoodMovies$ = this.store.select(MovieSelectors.selectFeelGoodMovies);
  actionMovies$ = this.store.select(MovieSelectors.selectActionMovies);
  mindBenderMovies$ = this.store.select(MovieSelectors.selectMindBenderMovies);
  categoryLoading$ = this.store.select(
    MovieSelectors.selectCategoryMoviesLoading
  );
  categoryError$ = this.store.select(MovieSelectors.selectCategoryMoviesError);

  ngOnInit(): void {
    combineLatest([
      this.feelGoodMovies$,
      this.actionMovies$,
      this.mindBenderMovies$,
      this.categoryLoading$,
      this.categoryError$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([feelGood, action, mindBender, loading, error]) => {
        this.isLoading = loading;
        this.hasError = !!error;

        // Determine which category has movies and set as current
        if (feelGood.length > 0) {
          this.selectedCategory = 'feelGood';
          this.currentMovies = feelGood;
        } else if (action.length > 0) {
          this.selectedCategory = 'action';
          this.currentMovies = action;
        } else if (mindBender.length > 0) {
          this.selectedCategory = 'mindBender';
          this.currentMovies = mindBender;
        } else if (!loading) {
          // No movies loaded and not loading
          this.selectedCategory = null;
          this.currentMovies = [];
        }

        // Reset showAll when category changes
        this.showAll = false;
      });
  }

  get shouldShowGrid(): boolean {
    return this.selectedCategory !== null || this.isLoading;
  }

  get displayedMovies(): Movie[] {
    if (this.showAll) {
      return this.currentMovies;
    }
    return this.currentMovies.slice(0, 6); // Show first 6 movies by default
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll;

    if (this.showAll) {
      // Scroll to ensure all movies are visible
      setTimeout(() => {
        const element = document.querySelector('.movie-grid-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  getSectionTitle(): string {
    switch (this.selectedCategory) {
      case 'feelGood':
        return 'Feel Good Movies';
      case 'action':
        return 'Action Movies';
      case 'mindBender':
        return 'Mind Bending Movies';
      default:
        return 'Recommended Movies';
    }
  }

  getSectionSubtitle(): string {
    const movieCount = this.currentMovies.length;
    const displayCount = this.displayedMovies.length;

    switch (this.selectedCategory) {
      case 'feelGood':
        return `${movieCount} uplifting movies to brighten your day${
          !this.showAll && movieCount > 6 ? ` (showing ${displayCount})` : ''
        }`;
      case 'action':
        return `${movieCount} adrenaline-pumping adventures${
          !this.showAll && movieCount > 6 ? ` (showing ${displayCount})` : ''
        }`;
      case 'mindBender':
        return `${movieCount} thought-provoking films that will challenge you${
          !this.showAll && movieCount > 6 ? ` (showing ${displayCount})` : ''
        }`;
      default:
        return 'Discover your next favorite movie';
    }
  }

  getCategoryDisplayName(): string {
    switch (this.selectedCategory) {
      case 'feelGood':
        return 'feel-good';
      case 'action':
        return 'action';
      case 'mindBender':
        return 'mind-bending';
      default:
        return '';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
