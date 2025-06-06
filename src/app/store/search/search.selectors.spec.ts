import * as SearchSelectors from './search.selectors';
import { SearchState } from './search.reducer';
import { mockActor, mockMovie } from '../../mocks/app.mock';

describe('Search Selectors', () => {
  const mockSearchState: SearchState = {
    query: 'test query',
    movieResults: [mockMovie],
    actorResults: [mockActor],
    loading: false,
    error: null,
  };

  const mockAppState = { search: mockSearchState };

  describe('selectSearchState', () => {
    it('should select the search state', () => {
      const result = SearchSelectors.selectSearchState(mockAppState);
      expect(result).toEqual(mockSearchState);
    });
  });

  describe('selectMovieResults', () => {
    it('should select movie results', () => {
      const result = SearchSelectors.selectMovieResults(mockAppState);
      expect(result).toEqual([mockMovie]);
    });

    it('should return empty array when no movie results', () => {
      const stateWithNoMovies = {
        search: { ...mockSearchState, movieResults: [] },
      };
      const result = SearchSelectors.selectMovieResults(stateWithNoMovies);
      expect(result).toEqual([]);
    });
  });

  describe('selectActorResults', () => {
    it('should select actor results', () => {
      const result = SearchSelectors.selectActorResults(mockAppState);
      expect(result).toEqual([mockActor]);
    });

    it('should return empty array when no actor results', () => {
      const stateWithNoActors = {
        search: { ...mockSearchState, actorResults: [] },
      };
      const result = SearchSelectors.selectActorResults(stateWithNoActors);
      expect(result).toEqual([]);
    });
  });

  describe('selectSearchLoading', () => {
    it('should select loading state', () => {
      const result = SearchSelectors.selectSearchLoading(mockAppState);
      expect(result).toBe(false);
    });

    it('should return true when loading', () => {
      const loadingState = {
        search: { ...mockSearchState, loading: true },
      };
      const result = SearchSelectors.selectSearchLoading(loadingState);
      expect(result).toBe(true);
    });
  });

  describe('selectSearchError', () => {
    it('should select error state', () => {
      const result = SearchSelectors.selectSearchError(mockAppState);
      expect(result).toBe(null);
    });

    it('should return error when present', () => {
      const errorState = {
        search: { ...mockSearchState, error: 'Search failed' },
      };
      const result = SearchSelectors.selectSearchError(errorState);
      expect(result).toBe('Search failed');
    });
  });

  describe('Selector Memoization', () => {
    it('should memoize movie results selector', () => {
      const result1 = SearchSelectors.selectMovieResults(mockAppState);
      const result2 = SearchSelectors.selectMovieResults(mockAppState);

      expect(result1).toBe(result2);
    });

    it('should return new result when state changes', () => {
      const result1 = SearchSelectors.selectMovieResults(mockAppState);

      const newMovie = { ...mockMovie, id: 2, title: 'New Movie' };
      const updatedState = {
        search: {
          ...mockSearchState,
          movieResults: [newMovie],
        },
      };

      const result2 = SearchSelectors.selectMovieResults(updatedState);

      expect(result1).not.toBe(result2);
      expect(result2).toEqual([newMovie]);
    });
  });
});
