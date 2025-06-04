import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export const loadWatchlist = createAction('[Watchlist] Load Watchlist');

export const addToWatchlist = createAction(
  '[Watchlist] Add To Watchlist',
  props<{ movie: Movie }>()
);

export const removeFromWatchlist = createAction(
  '[Watchlist] Remove From Watchlist',
  props<{ movieId: number }>()
);

export const toggleWatchlist = createAction(
  '[Watchlist] Toggle Watchlist',
  props<{ movie: Movie }>()
);

export const clearWatchlist = createAction('[Watchlist] Clear Watchlist');
