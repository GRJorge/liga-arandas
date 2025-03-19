import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [NavComponent, RouterLink],
  templateUrl: './teams.component.html',
})
export class TeamsComponent {}
