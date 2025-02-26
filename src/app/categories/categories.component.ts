import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from './categories.service';
import { CreateCategory } from './categories.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-categories',
  imports: [NavComponent, ReactiveFormsModule],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  constructor(private categoriesService: CategoriesService, private cookieService: CookieService) {}

  createForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submitCreateForm() {
    const newCategory: CreateCategory = {
      name: this.createForm.get('name')!.value!,
      league: this.cookieService.get('league'),
    };

    this.categoriesService.create(newCategory).subscribe();
  }
}
