import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../profile.service";
import {AuthenticationService} from "../../../utils/authentication/authentication.service";
import {RegistrationService} from "../../registration/registration.service";
import {DtoInputToken} from "../../connection/dto/dto-input-token";
import {DtoOutputPassenger} from "../dto/dto-output-passenger";

@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.css']
})
export class PassengerProfileComponent {
  _passenger!: DtoOutputPassenger;
  ImagePath: string;
  editMode: boolean = false;
  errorMail: boolean = false;
  errorUsername: boolean = false;
  maxBirthdate: string;

  form: FormGroup = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z0-9_-]{5,20}$")]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9]+(?:.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    phone: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    addressId: [0],
  });
/*,

  addressForm:this._fb.group({
                               street:['', [Validators.required]],
                               postalCode:['', [Validators.required]],
                               city:['', [Validators.required]],
                               number:['', [Validators.required]]
                             });

*/
  constructor(private _profileService: ProfileService, private _authService: AuthenticationService, private _fb: FormBuilder
    , private _registrationService: RegistrationService) {
    this.ImagePath = "assets/img/AdminIcon.png";
    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 14, currentDate.getMonth(), currentDate.getDate());
    this.maxBirthdate = maxDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this._authService.GetUsernameFromToken().subscribe(value => {
      this._profileService.getUserFromUsername(value.username).subscribe(user => {
        this._passenger = {
          id: user.id,
          username: user.username,
          userType: user.userType,
          password: user.password,
          email: user.email,
          birthdate: user.birthdate,
          phoneNumber: user.phoneNumber,
          lastname: user.lastName,  // Utilisez lastName au lieu de lastname
          firstname: user.firstName,  // Utilisez firstName au lieu de firstname
          gender: user.gender,
          addressId: user.addressId
        };
        this.form.setValue({
          username: this._passenger.username,
          birthDate: new Date(this._passenger.birthdate).toISOString().slice(0, 10),
          email: this._passenger.email,
          phone: this._passenger.phoneNumber,
          lastname: this._passenger.lastname,
          firstname: this._passenger.firstname,
          gender: this._passenger.gender,
          addressId: this._passenger.addressId
        });
      });
    });

  }

  onSubmit() {
    if (this.form.valid) {
      const newEmail = this.form.get('email')?.value
      const newUsername = this.form.get('username')?.value;
      this._registrationService.fetchByEmail(newEmail).subscribe(
        (response) => {
          if (response.isInDb && newEmail != this._passenger.email) {
            this.errorMail = true;
          } else {
            this.errorMail = false;
            this._registrationService.fetchByUsername(newUsername).subscribe(
              response => {
                if (response.isInDb && newUsername != this._passenger.username) {
                  this.errorUsername = true;
                } else {
                  this.errorUsername = false;
                  this._passenger = {
                    id: this._passenger.id,
                    username: newUsername,
                    userType: this._passenger.userType,
                    password: this._passenger.password,
                    email: newEmail,
                    birthdate: this.form.get('birthDate')?.value,
                    phoneNumber: this.form.get('phone')?.value,
                    lastname: this.form.get('lastname')?.value,
                    firstname: this.form.get('firstname')?.value,
                    gender: this._passenger.gender,
                    addressId: this.form.get('adresse')?.value
                  }
                  this.QuitEditMode();
                  this._profileService.updateAdmin(this._passenger.id, this._passenger).subscribe();
                  const dto: DtoInputToken = { username: this._passenger.username, usertype: this._passenger.userType };
                  console.log(dto);
                  this._authService.generateToken(dto).subscribe(
                    value => {
                      console.log(value);
                    },
                    error => {
                      console.log(error);
                    }
                  );
                  console.log(this._passenger);
                }
              }
            )
          }
        }
      );
    }
  }


  EnterEditMode() {
    this.editMode = true;
  }

  QuitEditMode() {
    this.editMode = false;
  }

  controlUsername():
    boolean {
    if (this.form.get('username')?.valid && this.form.get('username')?.touched) {
      return true;
    } else if (this.form.get('username')?.invalid && this.form.get('username')?.touched && this.form.get('username')?.dirty) {
      return false;
    }
    return true;
  }

  controlEmail():
    boolean {
    if (this.form.get('email')?.valid && this.form.get('email')?.touched) {
      return true;
    } else if (this.form.get('email')?.invalid && this.form.get('email')?.touched && this.form.get('email')?.dirty) {
      return false;
    }
    return true;
  }
}
