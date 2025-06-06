import { mockMovie, mockActor, mockError } from '../../mocks/app.mock';
import { searchReducer, initialSearchState } from './search.reducer';
import * as SearchActions from './search.actions';

describe('Search Reducer', () => {
  const mockMovies = [mockMovie];
  const mockActors = [mockActor];

  describe('Initial State', () => {
    it('should return the initial state', () => {
      const action = { type: 'Unknown' } as any;
      const state = searchReducer(undefined, action);

      expect(state).toBe(initialSearchState);
    });

    it('should have correct initial values', () => {
      expect(initialSearchState.query).toBe('');
      expect(initialSearchState.movieResults).toEqual([]);
      expect(initialSearchState.actorResults).toEqual([]);
      expect(initialSearchState.loading).toBe(false);
      expect(initialSearchState.error).toBe(null);
    });
  });

  describe('Search Loading States', () => {
    it('should set loading state for movie search', () => {
      const action = SearchActions.searchMovies({ query: 'test' });
      const state = searchReducer(initialSearchState, action);

      expect(state.loading).toBe(true);
      expect(state.error).toBe(null);
    });

    it('should set loading state for people search', () => {
      const action = SearchActions.searchPeople({ query: 'test' });
      const state = searchReducer(initialSearchState, action);

      expect(state.loading).toBe(true);
      expect(state.error).toBe(null);
    });

    it('should preserve other state during loading', () => {
      const existingState = {
        ...initialSearchState,
        movieResults: mockMovies,
        query: 'existing query',
      };

      const action = SearchActions.searchPeople({ query: 'new query' });
      const state = searchReducer(existingState, action);

      expect(state.loading).toBe(true);
      expect(state.movieResults).toEqual(mockMovies); // Preserved
      expect(state.query).toBe('existing query'); // Preserved
    });
  });

  describe('Search Success States', () => {
    it('should set movie results on success', () => {
      const action = SearchActions.searchMoviesSuccess({ movies: mockMovies });
      const state = searchReducer(initialSearchState, action);

      expect(state.movieResults).toEqual(mockMovies);
      expect(state.actorResults).toEqual([]); // Cleared
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
    });

    it('should set actor results on success', () => {
      const action = SearchActions.searchPeopleSuccess({ actors: mockActors });
      const state = searchReducer(initialSearchState, action);

      expect(state.actorResults).toEqual(mockActors);
      expect(state.movieResults).toEqual([]); // Cleared
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
    });

    it('should clear previous results when new search succeeds', () => {
      const existingState = {
        ...initialSearchState,
        movieResults: mockMovies,
        actorResults: mockActors,
      };

      const action = SearchActions.searchMoviesSuccess({ movies: [mockMovie] });
      const state = searchReducer(existingState, action);

      expect(state.movieResults).toEqual([mockMovie]);
      expect(state.actorResults).toEqual([]); // Previous actor results cleared
    });
  });

  describe('Search Failure States', () => {
    it('should set error on search failure', () => {
      const action = SearchActions.searchFailure({ error: mockError });
      const state = searchReducer(initialSearchState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toBe(mockError);
    });

    it('should preserve results on failure', () => {
      const existingState = {
        ...initialSearchState,
        movieResults: mockMovies,
        actorResults: mockActors,
      };

      const action = SearchActions.searchFailure({ error: mockError });
      const state = searchReducer(existingState, action);

      expect(state.movieResults).toEqual(mockMovies); // Preserved
      expect(state.actorResults).toEqual(mockActors); // Preserved
      expect(state.error).toBe(mockError);
    });
  });

  describe('Clear Search Results', () => {
    it('should clear all search data', () => {
      const existingState = {
        query: 'test query',
        movieResults: mockMovies,
        actorResults: mockActors,
        loading: false,
        error: 'some error',
      };

      const action = SearchActions.clearSearchResults();
      const state = searchReducer(existingState, action);

      expect(state.movieResults).toEqual([]);
      expect(state.actorResults).toEqual([]);
      expect(state.query).toBe('');
      expect(state.error).toBe(null);
      expect(state.loading).toBe(false); // Preserved
    });
  });

  describe('State Immutability', () => {
    it('should not mutate the original state', () => {
      const action = SearchActions.searchMoviesSuccess({ movies: mockMovies });
      const originalState = { ...initialSearchState };
      const newState = searchReducer(initialSearchState, action);

      expect(newState).not.toBe(initialSearchState);
      expect(initialSearchState).toEqual(originalState);
    });
  });
});
