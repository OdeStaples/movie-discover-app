import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as SearchActions from './search.actions';
import { MovieService } from '../../services/movie.service';

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);
  private movieService = inject(MovieService);

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchMovies),
      switchMap(({ query }) => {
        // Return empty results for empty or whitespace-only queries
        if (!query || !query.trim()) {
          return of(SearchActions.searchMoviesSuccess({ movies: [] }));
        }

        return this.movieService.searchMovies(query.trim()).pipe(
          map((response) =>
            SearchActions.searchMoviesSuccess({ movies: response.results })
          ),
          catchError((error) =>
            of(SearchActions.searchFailure({ error: error.message }))
          )
        );
      })
    )
  );

  searchPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchPeople),
      switchMap(({ query }) => {
        if (!query || !query.trim()) {
          return of(SearchActions.searchPeopleSuccess({ actors: [] }));
        }

        return this.movieService.searchPeople(query).pipe(
          map((response) =>
            SearchActions.searchPeopleSuccess({ actors: response.results })
          ),
          catchError((error) =>
            of(SearchActions.searchFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
