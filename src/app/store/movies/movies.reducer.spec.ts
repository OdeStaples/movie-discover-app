import { movieReducer } from './movies.reducer';
import { initialMovieState } from './movies.model';
import * as MovieActions from './movies.actions';
import { Movie } from '../../models/movie.model';
import { mockMovie, mockError } from '../../mocks/app.mock';

describe('Movie Reducer', () => {
  const mockMovies: Movie[] = [mockMovie];
  describe('Initial State', () => {
    it('should return the initial state', () => {
      const action = { type: 'Unknown' } as any;
      const state = movieReducer(undefined, action);

      expect(state).toBe(initialMovieState);
    });
  });

  describe('Category Selection', () => {
    it('should update selected category', () => {
      const action = MovieActions.selectCategory({ category: 'feelGood' });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedCategory).toBe('feelGood');
    });

    it('should update selected category to action', () => {
      const action = MovieActions.selectCategory({ category: 'action' });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedCategory).toBe('action');
    });

    it('should update selected category to mindBender', () => {
      const action = MovieActions.selectCategory({ category: 'mindBender' });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedCategory).toBe('mindBender');
    });
  });

  describe('Popular Movies', () => {
    it('should set loading state when loading popular movies', () => {
      const action = MovieActions.loadPopularMovies();
      const state = movieReducer(initialMovieState, action);

      expect(state.popularMoviesLoading).toBe(true);
      expect(state.popularMoviesError).toBe(null);
    });

    it('should set popular movies on success', () => {
      const action = MovieActions.loadPopularMoviesSuccess({
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.popularMovies).toEqual(mockMovies);
      expect(state.popularMoviesLoading).toBe(false);
      expect(state.popularMoviesError).toBe(null);
    });

    it('should set error on failure', () => {
      const action = MovieActions.loadPopularMoviesFailure({
        error: mockError,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.popularMoviesLoading).toBe(false);
      expect(state.popularMoviesError).toBe(mockError);
    });

    it('should preserve existing movies when setting new ones', () => {
      const existingState = {
        ...initialMovieState,
        popularMovies: [mockMovie],
      };
      const newMovie = { ...mockMovie, id: 2, title: 'New Movie' };
      const action = MovieActions.loadPopularMoviesSuccess({
        movies: [newMovie],
      });
      const state = movieReducer(existingState, action);

      expect(state.popularMovies).toEqual([newMovie]);
      expect(state.popularMovies).not.toContain(mockMovie);
    });
  });

  describe('Trending Movies', () => {
    it('should set loading state when loading trending movies', () => {
      const action = MovieActions.loadTrendingMovies();
      const state = movieReducer(initialMovieState, action);

      expect(state.trendingMoviesLoading).toBe(true);
      expect(state.trendingMoviesError).toBe(null);
    });

    it('should set trending movies on success', () => {
      const action = MovieActions.loadTrendingMoviesSuccess({
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.trendingMovies).toEqual(mockMovies);
      expect(state.trendingMoviesLoading).toBe(false);
      expect(state.trendingMoviesError).toBe(null);
    });

    it('should set error on failure', () => {
      const action = MovieActions.loadTrendingMoviesFailure({
        error: mockError,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.trendingMoviesLoading).toBe(false);
      expect(state.trendingMoviesError).toBe(mockError);
    });
  });

  describe('Category Movies', () => {
    it('should set loading state for feel good movies', () => {
      const action = MovieActions.loadFeelGoodMovies();
      const state = movieReducer(initialMovieState, action);

      expect(state.categoryMoviesLoading).toBe(true);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set loading state for action movies', () => {
      const action = MovieActions.loadActionMovies();
      const state = movieReducer(initialMovieState, action);

      expect(state.categoryMoviesLoading).toBe(true);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set loading state for mind bender movies', () => {
      const action = MovieActions.loadMindBenderMovies();
      const state = movieReducer(initialMovieState, action);

      expect(state.categoryMoviesLoading).toBe(true);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set feel good movies on success', () => {
      const action = MovieActions.loadCategoryMoviesSuccess({
        category: 'feelGood',
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.feelGoodMovies).toEqual(mockMovies);
      expect(state.categoryMoviesLoading).toBe(false);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set action movies on success', () => {
      const action = MovieActions.loadCategoryMoviesSuccess({
        category: 'action',
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.actionMovies).toEqual(mockMovies);
      expect(state.categoryMoviesLoading).toBe(false);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set mind bender movies on success', () => {
      const action = MovieActions.loadCategoryMoviesSuccess({
        category: 'mindBender',
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.mindBenderMovies).toEqual(mockMovies);
      expect(state.categoryMoviesLoading).toBe(false);
      expect(state.categoryMoviesError).toBe(null);
    });

    it('should set error on category movies failure', () => {
      const action = MovieActions.loadCategoryMoviesFailure({
        error: mockError,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.categoryMoviesLoading).toBe(false);
      expect(state.categoryMoviesError).toBe(mockError);
    });
  });

  describe('Movie Details', () => {
    it('should set loading state when loading movie details', () => {
      const action = MovieActions.loadMovieDetails({ movieId: 123 });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedMovieLoading).toBe(true);
      expect(state.selectedMovieError).toBe(null);
    });

    it('should set selected movie on success', () => {
      const action = MovieActions.loadMovieDetailsSuccess({ movie: mockMovie });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedMovie).toEqual(mockMovie);
      expect(state.selectedMovieLoading).toBe(false);
      expect(state.selectedMovieError).toBe(null);
    });

    it('should set error on movie details failure', () => {
      const action = MovieActions.loadMovieDetailsFailure({ error: mockError });
      const state = movieReducer(initialMovieState, action);

      expect(state.selectedMovieLoading).toBe(false);
      expect(state.selectedMovieError).toBe(mockError);
    });

    it('should replace existing selected movie', () => {
      const existingState = {
        ...initialMovieState,
        selectedMovie: mockMovie,
      };
      const newMovie = { ...mockMovie, id: 2, title: 'New Selected Movie' };
      const action = MovieActions.loadMovieDetailsSuccess({ movie: newMovie });
      const state = movieReducer(existingState, action);

      expect(state.selectedMovie).toEqual(newMovie);
      expect(state.selectedMovie?.title).toBe('New Selected Movie');
    });
  });

  describe('Similar Movies', () => {
    it('should set loading state when loading similar movies', () => {
      const action = MovieActions.loadSimilarMovies({ movieId: 123 });
      const state = movieReducer(initialMovieState, action);

      expect(state.similarMoviesLoading).toBe(true);
      expect(state.similarMoviesError).toBe(null);
    });

    it('should set similar movies on success', () => {
      const action = MovieActions.loadSimilarMoviesSuccess({
        movies: mockMovies,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.similarMovies).toEqual(mockMovies);
      expect(state.similarMoviesLoading).toBe(false);
      expect(state.similarMoviesError).toBe(null);
    });

    it('should set error on similar movies failure', () => {
      const action = MovieActions.loadSimilarMoviesFailure({
        error: mockError,
      });
      const state = movieReducer(initialMovieState, action);

      expect(state.similarMoviesLoading).toBe(false);
      expect(state.similarMoviesError).toBe(mockError);
    });
  });

  describe('Clear Actions', () => {
    it('should clear selected movie', () => {
      const existingState = {
        ...initialMovieState,
        selectedMovie: mockMovie,
        selectedMovieError: 'Some error',
      };
      const action = MovieActions.clearSelectedMovie();
      const state = movieReducer(existingState, action);

      expect(state.selectedMovie).toBe(null);
      expect(state.selectedMovieError).toBe(null);
    });

    it('should clear similar movies', () => {
      const existingState = {
        ...initialMovieState,
        similarMovies: mockMovies,
        similarMoviesError: 'Some error',
      };
      const action = MovieActions.clearSimilarMovies();
      const state = movieReducer(existingState, action);

      expect(state.similarMovies).toEqual([]);
      expect(state.similarMoviesError).toBe(null);
    });
  });

  describe('State Immutability', () => {
    it('should not mutate the original state', () => {
      const action = MovieActions.loadPopularMoviesSuccess({
        movies: mockMovies,
      });
      const originalState = { ...initialMovieState };
      const newState = movieReducer(initialMovieState, action);

      expect(newState).not.toBe(initialMovieState);
      expect(initialMovieState).toEqual(originalState);
    });

    it('should create new state object for category selection', () => {
      const action = MovieActions.selectCategory({ category: 'feelGood' });
      const newState = movieReducer(initialMovieState, action);

      expect(newState).not.toBe(initialMovieState);
      expect(newState.selectedCategory).toBe('feelGood');
      expect(initialMovieState.selectedCategory).toBe(null);
    });
  });

  describe('Error Handling', () => {
    it('should handle multiple errors correctly', () => {
      let state = movieReducer(
        initialMovieState,
        MovieActions.loadPopularMoviesFailure({ error: 'Popular movies error' })
      );

      state = movieReducer(
        state,
        MovieActions.loadTrendingMoviesFailure({
          error: 'Trending movies error',
        })
      );

      state = movieReducer(
        state,
        MovieActions.loadCategoryMoviesFailure({
          error: 'Category movies error',
        })
      );

      expect(state.popularMoviesError).toBe('Popular movies error');
      expect(state.trendingMoviesError).toBe('Trending movies error');
      expect(state.categoryMoviesError).toBe('Category movies error');
    });

    it('should clear errors on successful actions', () => {
      const errorState = {
        ...initialMovieState,
        popularMoviesError: 'Some error',
        popularMoviesLoading: false,
      };

      const action = MovieActions.loadPopularMoviesSuccess({
        movies: mockMovies,
      });
      const state = movieReducer(errorState, action);

      expect(state.popularMoviesError).toBe(null);
      expect(state.popularMovies).toEqual(mockMovies);
    });
  });
});
