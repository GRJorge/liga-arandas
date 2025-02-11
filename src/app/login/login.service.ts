import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AccessToken, AdminLogin } from './login.interface';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, public cookieService: CookieService) {}

  login(admin: AdminLogin): Observable<AccessToken> {
    return this.http.post<AccessToken>('http://localhost:3000/auth/login', admin);
  }
  createCookie(token: AccessToken, keepLogin: boolean) {
    this.cookieService.set('token', token.accessToken, { expires: keepLogin ? 30 : 1, sameSite: 'Strict' });
  }
}
