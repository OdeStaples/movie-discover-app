import { MovieState } from './movies/movies.reducer';
import { SearchState } from './search/search.reducer';
import { WatchlistState } from './watchlist/watchlist.reducer';

export interface AppState {
  movies: MovieState;
  search: SearchState;
  watchlist: WatchlistState;
}
