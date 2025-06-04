import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WatchlistState } from './watchlist.reducer';

export const selectWatchlistState =
  createFeatureSelector<WatchlistState>('watchlist');

export const selectWatchlistMovies = createSelector(
  selectWatchlistState,
  (state) => state.movies
);

export const selectWatchlistCount = createSelector(
  selectWatchlistMovies,
  (movies) => movies.length
);

export const selectIsInWatchlist = (movieId: number) =>
  createSelector(selectWatchlistMovies, (movies) =>
    movies.some((movie) => movie.id === movieId)
  );

export const selectWatchlistMovieIds = createSelector(
  selectWatchlistMovies,
  (movies) => movies.map((movie) => movie.id)
);
