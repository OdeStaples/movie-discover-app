import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tmdbAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const headers: { [key: string]: string } = {
    accept: 'application/json',
  };

  if (!req.headers.has('Authorization')) {
    headers['Authorization'] = `Bearer ${environment.tmdbApiKey}`;
  }

  const authRequest = req.clone({
    setHeaders: headers,
  });

  return next(authRequest);
};
