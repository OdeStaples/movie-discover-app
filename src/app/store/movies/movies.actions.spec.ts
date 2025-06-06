import * as MovieActions from './movies.actions';
import { Movie } from '../../models/movie.model';
import { mockMovie, mockError } from '../../mocks/app.mock';
mockMovie;

describe('Movie Actions', () => {
  const mockMovies: Movie[] = [mockMovie];
  describe('Popular Movies Actions', () => {
    it('should create loadPopularMovies action', () => {
      const action = MovieActions.loadPopularMovies();

      expect(action.type).toBe('[Movie] Load Popular Movies');
    });

    it('should create loadPopularMoviesSuccess action', () => {
      const action = MovieActions.loadPopularMoviesSuccess({
        movies: mockMovies,
      });

      expect(action.type).toBe('[Movie] Load Popular Movies Success');
      expect(action.movies).toEqual(mockMovies);
    });

    it('should create loadPopularMoviesFailure action', () => {
      const action = MovieActions.loadPopularMoviesFailure({
        error: mockError,
      });

      expect(action.type).toBe('[Movie] Load Popular Movies Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Trending Movies Actions', () => {
    it('should create loadTrendingMovies action', () => {
      const action = MovieActions.loadTrendingMovies();

      expect(action.type).toBe('[Movie] Load Trending Movies');
    });

    it('should create loadTrendingMoviesSuccess action', () => {
      const action = MovieActions.loadTrendingMoviesSuccess({
        movies: mockMovies,
      });

      expect(action.type).toBe('[Movie] Load Trending Movies Success');
      expect(action.movies).toEqual(mockMovies);
    });

    it('should create loadTrendingMoviesFailure action', () => {
      const action = MovieActions.loadTrendingMoviesFailure({
        error: mockError,
      });

      expect(action.type).toBe('[Movie] Load Trending Movies Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Category Selection Action', () => {
    it('should create selectCategory action for feelGood', () => {
      const action = MovieActions.selectCategory({ category: 'feelGood' });

      expect(action.type).toBe('[Movie] Select Category');
      expect(action.category).toBe('feelGood');
    });

    it('should create selectCategory action for action', () => {
      const action = MovieActions.selectCategory({ category: 'action' });

      expect(action.type).toBe('[Movie] Select Category');
      expect(action.category).toBe('action');
    });

    it('should create selectCategory action for mindBender', () => {
      const action = MovieActions.selectCategory({ category: 'mindBender' });

      expect(action.type).toBe('[Movie] Select Category');
      expect(action.category).toBe('mindBender');
    });
  });

  describe('Category Movies Actions', () => {
    it('should create loadFeelGoodMovies action', () => {
      const action = MovieActions.loadFeelGoodMovies();

      expect(action.type).toBe('[Movie] Load Feel Good Movies');
    });

    it('should create loadActionMovies action', () => {
      const action = MovieActions.loadActionMovies();

      expect(action.type).toBe('[Movie] Load Action Movies');
    });

    it('should create loadMindBenderMovies action', () => {
      const action = MovieActions.loadMindBenderMovies();

      expect(action.type).toBe('[Movie] Load Mind Bender Movies');
    });

    it('should create loadCategoryMoviesSuccess action', () => {
      const action = MovieActions.loadCategoryMoviesSuccess({
        category: 'feelGood',
        movies: mockMovies,
      });

      expect(action.type).toBe('[Movie] Load Category Movies Success');
      expect(action.category).toBe('feelGood');
      expect(action.movies).toEqual(mockMovies);
    });

    it('should create loadCategoryMoviesFailure action', () => {
      const action = MovieActions.loadCategoryMoviesFailure({
        error: mockError,
      });

      expect(action.type).toBe('[Movie] Load Category Movies Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Movie Details Actions', () => {
    const movieId = 123;

    it('should create loadMovieDetails action', () => {
      const action = MovieActions.loadMovieDetails({ movieId });

      expect(action.type).toBe('[Movie] Load Movie Details');
      expect(action.movieId).toBe(movieId);
    });

    it('should create loadMovieDetailsSuccess action', () => {
      const action = MovieActions.loadMovieDetailsSuccess({ movie: mockMovie });

      expect(action.type).toBe('[Movie] Load Movie Details Success');
      expect(action.movie).toEqual(mockMovie);
    });

    it('should create loadMovieDetailsFailure action', () => {
      const action = MovieActions.loadMovieDetailsFailure({ error: mockError });

      expect(action.type).toBe('[Movie] Load Movie Details Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Similar Movies Actions', () => {
    const movieId = 123;

    it('should create loadSimilarMovies action', () => {
      const action = MovieActions.loadSimilarMovies({ movieId });

      expect(action.type).toBe('[Movie] Load Similar Movies');
      expect(action.movieId).toBe(movieId);
    });

    it('should create loadSimilarMoviesSuccess action', () => {
      const action = MovieActions.loadSimilarMoviesSuccess({
        movies: mockMovies,
      });

      expect(action.type).toBe('[Movie] Load Similar Movies Success');
      expect(action.movies).toEqual(mockMovies);
    });

    it('should create loadSimilarMoviesFailure action', () => {
      const action = MovieActions.loadSimilarMoviesFailure({
        error: mockError,
      });

      expect(action.type).toBe('[Movie] Load Similar Movies Failure');
      expect(action.error).toBe(mockError);
    });
  });

  describe('Clear Actions', () => {
    it('should create clearSelectedMovie action', () => {
      const action = MovieActions.clearSelectedMovie();

      expect(action.type).toBe('[Movie] Clear Selected Movie');
    });

    it('should create clearSimilarMovies action', () => {
      const action = MovieActions.clearSimilarMovies();

      expect(action.type).toBe('[Movie] Clear Similar Movies');
    });
  });
});
