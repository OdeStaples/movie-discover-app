import * as WatchlistActions from './watchlist.actions';
import { mockMovie, mockMovie2 } from '../../mocks/app.mock';

describe('Watchlist Actions', () => {
  describe('loadWatchlist', () => {
    it('should create loadWatchlist action', () => {
      const action = WatchlistActions.loadWatchlist();

      expect(action.type).toBe('[Watchlist] Load Watchlist');
    });
  });

  describe('addToWatchlist', () => {
    it('should create addToWatchlist action', () => {
      const action = WatchlistActions.addToWatchlist({ movie: mockMovie });

      expect(action.type).toBe('[Watchlist] Add To Watchlist');
      expect(action.movie).toEqual(mockMovie);
    });
  });

  describe('removeFromWatchlist', () => {
    it('should create removeFromWatchlist action', () => {
      const movieId = 123;
      const action = WatchlistActions.removeFromWatchlist({ movieId });

      expect(action.type).toBe('[Watchlist] Remove From Watchlist');
      expect(action.movieId).toBe(movieId);
    });
  });

  describe('toggleWatchlist', () => {
    it('should create toggleWatchlist action', () => {
      const action = WatchlistActions.toggleWatchlist({ movie: mockMovie });

      expect(action.type).toBe('[Watchlist] Toggle Watchlist');
      expect(action.movie).toEqual(mockMovie);
    });
  });

  describe('clearWatchlist', () => {
    it('should create clearWatchlist action', () => {
      const action = WatchlistActions.clearWatchlist();

      expect(action.type).toBe('[Watchlist] Clear Watchlist');
    });
  });
});

import { watchlistReducer, initialWatchlistState } from './watchlist.reducer';

describe('Watchlist Reducer', () => {
  const mockMovie1 = mockMovie;
  const mockMovie2Copy = mockMovie2;

  let mockLocalStorage: { [key: string]: string } = {};

  beforeEach(() => {
    mockLocalStorage = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return mockLocalStorage[key] || null;
    });

    spyOn(localStorage, 'setItem').and.callFake(
      (key: string, value: string) => {
        mockLocalStorage[key] = value;
      }
    );

    spyOn(console, 'error');
  });

  describe('Initial State', () => {
    it('should return the initial state with empty localStorage', () => {
      const action = { type: 'Unknown' } as any;
      const state = watchlistReducer(undefined, action);

      expect(state.movies).toEqual([]);
    });

    it('should handle corrupted localStorage data', () => {
      mockLocalStorage['watchlist'] = 'invalid json';

      const action = { type: 'Unknown' } as any;
      const state = watchlistReducer(undefined, action);

      expect(state.movies).toEqual([]);
    });
  });

  describe('loadWatchlist', () => {
    it('should load watchlist from localStorage', () => {
      mockLocalStorage['watchlist'] = JSON.stringify([
        mockMovie1,
        mockMovie2Copy,
      ]);

      const action = WatchlistActions.loadWatchlist();
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([mockMovie1, mockMovie2Copy]);
    });

    it('should return empty array when localStorage is empty', () => {
      const action = WatchlistActions.loadWatchlist();
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([]);
    });
  });

  describe('addToWatchlist', () => {
    it('should add movie to empty watchlist', () => {
      const action = WatchlistActions.addToWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([mockMovie1]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie1])
      );
    });

    it('should add movie to existing watchlist', () => {
      const existingState = {
        movies: [mockMovie1],
      };

      const action = WatchlistActions.addToWatchlist({ movie: mockMovie2Copy });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie1, mockMovie2Copy]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie1, mockMovie2Copy])
      );
    });

    it('should not add duplicate movie', () => {
      const existingState = {
        movies: [mockMovie1],
      };

      const action = WatchlistActions.addToWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie1]);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    it('should handle localStorage errors gracefully', () => {
      (localStorage.setItem as jasmine.Spy).and.throwError(
        'Storage quota exceeded'
      );

      const action = WatchlistActions.addToWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([mockMovie1]);
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('removeFromWatchlist', () => {
    it('should remove movie from watchlist', () => {
      const existingState = {
        movies: [mockMovie1, mockMovie2Copy],
      };

      const action = WatchlistActions.removeFromWatchlist({ movieId: 123 });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie2Copy]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie2Copy])
      );
    });

    it('should handle removing non-existent movie', () => {
      const existingState = {
        movies: [mockMovie1],
      };

      const action = WatchlistActions.removeFromWatchlist({ movieId: 999 });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie1]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie1])
      );
    });

    it('should remove from empty watchlist without error', () => {
      const action = WatchlistActions.removeFromWatchlist({ movieId: 123 });
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([])
      );
    });
  });

  describe('toggleWatchlist', () => {
    it('should add movie when not in watchlist', () => {
      const action = WatchlistActions.toggleWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([mockMovie1]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie1])
      );
    });

    it('should remove movie when already in watchlist', () => {
      const existingState = {
        movies: [mockMovie1, mockMovie2Copy],
      };

      const action = WatchlistActions.toggleWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie2Copy]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([mockMovie2Copy])
      );
    });

    it('should handle toggle with multiple identical movies', () => {
      const existingState = {
        movies: [mockMovie1, mockMovie1, mockMovie2Copy],
      };

      const action = WatchlistActions.toggleWatchlist({ movie: mockMovie1 });
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([mockMovie2Copy]);
    });
  });

  describe('clearWatchlist', () => {
    it('should clear all movies from watchlist', () => {
      const existingState = {
        movies: [mockMovie1, mockMovie2Copy],
      };

      const action = WatchlistActions.clearWatchlist();
      const state = watchlistReducer(existingState, action);

      expect(state.movies).toEqual([]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([])
      );
    });

    it('should clear empty watchlist without error', () => {
      const action = WatchlistActions.clearWatchlist();
      const state = watchlistReducer(initialWatchlistState, action);

      expect(state.movies).toEqual([]);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'watchlist',
        JSON.stringify([])
      );
    });
  });

  describe('State Immutability', () => {
    it('should not mutate the original state', () => {
      const action = WatchlistActions.addToWatchlist({ movie: mockMovie1 });
      const originalState = { ...initialWatchlistState };
      const newState = watchlistReducer(initialWatchlistState, action);

      expect(newState).not.toBe(initialWatchlistState);
      expect(initialWatchlistState).toEqual(originalState);
    });

    it('should create new movies array on changes', () => {
      const existingState = {
        movies: [mockMovie1],
      };

      const action = WatchlistActions.addToWatchlist({ movie: mockMovie2Copy });
      const newState = watchlistReducer(existingState, action);

      expect(newState.movies).not.toBe(existingState.movies);
      expect(newState.movies).toEqual([mockMovie1, mockMovie2Copy]);
      expect(existingState.movies).toEqual([mockMovie1]);
    });
  });

  describe('LocalStorage Integration', () => {
    it('should save to localStorage on every action that modifies state', () => {
      const actions = [
        WatchlistActions.addToWatchlist({ movie: mockMovie1 }),
        WatchlistActions.removeFromWatchlist({ movieId: 123 }),
        WatchlistActions.toggleWatchlist({ movie: mockMovie2Copy }),
        WatchlistActions.clearWatchlist(),
      ];

      let state = initialWatchlistState;
      actions.forEach((action) => {
        state = watchlistReducer(state, action);
      });

      expect(localStorage.setItem).toHaveBeenCalledTimes(4);
    });

    it('should handle localStorage being unavailable', () => {
      (localStorage.setItem as jasmine.Spy).and.throwError(
        'localStorage not available'
      );

      const action = WatchlistActions.addToWatchlist({ movie: mockMovie1 });

      expect(() => {
        watchlistReducer(initialWatchlistState, action);
      }).not.toThrow();
    });
  });
});

import * as WatchlistSelectors from './watchlist.selectors';
import { WatchlistState } from './watchlist.reducer';

describe('Watchlist Selectors', () => {
  const mockMovie1 = mockMovie;
  const mockMovie2Copy = mockMovie2;

  const mockWatchlistState: WatchlistState = {
    movies: [mockMovie1, mockMovie2Copy],
  };

  const mockAppState = { watchlist: mockWatchlistState };

  describe('selectWatchlistState', () => {
    it('should select the watchlist state', () => {
      const result = WatchlistSelectors.selectWatchlistState(mockAppState);
      expect(result).toEqual(mockWatchlistState);
    });
  });

  describe('selectWatchlistMovies', () => {
    it('should select watchlist movies', () => {
      const result = WatchlistSelectors.selectWatchlistMovies(mockAppState);
      expect(result).toEqual([mockMovie1, mockMovie2Copy]);
    });

    it('should return empty array when no movies in watchlist', () => {
      const emptyState = { watchlist: { movies: [] } };
      const result = WatchlistSelectors.selectWatchlistMovies(emptyState);
      expect(result).toEqual([]);
    });
  });

  describe('selectWatchlistCount', () => {
    it('should return count of movies in watchlist', () => {
      const result = WatchlistSelectors.selectWatchlistCount(mockAppState);
      expect(result).toBe(2);
    });

    it('should return 0 for empty watchlist', () => {
      const emptyState = { watchlist: { movies: [] } };
      const result = WatchlistSelectors.selectWatchlistCount(emptyState);
      expect(result).toBe(0);
    });

    it('should handle large watchlists', () => {
      const largeMovieList = Array.from({ length: 100 }, (_, index) => ({
        ...mockMovie1,
        id: index + 1,
      }));
      const largeState = { watchlist: { movies: largeMovieList } };
      const result = WatchlistSelectors.selectWatchlistCount(largeState);
      expect(result).toBe(100);
    });
  });

  describe('selectIsInWatchlist', () => {
    it('should return true for movie in watchlist', () => {
      const selector = WatchlistSelectors.selectIsInWatchlist(123);
      const result = selector(mockAppState);
      expect(result).toBe(true);
    });

    it('should return false for movie not in watchlist', () => {
      const selector = WatchlistSelectors.selectIsInWatchlist(999);
      const result = selector(mockAppState);
      expect(result).toBe(false);
    });

    it('should return false for empty watchlist', () => {
      const emptyState = { watchlist: { movies: [] } };
      const selector = WatchlistSelectors.selectIsInWatchlist(123);
      const result = selector(emptyState);
      expect(result).toBe(false);
    });

    it('should handle undefined movieId', () => {
      const selector = WatchlistSelectors.selectIsInWatchlist(undefined as any);
      const result = selector(mockAppState);
      expect(result).toBe(false);
    });
  });

  describe('selectWatchlistMovieIds', () => {
    it('should return array of movie IDs', () => {
      const result = WatchlistSelectors.selectWatchlistMovieIds(mockAppState);
      expect(result).toEqual([123, 2]);
    });

    it('should return empty array for empty watchlist', () => {
      const emptyState = { watchlist: { movies: [] } };
      const result = WatchlistSelectors.selectWatchlistMovieIds(emptyState);
      expect(result).toEqual([]);
    });

    it('should handle movies with duplicate IDs', () => {
      const duplicateState = {
        watchlist: {
          movies: [mockMovie1, mockMovie1, mockMovie2Copy],
        },
      };
      const result = WatchlistSelectors.selectWatchlistMovieIds(duplicateState);
      expect(result).toEqual([123, 123, 2]);
    });
  });

  describe('Selector Memoization', () => {
    it('should memoize watchlist movies selector', () => {
      const result1 = WatchlistSelectors.selectWatchlistMovies(mockAppState);
      const result2 = WatchlistSelectors.selectWatchlistMovies(mockAppState);

      expect(result1).toBe(result2);
    });

    it('should memoize watchlist count selector', () => {
      const result1 = WatchlistSelectors.selectWatchlistCount(mockAppState);
      const result2 = WatchlistSelectors.selectWatchlistCount(mockAppState);

      expect(result1).toBe(result2);
    });

    it('should return new result when state changes', () => {
      const result1 = WatchlistSelectors.selectWatchlistMovies(mockAppState);

      const newMovie = { ...mockMovie1, id: 3, title: 'New Movie' };
      const updatedState = {
        watchlist: {
          movies: [newMovie],
        },
      };

      const result2 = WatchlistSelectors.selectWatchlistMovies(updatedState);

      expect(result1).not.toBe(result2);
      expect(result2).toEqual([newMovie]);
    });

    it('should memoize isInWatchlist selector for same ID', () => {
      const selector = WatchlistSelectors.selectIsInWatchlist(123);
      const result1 = selector(mockAppState);
      const result2 = selector(mockAppState);

      expect(result1).toBe(result2);
      expect(result1).toBe(true);
    });
  });

  describe('Performance Tests', () => {
    it('should efficiently check if movie is in large watchlist', () => {
      const largeMovieList = Array.from({ length: 1000 }, (_, index) => ({
        ...mockMovie1,
        id: index + 1,
      }));

      const largeState = { watchlist: { movies: largeMovieList } };
      const selector = WatchlistSelectors.selectIsInWatchlist(500);

      const startTime = performance.now();
      const result = selector(largeState);
      const endTime = performance.now();

      expect(result).toBe(true);
      expect(endTime - startTime).toBeLessThan(10);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null/undefined state gracefully', () => {
      const nullState = { watchlist: null as any };

      expect(() => {
        WatchlistSelectors.selectWatchlistState(nullState);
      }).not.toThrow();
    });

    it('should handle malformed movie objects', () => {
      const malformedState = {
        watchlist: {
          movies: [{ id: 1 }, null, undefined, mockMovie1],
        },
      };

      const result = WatchlistSelectors.selectWatchlistCount(
        malformedState as any
      );
      expect(result).toBe(4);
    });
  });
});
