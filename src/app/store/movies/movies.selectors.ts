import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movies.model';

export const selectMovieState = createFeatureSelector<MovieState>('movies');

// Popular Movies Selectors
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

// Trending Movies Selectors
export const selectTrendingMovies = createSelector(
  selectMovieState,
  (state) => state.trendingMovies
);
export const selectTrendingMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.trendingMoviesLoading
);

// Category Movies Selectors
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

// Selected Movie Selectors
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

// Similar Movies Selectors
export const selectSimilarMovies = createSelector(
  selectMovieState,
  (state) => state.similarMovies
);
export const selectSimilarMoviesLoading = createSelector(
  selectMovieState,
  (state) => state.similarMoviesLoading
);
