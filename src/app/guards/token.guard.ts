import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const tokenGuard: CanActivateFn = (route, state) => {
  const cookieService: CookieService = inject(CookieService);
  const router: Router = inject(Router);

  if (cookieService.check('token')) {
    return true;
  } else {
    router.navigate(['/login']);

    return false;
  }
};
