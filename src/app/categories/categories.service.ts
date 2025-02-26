import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category, CreateCategory } from './categories.interface';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private base = environment.apiUrl + 'category';

  create(category: CreateCategory) {
    return this.http.post(this.base + '/create', category);
  }

  getByLeague(league: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.base + '/get', { params: { league } });
  }
}
