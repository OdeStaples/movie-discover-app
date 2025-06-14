import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Genre, Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private baseUrl = environment.tmdbBaseUrl;
  prodEnv = environment.production;

  getPopularMovies(): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(`${this.baseUrl}/movie/popular`);
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?append_to_response=credits,reviews,videos,images`
    );
  }

  searchMovies(query: string): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(
      `${this.baseUrl}/search/movie?query=${encodeURIComponent(query)}`
    );
  }

  searchPeople(query: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(
      `${this.baseUrl}/search/person?query=${encodeURIComponent(query)}`
    );
  }

  discoverMoviesByGenre(genreIds: number[]): Observable<ApiResponse<Movie>> {
    const genres = genreIds.join(',');
    return this.http.get<ApiResponse<Movie>>(
      `${this.baseUrl}/discover/movie?with_genres=${genres}`
    );
  }

  getSimilarMovies(movieId: number): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(
      `${this.baseUrl}/movie/${movieId}/similar`
    );
  }

  getGenres(): Observable<{ genres: Genre[] }> {
    return this.http.get<{ genres: Genre[] }>(
      `${this.baseUrl}/genre/movie/list`
    );
  }

  getTrendingMovies(): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(
      `${this.baseUrl}/trending/movie/week`
    );
  }

  getImageUrl(path: string, size: string = 'w500'): string {
    return path
      ? `https://image.tmdb.org/t/p/${size}${path}`
      : this.prodEnv
      ? '/movie-discover-app/no-image.png'
      : '/no-image.png';
  }

  getBackdropUrl(path: string): string {
    return this.getImageUrl(path, 'w1280');
  }

  getPopularPeople(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/person/popular`);
  }

  getPersonDetails(personId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/person/${personId}?append_to_response=external_ids,known_for`
    );
  }

  getPersonMovieCredits(personId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/person/${personId}/movie_credits`
    );
  }

  getPersonTVCredits(personId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person/${personId}/tv_credits`);
  }

  getPersonImages(personId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person/${personId}/images`);
  }

  getPersonCombinedCredits(personId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/person/${personId}/combined_credits`
    );
  }

  getPersonExternalIds(personId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/person/${personId}/external_ids`
    );
  }
}
