import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FileService } from '../../file/file.service';
import { TeamService } from '../team.service';
import { CookieService } from 'ngx-cookie-service';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/categories.interface';

@Component({
  selector: 'app-create-team',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-team.component.html',
})
export class CreateTeamComponent {
  categories!: Category[];

  constructor(
    private readonly teamService: TeamService,
    private router: Router,
    private readonly fileService: FileService,
    private readonly cookieService: CookieService,
    private readonly categoriesService: CategoriesService,
  ) {
    categoriesService.getByLeague(cookieService.get('league')).subscribe((categories) => {
      this.categories = categories;
    });

  }

  finalData!: FormData;

  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    shortName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    shield: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  changeShield(event: Event) {
    this.finalData = this.fileService.createFormData(event, 'shield');
    this.finalData.append('name', '');
    this.finalData.append('shortName', '');
    this.finalData.append('category', '');
    this.finalData.append('league', this.cookieService.get('league'));
  }

  submit() {
    this.finalData.set('name', this.createForm.get('name')!.value!);
    this.finalData.set('shortName', this.createForm.get('shortName')!.value!);
    this.finalData.set('category', this.createForm.get('category')!.value!);

    this.teamService.createTeam(this.finalData).subscribe((team) => {
      this.router.navigate(['/teams']);
    });
  }
}
