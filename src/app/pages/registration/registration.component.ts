import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  currentStep: number =1;
  errorMail: boolean = false;
  errorUsername: boolean = false;

  form: FormGroup = this._fb.group({
    passengerForm:this._fb.group({
      phoneNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z0-9_-]{5,20}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
      passwordVerif: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9]+(?:.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
      birthdate: ['', [Validators.required]],
      addressId: [0],
      isBanned: [false]
    }),
    addressForm:this._fb.group({
      street:['', [Validators.required]],
      postalCode:['', [Validators.required]],
      city:['', [Validators.required]],
      number:['', [Validators.required]]
    })
  });

  constructor(private _fb: FormBuilder, private _registrationService: RegistrationService) {
  }
  nextStep() {
    this.currentStep++;
  }
  previousStep() {
    this.currentStep--;
  }

  onSubmit(){
    if(this.form.valid){
      const userEmail = this.form.get('passengerForm.email')?.value;
      const userUsername = this.form.get('passengerForm.username')?.value;
      const addressData = this.form.get('addressForm')?.value;
      let registrationData = this.form.get('passengerForm')?.value;
      this._registrationService.fetchByEmail(userEmail).subscribe(
        (response) => {
          if (response.isInDb) {
            this.errorMail = true;
          }
          else {
            this.errorMail = false;
            this._registrationService.fetchByUsername(userUsername).subscribe(
              response => {
                if (response.isInDb) {
                  this.errorUsername = true;
                }
                else {
                  this.errorUsername = false;
                  if(this.form.get('passengerForm.password')?.value === this.form.get('passengerForm.passwordVerif')?.value) {
                    this._registrationService.fetchByAddress(this.form.get('addressForm.street')?.value,
                      this.form.get('addressForm.postalCode')?.value,
                      this.form.get('addressForm.city')?.value,
                      this.form.get('addressForm.number')?.value).subscribe(
                      (id) => {
                        if(id.id !=0 && id.id != null){
                          registrationData.addressId = id.id;
                          this._registrationService.registerUser(registrationData).subscribe(
                            (response) => {
                              console.log("User registered succesfully:", response);
                            }
                          )
                        }
                        else{
                          this._registrationService.insertAddress(addressData).subscribe(
                            (addressId) => {
                              if(addressId.id !=0 && addressId.id != null)
                              registrationData.addressId = addressId.id;
                              this._registrationService.registerUser(registrationData).subscribe(
                                (response) => {
                                  console.log("User registered succesfully:", response);
                                }
                              )
                            }
                          )
                        }
                      }
                    )
                  }
                }
              }
            );
          }
        }
      );
    }
  }
  autocomplete() {
    this.form.setValue({
      passengerForm:{
        phoneNumber: "06498231658",
        gender: "Male",
        firstname: "User123",
        lastname: "User123",
        username: "UserTest",
        password: "PasswordTest1234!",
        passwordVerif: "PasswordTest1234!",
        email: "user123@gmail.com",
        birthdate: "",
        addressId: 0,
        isBanned: false
      },
      addressForm:{
        street: "Rue de la test",
        postalCode: "645",
        city: "Test",
        number: "665"
      }
    });
  }
}
