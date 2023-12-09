import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: FormGroup = this._fb.group({
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    birthdate: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder) {
  }

  log() {
    console.log(this.form.value);
  }
}
