import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileService } from '../../file/file.service';
import { LeaguesService } from '../leagues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-league',
  imports: [ReactiveFormsModule],
  templateUrl: './create-league.component.html',
})
export class CreateLeagueComponent {
  constructor(private readonly leaguesService: LeaguesService, private readonly fileService: FileService, private readonly router: Router) {}

  finalData!: FormData;

  leagueForm = new FormGroup({
    logo: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  changeLogo(event: Event) {
    this.finalData = this.fileService.createFormData(event, 'logo');
    this.finalData.append('name', '');
  }

  submit() {
    this.finalData.set('name', this.leagueForm.get('name')!.value!);

    this.leaguesService.createLeague(this.finalData).subscribe((league) => {
      this.router.navigate(['/leagues']);
    });
  }
}
