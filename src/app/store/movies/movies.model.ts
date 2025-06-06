import { Movie } from '../../models/movie.model';

export interface MovieState {
  popularMovies: Movie[];
  popularMoviesLoading: boolean;
  popularMoviesError: string | null;

  trendingMovies: Movie[];
  trendingMoviesLoading: boolean;
  trendingMoviesError: string | null;

  feelGoodMovies: Movie[];
  actionMovies: Movie[];
  mindBenderMovies: Movie[];
  categoryMoviesLoading: boolean;
  categoryMoviesError: string | null;
  selectedCategory: 'feelGood' | 'action' | 'mindBender' | null;

  selectedMovie: Movie | null;
  selectedMovieLoading: boolean;
  selectedMovieError: string | null;

  similarMovies: Movie[];
  similarMoviesLoading: boolean;
  similarMoviesError: string | null;
}

export const initialMovieState: MovieState = {
  popularMovies: [],
  popularMoviesLoading: false,
  popularMoviesError: null,

  trendingMovies: [],
  trendingMoviesLoading: false,
  trendingMoviesError: null,

  feelGoodMovies: [],
  actionMovies: [],
  mindBenderMovies: [],
  categoryMoviesLoading: false,
  categoryMoviesError: null,
  selectedCategory: null,

  selectedMovie: null,
  selectedMovieLoading: false,
  selectedMovieError: null,

  similarMovies: [],
  similarMoviesLoading: false,
  similarMoviesError: null,
};
