import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { TeamService } from './team.service';
import { CookieService } from 'ngx-cookie-service';
import { Team } from './team.interface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-teams',
  imports: [NavComponent, RouterLink],
  templateUrl: './teams.component.html',
})
export class TeamsComponent {
  teams!: Team[];
  imgUrl = environment.apiUrl + 'uploads/shields/';

  constructor(private teamService: TeamService, private readonly cookieService: CookieService) {
    teamService.getTeams({ league: cookieService.get('league') }).subscribe((teams) => {
      this.teams = teams;
    });
  }
}
