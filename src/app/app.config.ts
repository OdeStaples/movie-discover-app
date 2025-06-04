import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbAuthInterceptor } from './interceptors/tmdb-auth.interceptor';
import { appReducers } from './store/app.reducer';
import { MovieEffects } from './store/movies/movies.effects';
import { SearchEffects } from './store/search/search.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    provideEffects([SearchEffects, MovieEffects]),
    provideHttpClient(withInterceptors([tmdbAuthInterceptor])),
  ],
};
