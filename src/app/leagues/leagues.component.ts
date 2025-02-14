import { Component } from '@angular/core';
import { LeaguesService } from './leagues.service';
import { League } from './leagues.interface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-leagues',
  imports: [],
  templateUrl: './leagues.component.html',
})
export class LeaguesComponent {
  leagues?: League[];
  imgUrl = environment.apiUrl + 'uploads/'

  constructor(private readonly leaguesService: LeaguesService) {
    leaguesService.getAllLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
  }
}
