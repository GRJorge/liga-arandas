import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { tokenGuard } from './guards/token.guard';
import { LeaguesComponent } from './leagues/leagues.component';
import { CreateLeagueComponent } from './leagues/create-league/create-league.component';
import { PanelComponent } from './panel/panel.component';
import { leagueGuard } from './guards/league.guard';
import { CategoriesComponent } from './categories/categories.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent, title: 'Ligas', canActivate: [tokenGuard] },
  { path: 'leagues/create', component: CreateLeagueComponent, canActivate: [tokenGuard] },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'panel', component: PanelComponent, title: 'Principal Panel', canActivate: [tokenGuard, leagueGuard] },
  { path: 'categories', component: CategoriesComponent, title: 'Categories', canActivate: [tokenGuard, leagueGuard] },
  { path: 'teams', component: TeamsComponent, title: 'Teams', canActivate: [tokenGuard, leagueGuard] },
];
