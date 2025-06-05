import { initialMovieState } from './movies.model';
import * as MovieActions from './movies.actions';
import { createReducer, on } from '@ngrx/store';

export const movieReducer = createReducer(
  initialMovieState,

  // Category Selection
  on(MovieActions.selectCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  })),

  // Popular Movies
  on(MovieActions.loadPopularMovies, (state) => ({
    ...state,
    popularMoviesLoading: true,
    popularMoviesError: null,
  })),
  on(MovieActions.loadPopularMoviesSuccess, (state, { movies }) => ({
    ...state,
    popularMovies: movies,
    popularMoviesLoading: false,
    popularMoviesError: null,
  })),
  on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({
    ...state,
    popularMoviesLoading: false,
    popularMoviesError: error,
  })),

  // Trending Movies
  on(MovieActions.loadTrendingMovies, (state) => ({
    ...state,
    trendingMoviesLoading: true,
    trendingMoviesError: null,
  })),
  on(MovieActions.loadTrendingMoviesSuccess, (state, { movies }) => ({
    ...state,
    trendingMovies: movies,
    trendingMoviesLoading: false,
    trendingMoviesError: null,
  })),
  on(MovieActions.loadTrendingMoviesFailure, (state, { error }) => ({
    ...state,
    trendingMoviesLoading: false,
    trendingMoviesError: error,
  })),

  // Category Movies
  on(
    MovieActions.loadFeelGoodMovies,
    MovieActions.loadActionMovies,
    MovieActions.loadMindBenderMovies,
    (state) => ({
      ...state,
      categoryMoviesLoading: true,
      categoryMoviesError: null,
    })
  ),
  on(MovieActions.loadCategoryMoviesSuccess, (state, { category, movies }) => {
    const categoryKey = `${category}Movies` as keyof typeof state;
    return {
      ...state,
      [categoryKey]: movies,
      categoryMoviesLoading: false,
      categoryMoviesError: null,
    };
  }),
  on(MovieActions.loadCategoryMoviesFailure, (state, { error }) => ({
    ...state,
    categoryMoviesLoading: false,
    categoryMoviesError: error,
  })),

  // Movie Details
  on(MovieActions.loadMovieDetails, (state) => ({
    ...state,
    selectedMovieLoading: true,
    selectedMovieError: null,
  })),
  on(MovieActions.loadMovieDetailsSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie,
    selectedMovieLoading: false,
    selectedMovieError: null,
  })),
  on(MovieActions.loadMovieDetailsFailure, (state, { error }) => ({
    ...state,
    selectedMovieLoading: false,
    selectedMovieError: error,
  })),

  // Similar Movies
  on(MovieActions.loadSimilarMovies, (state) => ({
    ...state,
    similarMoviesLoading: true,
    similarMoviesError: null,
  })),
  on(MovieActions.loadSimilarMoviesSuccess, (state, { movies }) => ({
    ...state,
    similarMovies: movies,
    similarMoviesLoading: false,
    similarMoviesError: null,
  })),
  on(MovieActions.loadSimilarMoviesFailure, (state, { error }) => ({
    ...state,
    similarMoviesLoading: false,
    similarMoviesError: error,
  })),

  // Clear Actions
  on(MovieActions.clearSelectedMovie, (state) => ({
    ...state,
    selectedMovie: null,
    selectedMovieError: null,
  })),
  on(MovieActions.clearSimilarMovies, (state) => ({
    ...state,
    similarMovies: [],
    similarMoviesError: null,
  }))
);

export type MovieState = ReturnType<typeof movieReducer>;
