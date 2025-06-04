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
      import('./containers/home/home.page').then((c) => c.HomePage),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./containers/movie-detail/movie-detail.page').then(
        (c) => c.MovieDetailPage
      ),
  },
  {
    path: 'person/:id',
    loadComponent: () =>
      import('./containers/people-detail/people-detail.page').then(
        (c) => c.PeopleDetailPage
      ),
  },
  { path: '**', redirectTo: '/home' },
];
