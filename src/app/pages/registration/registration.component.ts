import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoInputUser} from "../../utils/services/user/dtos/dto-input-user";
import {UserService} from "../../utils/services/user/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Input() users: DtoInputUser[] = [];
  currentStep: number =1;

  form: FormGroup = this._fb.group({
    // phone: ['', [Validators.required]],
    // email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required]],
    // surname: ['', [Validators.required]],
    // firstname: ['', [Validators.required]],
    // birthdate: ['', [Validators.required]]
    username:['', [Validators.required]],
    password:['', [Validators.required]],
    email: ['', [Validators.required]],
    birthdate: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder, private _userService: UserService) {
  }
  nextStep() {
    this.currentStep++;
  }
  previousStep() {
    this.currentStep--;
  }

  onSubmit(){
    if(this.form.valid){
      const registrationData = this.form.value;
      this._userService.registerUser(registrationData).subscribe(
        (response) => {
          console.log("User registered succesfully:", response);
        },
        (error) => {
          console.log("Registration failed", error);
        }
      )
    }
  }
  log() {
    console.log(this.form.value);
  }
}
