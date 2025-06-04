import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './movies.actions';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private moviesService = inject(MovieService);

  // Genre IDs for categories
  private readonly genreIds = {
    feelGood: [35, 10751, 10749], // Comedy, Family, Romance
    action: [28, 53, 12], // Action, Thriller, Adventure
    mindBender: [878, 9648, 27], // Sci-Fi, Mystery, Horror
  };

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      switchMap(() =>
        this.moviesService.getPopularMovies().pipe(
          map((response) =>
            MovieActions.loadPopularMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadPopularMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadTrendingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTrendingMovies),
      switchMap(() =>
        this.moviesService.getTrendingMovies().pipe(
          map((response) =>
            MovieActions.loadTrendingMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadTrendingMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadFeelGoodMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadFeelGoodMovies),
      switchMap(() =>
        this.moviesService.discoverMoviesByGenre(this.genreIds.feelGood).pipe(
          map((response) =>
            MovieActions.loadCategoryMoviesSuccess({
              category: 'feelGood',
              movies: response.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadCategoryMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadActionMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadActionMovies),
      switchMap(() =>
        this.moviesService.discoverMoviesByGenre(this.genreIds.action).pipe(
          map((response) =>
            MovieActions.loadCategoryMoviesSuccess({
              category: 'action',
              movies: response.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadCategoryMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadMindBenderMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMindBenderMovies),
      switchMap(() =>
        this.moviesService.discoverMoviesByGenre(this.genreIds.mindBender).pipe(
          map((response) =>
            MovieActions.loadCategoryMoviesSuccess({
              category: 'mindBender',
              movies: response.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadCategoryMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieDetails),
      switchMap(({ movieId }) =>
        this.moviesService.getMovieDetails(movieId).pipe(
          map((movie) => MovieActions.loadMovieDetailsSuccess({ movie })),
          catchError((error) =>
            of(MovieActions.loadMovieDetailsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadSimilarMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadSimilarMovies),
      switchMap(({ movieId }) =>
        this.moviesService.getSimilarMovies(movieId).pipe(
          map((response) =>
            MovieActions.loadSimilarMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(MovieActions.loadSimilarMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // constructor(private actions$: Actions, private moviesService: MovieService) {

  // }
}
