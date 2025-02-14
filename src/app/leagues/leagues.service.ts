import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private readonly http: HttpClient) {}

  base = environment.apiUrl;

  createLeague(league: FormData) {
    return this.http.post(`${this.base}league/create`, league);
  }
}
