import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authservice = inject(AuthService);
  if (!authservice.isLoggedIn()) {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
  const requiredRole = route.data?.['role'];

  const userRole = authservice.getUserRole();

  if (requiredRole && requiredRole !== userRole) {
    const router = inject(Router);
    router.navigate(['/access-denied']);
    return false;
  }

  return true

};
