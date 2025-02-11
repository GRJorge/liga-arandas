import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { tokenGuard } from './guards/token.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [tokenGuard] },
  { path: 'login', component: LoginComponent },
];
