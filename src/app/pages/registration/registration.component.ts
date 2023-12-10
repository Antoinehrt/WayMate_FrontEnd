import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoInputUser} from "../../utils/services/user/dtos/dto-input-user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Input() users: DtoInputUser[] = [];
  currentStep: number =1;
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
  nextStep() {
    this.currentStep++;
  }
  previousStep() {
    this.currentStep--;
  }
  log() {
    console.log(this.form.value);
  }
}
