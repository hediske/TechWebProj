import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
  register(firstName: string, lastName: string, phoneNumber: string, address: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { firstName, lastName, phoneNumber, address, email, password, role }).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}