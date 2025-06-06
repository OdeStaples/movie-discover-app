import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectMovieResults = createSelector(
  selectSearchState,
  (state) => state.movieResults
);

export const selectActorResults = createSelector(
  selectSearchState,
  (state) => state.actorResults
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  (state) => state.loading
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state) => state.error
);
