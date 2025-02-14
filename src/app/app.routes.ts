import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { tokenGuard } from './guards/token.guard';
import { LeaguesComponent } from './leagues/leagues.component';
import { CreateLeagueComponent } from './leagues/create-league/create-league.component';

export const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent, title: 'Ligas', canActivate: [tokenGuard] },
  { path: 'leagues/create', component: CreateLeagueComponent, canActivate: [tokenGuard] },
  { path: 'login', component: LoginComponent, title: 'Login' },
];
