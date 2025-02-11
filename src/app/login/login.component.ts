import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AdminLogin } from './login.interface';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

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
        this.loginService.createCookie(token, this.loginForm.get('keep')!.value!);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
