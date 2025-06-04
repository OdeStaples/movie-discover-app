// src/app/store/search/search.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

// export const selectSearchType = createSelector(
//   selectSearchState,
//   (state) => state.searchType
// );

// export const selectSearchQuery = createSelector(
//   selectSearchState,
//   (state) => state.query
// );

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

// Get current results based on search type
// export const selectCurrentResults = createSelector(
//   selectSearchState,
//   (state) => {
//     return state.searchType === 'movie'
//       ? state.movieResults
//       : state.actorResults;
//   }
// );

// export const selectHasResults = createSelector(
//   selectCurrentResults,
//   (results) => results.length > 0
// );
