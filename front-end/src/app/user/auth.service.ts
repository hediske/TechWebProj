import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';  // url mte3 api mte3 login here bech testi

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null); // To hold the user's role

  constructor(private http: HttpClient, private router: Router) {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    this.tokenSubject = new BehaviorSubject<string | null>(storedToken);
    this.userRoleSubject = new BehaviorSubject<string | null>(storedRole);

  }

  // Login method that interacts with the backend
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, { username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);  // Saving token in local storage
          localStorage.setItem('role', response.role);    // Save the role in local storage
          this.tokenSubject.next(response.token);
          this.userRoleSubject.next(response.role);  // Set role in BehaviorSubject
        }),
        catchError((error) => {
          throw error;
        })
      );
  }
  getUserRole(): string | null {
    return this.userRoleSubject.value;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.tokenSubject.next(null);
    this.userRoleSubject.next(null);
    this.router.navigate(['/logging']);
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return this.tokenSubject.value !== null;
  }

  register(name: string, email: string, password: string, role: string): Observable<any> {
    const url = ''; // Replace with api mte3 add 
    return this.http.post<any>(url, { name, email, password, role });
  }
}
