import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import * as WatchlistActions from './watchlist.actions';

export interface WatchlistState {
  movies: Movie[];
}

const loadWatchlistFromStorage = (): Movie[] => {
  try {
    const stored = localStorage.getItem('watchlist');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveWatchlistToStorage = (movies: Movie[]): void => {
  try {
    localStorage.setItem('watchlist', JSON.stringify(movies));
  } catch (error) {
    console.error('Failed to save watchlist to localStorage:', error);
  }
};

export const initialWatchlistState: WatchlistState = {
  movies: loadWatchlistFromStorage(),
};

export const watchlistReducer = createReducer(
  initialWatchlistState,

  on(WatchlistActions.loadWatchlist, (state) => ({
    ...state,
    movies: loadWatchlistFromStorage(),
  })),

  on(WatchlistActions.addToWatchlist, (state, { movie }) => {
    const isAlreadyInWatchlist = state.movies.some((m) => m.id === movie.id);
    if (isAlreadyInWatchlist) {
      return state;
    }

    const newMovies = [...state.movies, movie];
    saveWatchlistToStorage(newMovies);

    return {
      ...state,
      movies: newMovies,
    };
  }),

  on(WatchlistActions.removeFromWatchlist, (state, { movieId }) => {
    const newMovies = state.movies.filter((movie) => movie.id !== movieId);
    saveWatchlistToStorage(newMovies);

    return {
      ...state,
      movies: newMovies,
    };
  }),

  on(WatchlistActions.toggleWatchlist, (state, { movie }) => {
    const isInWatchlist = state.movies.some((m) => m.id === movie.id);
    let newMovies: Movie[];

    if (isInWatchlist) {
      newMovies = state.movies.filter((m) => m.id !== movie.id);
    } else {
      newMovies = [...state.movies, movie];
    }

    saveWatchlistToStorage(newMovies);

    return {
      ...state,
      movies: newMovies,
    };
  }),

  on(WatchlistActions.clearWatchlist, (state) => {
    saveWatchlistToStorage([]);

    return {
      ...state,
      movies: [],
    };
  })
);
