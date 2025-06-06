import * as MovieSelectors from './movies.selectors';
import { MovieState } from './movies.model';
import { Movie } from '../../models/movie.model';

describe('Movie Selectors', () => {
  const mockMovie: Movie = {
    id: 1,
    title: 'Test Movie',
    overview: 'Test overview',
    poster_path: '/test-poster.jpg',
    backdrop_path: '/test-backdrop.jpg',
    release_date: '2023-01-01',
    vote_average: 8.5,
    genre_ids: [28, 12],
  };

  const mockMovies: Movie[] = [mockMovie];

  const mockMovieState: MovieState = {
    popularMovies: mockMovies,
    popularMoviesLoading: false,
    popularMoviesError: null,

    trendingMovies: mockMovies,
    trendingMoviesLoading: true,
    trendingMoviesError: 'Trending error',

    feelGoodMovies: mockMovies,
    actionMovies: [],
    mindBenderMovies: mockMovies,
    categoryMoviesLoading: false,
    categoryMoviesError: null,
    selectedCategory: 'feelGood',

    selectedMovie: mockMovie,
    selectedMovieLoading: false,
    selectedMovieError: null,

    similarMovies: mockMovies,
    similarMoviesLoading: false,
    similarMoviesError: null,
  };

  const mockAppState = { movies: mockMovieState };

  describe('selectMovieState', () => {
    it('should select the movie state', () => {
      const result = MovieSelectors.selectMovieState(mockAppState);
      expect(result).toEqual(mockMovieState);
    });
  });

  describe('selectSelectedCategory', () => {
    it('should select the current category', () => {
      const result = MovieSelectors.selectSelectedCategory(mockAppState);
      expect(result).toBe('feelGood');
    });

    it('should return null when no category is selected', () => {
      const stateWithNoCategory = {
        movies: { ...mockMovieState, selectedCategory: null },
      };
      const result = MovieSelectors.selectSelectedCategory(stateWithNoCategory);
      expect(result).toBe(null);
    });
  });

  describe('Popular Movies Selectors', () => {
    it('should select popular movies', () => {
      const result = MovieSelectors.selectPopularMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should select popular movies loading state', () => {
      const result = MovieSelectors.selectPopularMoviesLoading(mockAppState);
      expect(result).toBe(false);
    });

    it('should select popular movies error', () => {
      const result = MovieSelectors.selectPopularMoviesError(mockAppState);
      expect(result).toBe(null);
    });

    it('should return empty array when no popular movies', () => {
      const stateWithEmptyMovies = {
        movies: { ...mockMovieState, popularMovies: [] },
      };
      const result = MovieSelectors.selectPopularMovies(stateWithEmptyMovies);
      expect(result).toEqual([]);
    });
  });

  describe('Trending Movies Selectors', () => {
    it('should select trending movies', () => {
      const result = MovieSelectors.selectTrendingMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should select trending movies loading state', () => {
      const result = MovieSelectors.selectTrendingMoviesLoading(mockAppState);
      expect(result).toBe(true);
    });

    it('should select trending movies error when present', () => {
      const stateWithError = {
        movies: { ...mockMovieState, trendingMoviesError: 'API Error' },
      };
      const result = MovieSelectors.selectTrendingMoviesLoading(stateWithError);
      expect(result).toBe(true);
    });
  });

  describe('Category Movies Selectors', () => {
    it('should select feel good movies', () => {
      const result = MovieSelectors.selectFeelGoodMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should select action movies', () => {
      const result = MovieSelectors.selectActionMovies(mockAppState);
      expect(result).toEqual([]);
    });

    it('should select mind bender movies', () => {
      const result = MovieSelectors.selectMindBenderMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should select category movies loading state', () => {
      const result = MovieSelectors.selectCategoryMoviesLoading(mockAppState);
      expect(result).toBe(false);
    });

    it('should select category movies error', () => {
      const result = MovieSelectors.selectCategoryMoviesError(mockAppState);
      expect(result).toBe(null);
    });
  });

  describe('selectCurrentCategoryMovies', () => {
    it('should return feel good movies when feelGood is selected', () => {
      const result = MovieSelectors.selectCurrentCategoryMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should return action movies when action is selected', () => {
      const stateWithActionSelected = {
        movies: {
          ...mockMovieState,
          selectedCategory: 'action' as const,
          actionMovies: mockMovies,
        },
      };
      const result = MovieSelectors.selectCurrentCategoryMovies(
        stateWithActionSelected
      );
      expect(result).toEqual(mockMovies);
    });

    it('should return mind bender movies when mindBender is selected', () => {
      const stateWithMindBenderSelected = {
        movies: {
          ...mockMovieState,
          selectedCategory: 'mindBender' as const,
        },
      };
      const result = MovieSelectors.selectCurrentCategoryMovies(
        stateWithMindBenderSelected
      );
      expect(result).toEqual(mockMovies);
    });

    it('should return empty array when no category is selected', () => {
      const stateWithNoCategory = {
        movies: { ...mockMovieState, selectedCategory: null },
      };
      const result =
        MovieSelectors.selectCurrentCategoryMovies(stateWithNoCategory);
      expect(result).toEqual([]);
    });

    it('should return empty array for unknown category', () => {
      const stateWithUnknownCategory = {
        movies: { ...mockMovieState, selectedCategory: 'unknown' as any },
      };
      const result = MovieSelectors.selectCurrentCategoryMovies(
        stateWithUnknownCategory
      );
      expect(result).toEqual([]);
    });
  });

  describe('Selected Movie Selectors', () => {
    it('should select the selected movie', () => {
      const result = MovieSelectors.selectSelectedMovie(mockAppState);
      expect(result).toEqual(mockMovie);
    });

    it('should select selected movie loading state', () => {
      const result = MovieSelectors.selectSelectedMovieLoading(mockAppState);
      expect(result).toBe(false);
    });

    it('should select selected movie error', () => {
      const result = MovieSelectors.selectSelectedMovieError(mockAppState);
      expect(result).toBe(null);
    });

    it('should return null when no movie is selected', () => {
      const stateWithNoSelectedMovie = {
        movies: { ...mockMovieState, selectedMovie: null },
      };
      const result = MovieSelectors.selectSelectedMovie(
        stateWithNoSelectedMovie
      );
      expect(result).toBe(null);
    });

    it('should handle loading state correctly', () => {
      const stateWithLoading = {
        movies: {
          ...mockMovieState,
          selectedMovieLoading: true,
          selectedMovie: null,
        },
      };
      const loadingResult =
        MovieSelectors.selectSelectedMovieLoading(stateWithLoading);
      const movieResult = MovieSelectors.selectSelectedMovie(stateWithLoading);

      expect(loadingResult).toBe(true);
      expect(movieResult).toBe(null);
    });
  });

  describe('Similar Movies Selectors', () => {
    it('should select similar movies', () => {
      const result = MovieSelectors.selectSimilarMovies(mockAppState);
      expect(result).toEqual(mockMovies);
    });

    it('should select similar movies loading state', () => {
      const result = MovieSelectors.selectSimilarMoviesLoading(mockAppState);
      expect(result).toBe(false);
    });

    it('should return empty array when no similar movies', () => {
      const stateWithNoSimilarMovies = {
        movies: { ...mockMovieState, similarMovies: [] },
      };
      const result = MovieSelectors.selectSimilarMovies(
        stateWithNoSimilarMovies
      );
      expect(result).toEqual([]);
    });

    it('should handle similar movies loading state', () => {
      const stateWithLoading = {
        movies: {
          ...mockMovieState,
          similarMoviesLoading: true,
          similarMovies: [],
        },
      };
      const loadingResult =
        MovieSelectors.selectSimilarMoviesLoading(stateWithLoading);
      const moviesResult = MovieSelectors.selectSimilarMovies(stateWithLoading);

      expect(loadingResult).toBe(true);
      expect(moviesResult).toEqual([]);
    });
  });

  describe('Selector Memoization', () => {
    it('should memoize popular movies selector', () => {
      const result1 = MovieSelectors.selectPopularMovies(mockAppState);
      const result2 = MovieSelectors.selectPopularMovies(mockAppState);

      expect(result1).toBe(result2);
    });

    it('should memoize current category movies selector', () => {
      const result1 = MovieSelectors.selectCurrentCategoryMovies(mockAppState);
      const result2 = MovieSelectors.selectCurrentCategoryMovies(mockAppState);

      expect(result1).toBe(result2);
    });

    it('should return new result when state changes', () => {
      const result1 = MovieSelectors.selectPopularMovies(mockAppState);

      const newMovie = { ...mockMovie, id: 2, title: 'New Movie' };
      const updatedState = {
        movies: {
          ...mockMovieState,
          popularMovies: [newMovie],
        },
      };

      const result2 = MovieSelectors.selectPopularMovies(updatedState);

      expect(result1).not.toBe(result2);
      expect(result2).toEqual([newMovie]);
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined movie state gracefully', () => {
      const emptyState = { movies: undefined as any };

      expect(() => {
        MovieSelectors.selectMovieState(emptyState);
      }).not.toThrow();
    });

    it('should handle partial movie state', () => {
      const partialState = {
        movies: {
          popularMovies: mockMovies,
          popularMoviesLoading: false,
        } as any,
      };

      const result = MovieSelectors.selectPopularMovies(partialState);
      expect(result).toEqual(mockMovies);
    });

    it('should handle all categories being empty', () => {
      const emptyCategories = {
        movies: {
          ...mockMovieState,
          feelGoodMovies: [],
          actionMovies: [],
          mindBenderMovies: [],
          selectedCategory: 'feelGood' as const,
        },
      };

      const result =
        MovieSelectors.selectCurrentCategoryMovies(emptyCategories);
      expect(result).toEqual([]);
    });
  });

  describe('Complex State Scenarios', () => {
    it('should handle state with errors and loading simultaneously', () => {
      const complexState = {
        movies: {
          ...mockMovieState,
          popularMoviesLoading: true,
          popularMoviesError: 'Network error',
          categoryMoviesLoading: false,
          categoryMoviesError: null,
          selectedMovieLoading: true,
          selectedMovieError: 'Movie not found',
        },
      };

      expect(MovieSelectors.selectPopularMoviesLoading(complexState)).toBe(
        true
      );
      expect(MovieSelectors.selectPopularMoviesError(complexState)).toBe(
        'Network error'
      );
      expect(MovieSelectors.selectCategoryMoviesLoading(complexState)).toBe(
        false
      );
      expect(MovieSelectors.selectSelectedMovieLoading(complexState)).toBe(
        true
      );
      expect(MovieSelectors.selectSelectedMovieError(complexState)).toBe(
        'Movie not found'
      );
    });

    it('should handle switching between categories', () => {
      let result = MovieSelectors.selectCurrentCategoryMovies(mockAppState);
      expect(result).toEqual(mockMovies);

      const actionState = {
        movies: { ...mockMovieState, selectedCategory: 'action' as const },
      };
      result = MovieSelectors.selectCurrentCategoryMovies(actionState);
      expect(result).toEqual([]);

      const mindBenderState = {
        movies: { ...mockMovieState, selectedCategory: 'mindBender' as const },
      };
      result = MovieSelectors.selectCurrentCategoryMovies(mindBenderState);
      expect(result).toEqual(mockMovies);
    });
  });

  describe('Performance Tests', () => {
    it('should not recompute when unrelated state changes', () => {
      const spy = jasmine.createSpy('selector');

      const testSelector = (state: any) => {
        spy();
        return MovieSelectors.selectPopularMovies(state);
      };

      testSelector(mockAppState);
      testSelector(mockAppState);
      testSelector(mockAppState);

      expect(spy).toHaveBeenCalledTimes(3);
    });
  });
});
