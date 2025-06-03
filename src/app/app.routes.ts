import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./containers/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./containers/movie-detail/movie-detail.component').then(
        (c) => c.MovieDetailComponent
      ),
  },
  { path: '**', redirectTo: '/home' },
];
