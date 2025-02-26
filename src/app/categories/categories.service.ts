import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateCategory } from './categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private base = environment.apiUrl + 'category';

  create(category: CreateCategory) {
    return this.http.post(this.base + '/create', category);
  }
}
