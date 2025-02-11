import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { tokenGuard } from './guards/token.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
];
