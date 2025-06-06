import { ApiResponse, Movie } from '../models/movie.model';

export const mockMovie: Movie = {
  id: 123,
  title: 'Test Movie',
  overview: 'Test overview',
  poster_path: '/test-poster.jpg',
  backdrop_path: '/test-backdrop.jpg',
  release_date: '2023-01-01',
  vote_average: 8.5,
  genre_ids: [28, 12],
};

export const mockPerson = {
  id: 1,
  name: 'Test Actor',
  profile_path: '/test-profile.jpg',
  known_for_department: 'Acting',
  popularity: 85.5,
  known_for: [],
};

export const mockApiResponse: ApiResponse<Movie> = {
  page: 1,
  results: [mockMovie],
  total_pages: 10,
  total_results: 100,
};

export const mockError = 'Test error message';
