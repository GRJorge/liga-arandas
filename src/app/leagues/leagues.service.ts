import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { League } from './leagues.interface';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private readonly http: HttpClient) {}

  private base = environment.apiUrl + 'league';

  createLeague(league: FormData) {
    return this.http.post(`${this.base}/create`, league);
  }
  getAllLeagues() {
    return this.http.get<League[]>(`${this.base}/get`);
  }
}
