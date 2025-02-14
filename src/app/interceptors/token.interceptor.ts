import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);

  if (cookieService.check('token')) {
    const reqClone = req.clone({ setHeaders: { Authorization: `Bearer ${cookieService.get('token')}` } });

    return next(reqClone);
  } else {
    return next(req);
  }
};
