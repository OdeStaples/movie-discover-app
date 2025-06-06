import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import * as SearchActions from './search.actions';

export interface SearchState {
  query: string;
  movieResults: Movie[];
  actorResults: any[];
  loading: boolean;
  error: string | null;
}

export const initialSearchState: SearchState = {
  query: '',
  movieResults: [],
  actorResults: [],
  loading: false,
  error: null,
};

export const searchReducer = createReducer(
  initialSearchState,

  on(SearchActions.searchMovies, SearchActions.searchPeople, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(SearchActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    movieResults: movies,
    actorResults: [],
    loading: false,
    error: null,
  })),

  on(SearchActions.searchPeopleSuccess, (state, { actors }) => ({
    ...state,
    actorResults: actors,
    movieResults: [],
    loading: false,
    error: null,
  })),

  on(SearchActions.searchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(SearchActions.clearSearchResults, (state) => ({
    ...state,
    movieResults: [],
    actorResults: [],
    query: '',
    error: null,
  }))
);
