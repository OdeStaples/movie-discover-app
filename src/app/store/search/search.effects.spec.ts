import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { SearchEffects } from './search.effects';
import { MovieService } from '../../services/movie.service';
import { cold, hot } from 'jasmine-marbles';
import {
  mockMovie,
  mockActor,
  mockMovieResponse,
  mockActorResponse,
} from '../../mocks/app.mock';
import * as SearchActions from './search.actions';

describe('Search Effects', () => {
  let actions$: Observable<Action>;
  let effects: SearchEffects;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MovieService', [
      'searchMovies',
      'searchPeople',
    ]);

    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockActions(() => actions$),
        { provide: MovieService, useValue: spy },
      ],
    });

    effects = TestBed.inject(SearchEffects);
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
  });

  describe('searchMovies$', () => {
    it('should return searchMoviesSuccess on successful API call', () => {
      const query = 'test movie';
      const action = SearchActions.searchMovies({ query });
      const successAction = SearchActions.searchMoviesSuccess({
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockMovieResponse });
      const expected = cold('--b', { b: successAction });

      movieService.searchMovies.and.returnValue(response);

      expect(effects.searchMovies$).toBeObservable(expected);
      expect(movieService.searchMovies).toHaveBeenCalledWith('test movie');
    });

    it('should return empty results for empty query', () => {
      const action = SearchActions.searchMovies({ query: '' });
      const successAction = SearchActions.searchMoviesSuccess({ movies: [] });

      actions$ = hot('-a-', { a: action });
      const expected = cold('-b', { b: successAction });

      expect(effects.searchMovies$).toBeObservable(expected);
      expect(movieService.searchMovies).not.toHaveBeenCalled();
    });

    it('should return empty results for whitespace-only query', () => {
      const action = SearchActions.searchMovies({ query: '   ' });
      const successAction = SearchActions.searchMoviesSuccess({ movies: [] });

      actions$ = hot('-a-', { a: action });
      const expected = cold('-b', { b: successAction });

      expect(effects.searchMovies$).toBeObservable(expected);
      expect(movieService.searchMovies).not.toHaveBeenCalled();
    });

    it('should return searchFailure on API error', () => {
      const query = 'test movie';
      const action = SearchActions.searchMovies({ query });
      const error = 'Network error';
      const failureAction = SearchActions.searchFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.searchMovies.and.returnValue(response);

      expect(effects.searchMovies$).toBeObservable(expected);
    });
  });

  describe('searchPeople$', () => {
    it('should return searchPeopleSuccess on successful API call', () => {
      const query = 'test actor';
      const action = SearchActions.searchPeople({ query });
      const successAction = SearchActions.searchPeopleSuccess({
        actors: [mockActor],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockActorResponse });
      const expected = cold('--b', { b: successAction });

      movieService.searchPeople.and.returnValue(response);

      expect(effects.searchPeople$).toBeObservable(expected);
    });

    it('should return empty results for empty query', () => {
      const action = SearchActions.searchPeople({ query: '' });
      const successAction = SearchActions.searchPeopleSuccess({ actors: [] });

      actions$ = hot('-a-', { a: action });
      const expected = cold('-b', { b: successAction });

      expect(effects.searchPeople$).toBeObservable(expected);
      expect(movieService.searchPeople).not.toHaveBeenCalled();
    });

    it('should return searchFailure on API error', () => {
      const query = 'test actor';
      const action = SearchActions.searchPeople({ query });
      const error = 'API Error';
      const failureAction = SearchActions.searchFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.searchPeople.and.returnValue(response);

      expect(effects.searchPeople$).toBeObservable(expected);
    });
  });
});
