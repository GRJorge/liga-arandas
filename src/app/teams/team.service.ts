import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private readonly http: HttpClient) {}

  private base = environment.apiUrl + 'team';

  createTeam(team: FormData) {
    return this.http.post(`${this.base}/create`, team);
  }
}
