import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-team',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-team.component.html',
})
export class CreateTeamComponent {
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    shortName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    shield: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
}
