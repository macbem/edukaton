import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private isUserATeacher: boolean;
  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isTeacher(): boolean {
    return this.isUserATeacher;
  }

  setToken(token?: string): void {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  signUp(email: string, password: string, isTeacher: boolean): Observable<any> {
    const apiUrl = environment.apiUrl;

    return this.http.post(`${apiUrl}/api/sign_up`, {
      email,
      password,
      is_teacher: isTeacher
    }).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setToken(response.token);

          this.isUserATeacher = !!response.is_teacher;
        }
      }),
      map((response: any) => {
        if (!response.token) {
          Observable.throw(response);
        }
      })
    );
  }

  logIn(email: string, password: string): Observable<any> {
    const apiUrl = environment.apiUrl;

    return this.http.post(`${apiUrl}/api/sign_in`, {
      email,
      password
    }).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setToken(response.token);

          this.isUserATeacher = !!response.is_teacher;
        }
      }),
      map((response: any) => {
        if (!response.token) {
          Observable.throw(response);
        }
      })
    );
  }

  logOut() {
    this.setToken();
  }
}
