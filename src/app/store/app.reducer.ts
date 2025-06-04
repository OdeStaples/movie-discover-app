import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { movieReducer } from './movies/movies.reducer';
import { searchReducer } from './search/search.reducer';
import { watchlistReducer } from './watchlist/watchlist.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  movies: movieReducer,
  search: searchReducer,
  watchlist: watchlistReducer,
};
