import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AdminLogin } from './login.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private cookieService: CookieService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    keep: new FormControl(false, Validators.required),
  });

  login() {
    const admin: AdminLogin = {
      email: this.loginForm.get('email')!.value!,
      password: this.loginForm.get('password')!.value!,
      keep: this.loginForm.get('keep')!.value!,
    };

    this.loginService.login(admin).subscribe({
      next: (token) => {
        this.cookieService.set('token', token.accessToken, { expires: this.loginForm.get('keep')!.value! ? 30 : 1, sameSite: 'Strict' });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
