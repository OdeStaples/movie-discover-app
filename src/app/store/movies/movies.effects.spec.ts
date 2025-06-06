import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import { MovieEffects } from './movies.effects';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './movies.actions';
import { cold, hot } from 'jasmine-marbles';
import { mockMovie, mockApiResponse } from '../../mocks/app.mock';

describe('MovieEffects', () => {
  let actions$: Observable<Action>;
  let effects: MovieEffects;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MovieService', [
      'getPopularMovies',
      'getTrendingMovies',
      'discoverMoviesByGenre',
      'getMovieDetails',
      'getSimilarMovies',
    ]);

    TestBed.configureTestingModule({
      providers: [
        MovieEffects,
        provideMockActions(() => actions$),
        { provide: MovieService, useValue: spy },
      ],
    });

    effects = TestBed.inject(MovieEffects);
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
  });

  describe('loadPopularMovies$', () => {
    it('should return loadPopularMoviesSuccess on successful API call', () => {
      const action = MovieActions.loadPopularMovies();
      const successAction = MovieActions.loadPopularMoviesSuccess({
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.getPopularMovies.and.returnValue(response);

      expect(effects.loadPopularMovies$).toBeObservable(expected);
    });

    it('should return loadPopularMoviesFailure on API error', () => {
      const action = MovieActions.loadPopularMovies();
      const error = 'Network error';
      const failureAction = MovieActions.loadPopularMoviesFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.getPopularMovies.and.returnValue(response);

      expect(effects.loadPopularMovies$).toBeObservable(expected);
    });

    it('should handle empty results', () => {
      const action = MovieActions.loadPopularMovies();
      const emptyResponse = { ...mockApiResponse, results: [] };
      const successAction = MovieActions.loadPopularMoviesSuccess({
        movies: [],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: emptyResponse });
      const expected = cold('--b', { b: successAction });

      movieService.getPopularMovies.and.returnValue(response);

      expect(effects.loadPopularMovies$).toBeObservable(expected);
    });
  });

  describe('loadTrendingMovies$', () => {
    it('should return loadTrendingMoviesSuccess on successful API call', () => {
      const action = MovieActions.loadTrendingMovies();
      const successAction = MovieActions.loadTrendingMoviesSuccess({
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.getTrendingMovies.and.returnValue(response);

      expect(effects.loadTrendingMovies$).toBeObservable(expected);
    });

    it('should return loadTrendingMoviesFailure on API error', () => {
      const action = MovieActions.loadTrendingMovies();
      const error = 'API Error';
      const failureAction = MovieActions.loadTrendingMoviesFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.getTrendingMovies.and.returnValue(response);

      expect(effects.loadTrendingMovies$).toBeObservable(expected);
    });
  });

  describe('loadFeelGoodMovies$', () => {
    it('should return loadCategoryMoviesSuccess with feelGood category', () => {
      const action = MovieActions.loadFeelGoodMovies();
      const successAction = MovieActions.loadCategoryMoviesSuccess({
        category: 'feelGood',
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.discoverMoviesByGenre.and.returnValue(response);

      expect(effects.loadFeelGoodMovies$).toBeObservable(expected);
      expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
        35, 10751, 10749,
      ]);
    });

    it('should return loadCategoryMoviesFailure on API error', () => {
      const action = MovieActions.loadFeelGoodMovies();
      const error = 'Genre discovery failed';
      const failureAction = MovieActions.loadCategoryMoviesFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.discoverMoviesByGenre.and.returnValue(response);

      expect(effects.loadFeelGoodMovies$).toBeObservable(expected);
    });
  });

  describe('loadActionMovies$', () => {
    it('should return loadCategoryMoviesSuccess with action category', () => {
      const action = MovieActions.loadActionMovies();
      const successAction = MovieActions.loadCategoryMoviesSuccess({
        category: 'action',
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.discoverMoviesByGenre.and.returnValue(response);

      expect(effects.loadActionMovies$).toBeObservable(expected);
      expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
        28, 53, 12,
      ]);
    });
  });

  describe('loadMindBenderMovies$', () => {
    it('should return loadCategoryMoviesSuccess with mindBender category', () => {
      const action = MovieActions.loadMindBenderMovies();
      const successAction = MovieActions.loadCategoryMoviesSuccess({
        category: 'mindBender',
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.discoverMoviesByGenre.and.returnValue(response);

      expect(effects.loadMindBenderMovies$).toBeObservable(expected);
      expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
        878, 9648, 27,
      ]);
    });
  });

  describe('loadMovieDetails$', () => {
    it('should return loadMovieDetailsSuccess on successful API call', () => {
      const movieId = 123;
      const action = MovieActions.loadMovieDetails({ movieId });
      const successAction = MovieActions.loadMovieDetailsSuccess({
        movie: mockMovie,
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockMovie });
      const expected = cold('--b', { b: successAction });

      movieService.getMovieDetails.and.returnValue(response);

      expect(effects.loadMovieDetails$).toBeObservable(expected);
      expect(movieService.getMovieDetails).toHaveBeenCalledWith(movieId);
    });

    it('should return loadMovieDetailsFailure on API error', () => {
      const movieId = 123;
      const action = MovieActions.loadMovieDetails({ movieId });
      const error = 'Movie not found';
      const failureAction = MovieActions.loadMovieDetailsFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.getMovieDetails.and.returnValue(response);

      expect(effects.loadMovieDetails$).toBeObservable(expected);
    });

    it('should handle multiple movie detail requests', () => {
      const movieId1 = 123;
      const movieId2 = 456;
      const action1 = MovieActions.loadMovieDetails({ movieId: movieId1 });
      const action2 = MovieActions.loadMovieDetails({ movieId: movieId2 });

      const movie2 = { ...mockMovie, id: movieId2, title: 'Second Movie' };

      const successAction1 = MovieActions.loadMovieDetailsSuccess({
        movie: mockMovie,
      });
      const successAction2 = MovieActions.loadMovieDetailsSuccess({
        movie: movie2,
      });

      actions$ = hot('-a-b-', { a: action1, b: action2 });

      movieService.getMovieDetails.and.callFake((id: number) => {
        if (id === movieId1) return cold('-a|', { a: mockMovie });
        if (id === movieId2) return cold('-a|', { a: movie2 });
        return cold('-#|', {}, new Error('Unknown movie'));
      });

      const expected = cold('--a-b', { a: successAction1, b: successAction2 });

      expect(effects.loadMovieDetails$).toBeObservable(expected);
    });
  });

  describe('loadSimilarMovies$', () => {
    it('should return loadSimilarMoviesSuccess on successful API call', () => {
      const movieId = 123;
      const action = MovieActions.loadSimilarMovies({ movieId });
      const successAction = MovieActions.loadSimilarMoviesSuccess({
        movies: [mockMovie],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: mockApiResponse });
      const expected = cold('--b', { b: successAction });

      movieService.getSimilarMovies.and.returnValue(response);

      expect(effects.loadSimilarMovies$).toBeObservable(expected);
      expect(movieService.getSimilarMovies).toHaveBeenCalledWith(movieId);
    });

    it('should return loadSimilarMoviesFailure on API error', () => {
      const movieId = 123;
      const action = MovieActions.loadSimilarMovies({ movieId });
      const error = 'Similar movies not found';
      const failureAction = MovieActions.loadSimilarMoviesFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, new Error(error));
      const expected = cold('--b', { b: failureAction });

      movieService.getSimilarMovies.and.returnValue(response);

      expect(effects.loadSimilarMovies$).toBeObservable(expected);
    });

    it('should handle empty similar movies results', () => {
      const movieId = 123;
      const action = MovieActions.loadSimilarMovies({ movieId });
      const emptyResponse = { ...mockApiResponse, results: [] };
      const successAction = MovieActions.loadSimilarMoviesSuccess({
        movies: [],
      });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: emptyResponse });
      const expected = cold('--b', { b: successAction });

      movieService.getSimilarMovies.and.returnValue(response);

      expect(effects.loadSimilarMovies$).toBeObservable(expected);
    });
  });

  describe('Error Handling', () => {
    it('should handle network timeouts', () => {
      const action = MovieActions.loadPopularMovies();
      const error = 'Request timeout';
      const failureAction = MovieActions.loadPopularMoviesFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, { message: error });
      const expected = cold('--b', { b: failureAction });

      movieService.getPopularMovies.and.returnValue(response);

      expect(effects.loadPopularMovies$).toBeObservable(expected);
    });

    it('should handle malformed API responses gracefully', () => {
      const action = MovieActions.loadPopularMovies();
      const malformedResponse = { invalid: 'response' };

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: malformedResponse });

      movieService.getPopularMovies.and.returnValue(response);

      effects.loadPopularMovies$.subscribe({
        next: (result) => {
          expect(result.type).toBe('[Movie] Load Popular Movies Success');
          expect((result as any).movies).toBeUndefined();
        },
      });
    });
  });

  describe('Genre ID Mapping', () => {
    it('should use correct genre IDs for feelGood category', () => {
      const action = MovieActions.loadFeelGoodMovies();
      actions$ = of(action);
      movieService.discoverMoviesByGenre.and.returnValue(of(mockApiResponse));

      effects.loadFeelGoodMovies$.subscribe(() => {
        expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
          35, 10751, 10749,
        ]);
      });
    });

    it('should use correct genre IDs for action category', () => {
      const action = MovieActions.loadActionMovies();
      actions$ = of(action);
      movieService.discoverMoviesByGenre.and.returnValue(of(mockApiResponse));

      effects.loadActionMovies$.subscribe(() => {
        expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
          28, 53, 12,
        ]);
      });
    });

    it('should use correct genre IDs for mindBender category', () => {
      const action = MovieActions.loadMindBenderMovies();
      actions$ = of(action);
      movieService.discoverMoviesByGenre.and.returnValue(of(mockApiResponse));

      effects.loadMindBenderMovies$.subscribe(() => {
        expect(movieService.discoverMoviesByGenre).toHaveBeenCalledWith([
          878, 9648, 27,
        ]);
      });
    });
  });
});
