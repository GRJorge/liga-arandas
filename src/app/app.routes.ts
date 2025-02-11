import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { tokenGuard } from './guards/token.guard';
import { LeaguesComponent } from './leagues/leagues.component';

export const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent, title: 'Ligas', canActivate: [tokenGuard] },
  { path: 'login', component: LoginComponent, title: 'Login' },
];
