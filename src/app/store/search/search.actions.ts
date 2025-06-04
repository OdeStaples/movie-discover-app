import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movie.model';

export type SearchType = 'movie' | 'person';

export const setSearchType = createAction(
  '[Search] Set Search Type',
  props<{ searchType: SearchType }>()
);

export const setSearchQuery = createAction(
  '[Search] Set Search Query',
  props<{ query: string }>()
);

export const searchMovies = createAction(
  '[Search] Search Movies',
  props<{ query: string }>()
);

export const searchPeople = createAction(
  '[Search] Search People',
  props<{ query: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Search] Search Movies Success',
  props<{ movies: Movie[] }>()
);

export const searchPeopleSuccess = createAction(
  '[Search] Search People Success',
  props<{ actors: any[] }>()
);

export const searchFailure = createAction(
  '[Search] Search Failure',
  props<{ error: string }>()
);

export const clearSearchResults = createAction('[Search] Clear Search Results');
