import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor(private readonly http: HttpClient) {}

  createLeague(league: FormData) {
    return this.http.post('http://localhost:3000/league/create', league);
  }
}
