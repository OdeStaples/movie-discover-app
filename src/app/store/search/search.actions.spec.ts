import * as SearchActions from './search.actions';
import { Movie } from '../../models/movie.model';
import {
  mockActor,
  mockMovie,
  mockError,
  mockQuery,
} from '../../mocks/app.mock';

describe('Search Actions', () => {
  const mockMovies = [mockMovie];
  const mockActors = [mockActor];

  describe('Search Type Actions', () => {
    it('should create setSearchType action for movie', () => {
      const action = SearchActions.setSearchType({ searchType: 'movie' });

      expect(action.type).toBe('[Search] Set Search Type');
      expect(action.searchType).toBe('movie');
    });

    it('should create setSearchType action for person', () => {
      const action = SearchActions.setSearchType({ searchType: 'person' });

      expect(action.type).toBe('[Search] Set Search Type');
      expect(action.searchType).toBe('person');
    });
  });

  describe('Search Query Actions', () => {
    it('should create setSearchQuery action', () => {
      const action = SearchActions.setSearchQuery({ query: mockQuery });

      expect(action.type).toBe('[Search] Set Search Query');
      expect(action.query).toBe(mockQuery);
    });

    it('should create searchMovies action', () => {
      const action = SearchActions.searchMovies({ query: mockQuery });

      expect(action.type).toBe('[Search] Search Movies');
      expect(action.query).toBe(mockQuery);
    });

    it('should create searchPeople action', () => {
      const action = SearchActions.searchPeople({ query: mockQuery });

      expect(action.type).toBe('[Search] Search People');
      expect(action.query).toBe(mockQuery);
    });
  });

  describe('Search Success Actions', () => {
    it('should create searchMoviesSuccess action', () => {
      const action = SearchActions.searchMoviesSuccess({ movies: mockMovies });

      expect(action.type).toBe('[Search] Search Movies Success');
      expect(action.movies).toEqual(mockMovies);
    });

    it('should create searchPeopleSuccess action', () => {
      const action = SearchActions.searchPeopleSuccess({ actors: mockActors });

      expect(action.type).toBe('[Search] Search People Success');
      expect(action.actors).toEqual(mockActors);
    });
  });

  describe('Search Failure Actions', () => {
    it('should create searchFailure action', () => {
      const action = SearchActions.searchFailure({ error: mockError });

      expect(action.type).toBe('[Search] Search Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Clear Actions', () => {
    it('should create clearSearchResults action', () => {
      const action = SearchActions.clearSearchResults();

      expect(action.type).toBe('[Search] Clear Search Results');
    });
  });
});
