import { Component } from '@angular/core';
import { LeaguesService } from './leagues.service';
import { League } from './leagues.interface';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-leagues',
  imports: [RouterLink],
  templateUrl: './leagues.component.html',
})
export class LeaguesComponent {
  leagues?: League[];
  imgUrl = environment.apiUrl + 'uploads/';

  constructor(private readonly leaguesService: LeaguesService, private readonly cookieService: CookieService, private readonly router: Router) {
    leaguesService.getAllLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
  }

  navigateToPanel(idLeague: string) {
    this.cookieService.set('league', idLeague);
    this.router.navigate(['/panel']);
  }
}
