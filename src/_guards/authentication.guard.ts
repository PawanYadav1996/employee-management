import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { inject } from '@angular/core';
import { AuthenticationService } from 'src/_services/authentication.service';

export const AuthenticationGuard: CanActivateFn = ():
  | Observable<boolean>
  | Promise<boolean>
  | boolean => {
  // return () => {
  const authentication = inject(AuthenticationService);
  const routers = inject(Router);
  console.log(authentication.isLogin());
  if (!authentication.isLogin()) {
    routers.navigate(['/login']);
    return false;
  }
  return true;
  // };
};
