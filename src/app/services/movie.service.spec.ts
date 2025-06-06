import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../environments/environment';
import { mockMovie, mockPerson, mockApiResponse } from '../mocks/app.mock';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.tmdbBaseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPopularMovies', () => {
    it('should fetch popular movies', () => {
      service.getPopularMovies().subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
        expect(response.results.length).toBe(1);
        expect(response.results[0].title).toBe('Test Movie');
      });

      const req = httpMock.expectOne(`${baseUrl}/movie/popular`);
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });

    it('should handle error when fetching popular movies', () => {
      const errorMessage = 'Network error';

      service.getPopularMovies().subscribe({
        next: () => fail('Expected an error'),
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`${baseUrl}/movie/popular`);
      req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
    });
  });

  describe('getMovieDetails', () => {
    it('should fetch movie details with append_to_response', () => {
      const movieId = 123;
      const detailedMovie = { ...mockMovie, runtime: 120, budget: 1000000 };

      service.getMovieDetails(movieId).subscribe((movie) => {
        expect(movie).toEqual(detailedMovie);
        expect(movie.id).toBe(movieId);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/movie/${movieId}?append_to_response=credits,reviews,videos,images`
      );
      expect(req.request.method).toBe('GET');
      req.flush(detailedMovie);
    });

    it('should handle error when movie not found', () => {
      const movieId = 999;

      service.getMovieDetails(movieId).subscribe({
        next: () => fail('Expected an error'),
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne(
        `${baseUrl}/movie/${movieId}?append_to_response=credits,reviews,videos,images`
      );
      req.flush('Movie not found', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('searchMovies', () => {
    it('should search movies with encoded query', () => {
      const query = 'test movie';

      service.searchMovies(query).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/search/movie?query=${encodeURIComponent(query)}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });

    it('should handle special characters in search query', () => {
      const query = 'test & movie!';

      service.searchMovies(query).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/search/movie?query=${encodeURIComponent(query)}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });

    it('should return empty results for empty query', () => {
      const query = '';

      service.searchMovies(query).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/search/movie?query=${encodeURIComponent(query)}`
      );
      req.flush(mockApiResponse);
    });
  });

  describe('searchPeople', () => {
    it('should search people', () => {
      const query = 'test actor';
      const mockPeopleResponse = {
        page: 1,
        results: [mockPerson],
        total_pages: 5,
        total_results: 50,
      };

      service.searchPeople(query).subscribe((response) => {
        expect(response).toEqual(mockPeopleResponse);
        expect(response.results[0].name).toBe('Test Actor');
      });

      const req = httpMock.expectOne(
        `${baseUrl}/search/person?query=${encodeURIComponent(query)}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPeopleResponse);
    });
  });

  describe('discoverMoviesByGenre', () => {
    it('should discover movies by single genre', () => {
      const genreIds = [28]; // Action

      service.discoverMoviesByGenre(genreIds).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/discover/movie?with_genres=28`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });

    it('should discover movies by multiple genres', () => {
      const genreIds = [28, 12, 878]; // Action, Adventure, Sci-Fi

      service.discoverMoviesByGenre(genreIds).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/discover/movie?with_genres=28,12,878`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });

    it('should handle empty genre array', () => {
      const genreIds: number[] = [];

      service.discoverMoviesByGenre(genreIds).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(`${baseUrl}/discover/movie?with_genres=`);
      req.flush(mockApiResponse);
    });
  });

  describe('getSimilarMovies', () => {
    it('should get similar movies', () => {
      const movieId = 123;

      service.getSimilarMovies(movieId).subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(`${baseUrl}/movie/${movieId}/similar`);
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });
  });

  describe('getGenres', () => {
    it('should get movie genres', () => {
      const mockGenresResponse = {
        genres: [
          { id: 28, name: 'Action' },
          { id: 12, name: 'Adventure' },
        ],
      };

      service.getGenres().subscribe((response) => {
        expect(response).toEqual(mockGenresResponse);
        expect(response.genres.length).toBe(2);
      });

      const req = httpMock.expectOne(`${baseUrl}/genre/movie/list`);
      expect(req.request.method).toBe('GET');
      req.flush(mockGenresResponse);
    });
  });

  describe('getTrendingMovies', () => {
    it('should get trending movies', () => {
      service.getTrendingMovies().subscribe((response) => {
        expect(response).toEqual(mockApiResponse);
      });

      const req = httpMock.expectOne(`${baseUrl}/trending/movie/week`);
      expect(req.request.method).toBe('GET');
      req.flush(mockApiResponse);
    });
  });

  describe('getPopularPeople', () => {
    it('should get popular people', () => {
      const mockPeopleResponse = {
        page: 1,
        results: [mockPerson],
        total_pages: 5,
        total_results: 50,
      };

      service.getPopularPeople().subscribe((response) => {
        expect(response).toEqual(mockPeopleResponse);
      });

      const req = httpMock.expectOne(`${baseUrl}/person/popular`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPeopleResponse);
    });
  });

  describe('Person Detail Methods', () => {
    const personId = 123;

    it('should get person details', () => {
      const mockPersonDetails = {
        ...mockPerson,
        biography: 'Test biography',
        birthday: '1980-01-01',
        place_of_birth: 'Test City',
      };

      service.getPersonDetails(personId).subscribe((person) => {
        expect(person).toEqual(mockPersonDetails);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/person/${personId}?append_to_response=external_ids,known_for`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPersonDetails);
    });

    it('should get person movie credits', () => {
      const mockCredits = {
        cast: [{ id: 1, title: 'Test Movie', character: 'Test Character' }],
        crew: [{ id: 2, title: 'Test Movie 2', job: 'Director' }],
      };

      service.getPersonMovieCredits(personId).subscribe((credits) => {
        expect(credits).toEqual(mockCredits);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/person/${personId}/movie_credits`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockCredits);
    });

    it('should get person TV credits', () => {
      const mockTVCredits = {
        cast: [{ id: 1, name: 'Test TV Show', character: 'Test Character' }],
        crew: [{ id: 2, name: 'Test TV Show 2', job: 'Producer' }],
      };

      service.getPersonTVCredits(personId).subscribe((credits) => {
        expect(credits).toEqual(mockTVCredits);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/person/${personId}/tv_credits`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockTVCredits);
    });

    it('should get person images', () => {
      const mockImages = {
        profiles: [
          { file_path: '/profile1.jpg', width: 300, height: 450 },
          { file_path: '/profile2.jpg', width: 300, height: 450 },
        ],
      };

      service.getPersonImages(personId).subscribe((images) => {
        expect(images).toEqual(mockImages);
      });

      const req = httpMock.expectOne(`${baseUrl}/person/${personId}/images`);
      expect(req.request.method).toBe('GET');
      req.flush(mockImages);
    });

    it('should get person combined credits', () => {
      const mockCombinedCredits = {
        cast: [
          { id: 1, title: 'Test Movie', media_type: 'movie' },
          { id: 2, name: 'Test TV Show', media_type: 'tv' },
        ],
        crew: [],
      };

      service.getPersonCombinedCredits(personId).subscribe((credits) => {
        expect(credits).toEqual(mockCombinedCredits);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/person/${personId}/combined_credits`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockCombinedCredits);
    });

    it('should get person external IDs', () => {
      const mockExternalIds = {
        imdb_id: 'nm1234567',
        instagram_id: 'testactor',
        twitter_id: 'testactor',
      };

      service.getPersonExternalIds(personId).subscribe((ids) => {
        expect(ids).toEqual(mockExternalIds);
      });

      const req = httpMock.expectOne(
        `${baseUrl}/person/${personId}/external_ids`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockExternalIds);
    });
  });

  describe('Image URL Methods', () => {
    it('should return correct image URL with default size', () => {
      const path = '/test-image.jpg';
      const result = service.getImageUrl(path);
      expect(result).toBe('https://image.tmdb.org/t/p/w500/test-image.jpg');
    });

    it('should return correct image URL with custom size', () => {
      const path = '/test-image.jpg';
      const size = 'w300';
      const result = service.getImageUrl(path, size);
      expect(result).toBe('https://image.tmdb.org/t/p/w300/test-image.jpg');
    });

    it('should return backdrop URL with correct size', () => {
      const path = '/test-backdrop.jpg';
      const result = service.getBackdropUrl(path);
      expect(result).toBe('https://image.tmdb.org/t/p/w1280/test-backdrop.jpg');
    });
  });
});
