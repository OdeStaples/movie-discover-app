import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

// Popular Movies Actions
export const loadPopularMovies = createAction('[Movie] Load Popular Movies');
export const loadPopularMoviesSuccess = createAction(
  '[Movie] Load Popular Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadPopularMoviesFailure = createAction(
  '[Movie] Load Popular Movies Failure',
  props<{ error: string }>()
);

// Trending Movies Actions
export const loadTrendingMovies = createAction('[Movie] Load Trending Movies');
export const loadTrendingMoviesSuccess = createAction(
  '[Movie] Load Trending Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadTrendingMoviesFailure = createAction(
  '[Movie] Load Trending Movies Failure',
  props<{ error: string }>()
);

// Category Selection Action
export const selectCategory = createAction(
  '[Movie] Select Category',
  props<{ category: 'feelGood' | 'action' | 'mindBender' }>()
);

// Category Movies Actions
export const loadFeelGoodMovies = createAction('[Movie] Load Feel Good Movies');
export const loadActionMovies = createAction('[Movie] Load Action Movies');
export const loadMindBenderMovies = createAction(
  '[Movie] Load Mind Bender Movies'
);

export const loadCategoryMoviesSuccess = createAction(
  '[Movie] Load Category Movies Success',
  props<{ category: 'feelGood' | 'action' | 'mindBender'; movies: Movie[] }>()
);
export const loadCategoryMoviesFailure = createAction(
  '[Movie] Load Category Movies Failure',
  props<{ error: string }>()
);

// Movie Details Actions
export const loadMovieDetails = createAction(
  '[Movie] Load Movie Details',
  props<{ movieId: number }>()
);
export const loadMovieDetailsSuccess = createAction(
  '[Movie] Load Movie Details Success',
  props<{ movie: Movie }>()
);
export const loadMovieDetailsFailure = createAction(
  '[Movie] Load Movie Details Failure',
  props<{ error: string }>()
);

// Similar Movies Actions
export const loadSimilarMovies = createAction(
  '[Movie] Load Similar Movies',
  props<{ movieId: number }>()
);
export const loadSimilarMoviesSuccess = createAction(
  '[Movie] Load Similar Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadSimilarMoviesFailure = createAction(
  '[Movie] Load Similar Movies Failure',
  props<{ error: string }>()
);

// Clear Actions
export const clearSelectedMovie = createAction('[Movie] Clear Selected Movie');
export const clearSimilarMovies = createAction('[Movie] Clear Similar Movies');
