import * as WatchlistSelectors from './watchlist.selectors';
import { WatchlistState } from './watchlist.reducer';
import { mockMovie, mockMovie2 } from '../../mocks/app.mock';

describe('Watchlist Selectors', () => {
  const mockMovie1 = mockMovie;

  const mockWatchlistState: WatchlistState = {
    movies: [mockMovie1, mockMovie2],
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
      expect(result).toEqual([mockMovie1, mockMovie2]);
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
      const selector = WatchlistSelectors.selectIsInWatchlist(1);
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
          movies: [mockMovie1, mockMovie1, mockMovie2],
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
