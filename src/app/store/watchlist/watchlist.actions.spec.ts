import * as WatchlistActions from './watchlist.actions';
import { mockMovie } from '../../mocks/app.mock';

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
