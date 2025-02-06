import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AccessToken, AdminLogin } from './login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(admin: AdminLogin): Observable<AccessToken> {
    return this.http.post<AccessToken>('http://localhost:3000/auth/login', admin);
  }
}
