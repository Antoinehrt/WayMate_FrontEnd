import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";
import {AuthenticationService} from "../../../utils/authentication/authentication.service";
import {DtoOutputAdmin} from "../dto/dto-output-admin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{
  _admin!: DtoOutputAdmin;
  ImagePath: string;
  editMode: boolean = false;

  form: FormGroup = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z0-9_-]{5,20}$")]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9]+(?:.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    phone: ['', [Validators.required]]
  });


  constructor(private _profileService: ProfileService, private _authService: AuthenticationService, private _fb: FormBuilder) {
    this.ImagePath = "assets/img/AdminIcon.png";
  }

  ngOnInit(): void {
    this._authService.GetUsernameFromToken().subscribe(value => {
      this._profileService.getUserFromUsername(value.username).subscribe(user => {
        this._admin = {
          username: user.username,
          userType: user.userType,
          email: user.email,
          birthdate: user.birthdate,
          phoneNumber: user.phoneNumber
        };
        this.form.setValue({
          username: this._admin.username,
          birthDate: new Date(this._admin.birthdate).toISOString().slice(0,10),
          email: this._admin.email,
          phone: this._admin.phoneNumber
        });
        console.log(this._admin);
      });
    });
    console.log(this._admin);
  }

  onSubmit(){
    console.log(this._admin);
    console.log("test");
    if (this.form.valid){
      this._admin = {
        username: this.form.get('username')?.value,
        userType: this._admin.userType,
        email: this.form.get('email')?.value,
        birthdate: this.form.get('birthDate')?.value,
        phoneNumber: this.form.get('phone')?.value
      }
      console.log(this._admin);
      this.QuitEditMode();
    }
  }


  EnterEditMode(){
    this.editMode = true;
  }

  QuitEditMode() {
    this.editMode = false;
  }
}
