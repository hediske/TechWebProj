import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token'); // Check if a token exists

    if (!token) {
      this.router.navigate(['/logging'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    try {
      const role = localStorage.getItem('role');
      const requiredRole = next.data['role']; // Get role from route data

      if (requiredRole && role !== requiredRole) {
        this.router.navigate(['/unauthorized']); // Redirect if role mismatch
        return false;
      }

      return true; // Allow access if token is valid and role matches
    } catch (error) {
      localStorage.removeItem('token'); // Remove invalid token
      this.router.navigate(['/logging']);
      return false;
    }



  }
}
