import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('authToken');
  }

  setToken(token?: string): void {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  signUp(email: string, password: string): Observable<any> {
    const apiUrl = environment.apiUrl;

    return this.http.post(`${apiUrl}/signup`, {
      email,
      password
    });
  }

  logIn(email: string, password: string): Observable<any> {
    const apiUrl = environment.apiUrl;

    return this.http.post(`${apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      }),
    );
  }

  logOut() {
    this.setToken();
  }
}
