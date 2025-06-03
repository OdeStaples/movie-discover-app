import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tmdbAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.tmdbApiKey}`,
      accept: 'application/json',
    },
  });
  return next(authRequest);
};
