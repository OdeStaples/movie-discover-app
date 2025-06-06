import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movies.model';

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const selectSelectedCategory = createSelector(
  selectMovieState,
  (state) => state.selectedCategory
);

export const selectPopularMovies = createSelector(
  selectMovieState,
  (state) => state.popularMovies
);
export const selectPopularMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.popularMoviesLoading
);
export const selectPopularMoviesError = createSelector(
  selectMovieState,
  (state) => state.popularMoviesError
);

export const selectTrendingMovies = createSelector(
  selectMovieState,
  (state) => state.trendingMovies
);
export const selectTrendingMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.trendingMoviesLoading
);

export const selectFeelGoodMovies = createSelector(
  selectMovieState,
  (state) => state.feelGoodMovies
);
export const selectActionMovies = createSelector(
  selectMovieState,
  (state) => state.actionMovies
);
export const selectMindBenderMovies = createSelector(
  selectMovieState,
  (state) => state.mindBenderMovies
);
export const selectCategoryMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.categoryMoviesLoading
);
export const selectCategoryMoviesError = createSelector(
  selectMovieState,
  (state) => state.categoryMoviesError
);

export const selectCurrentCategoryMovies = createSelector(
  selectMovieState,
  (state) => {
    switch (state.selectedCategory) {
      case 'feelGood':
        return state.feelGoodMovies;
      case 'action':
        return state.actionMovies;
      case 'mindBender':
        return state.mindBenderMovies;
      default:
        return [];
    }
  }
);

export const selectSelectedMovie = createSelector(
  selectMovieState,
  (state) => state.selectedMovie
);
export const selectSelectedMovieLoading = createSelector(
  selectMovieState,
  (state) => state.selectedMovieLoading
);
export const selectSelectedMovieError = createSelector(
  selectMovieState,
  (state) => state.selectedMovieError
);

export const selectSimilarMovies = createSelector(
  selectMovieState,
  (state) => state.similarMovies
);
export const selectSimilarMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.similarMoviesLoading
);
