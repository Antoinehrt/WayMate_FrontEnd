import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../utils/authentication/authentication.service";
import {ProfileService} from "./profile.service";
import {DtoOutputAdmin} from "./dto/dto-output-admin";
import {DtoOutputUser} from "./dto/dto-output-user";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  _userRole!: string;
  _username!: string;

  constructor(private _authService: AuthenticationService, private _profileService: ProfileService) {
  }

  ngOnInit() {
    this.setInstanceVariable();
  }


  verifyRoleAdmin(){
    return this._userRole === "Admin";
  }


  verifyRolePassenger(){
    return this._userRole === "Passenger";
  }

  verifyRoleDriver(){
    return this._userRole === "Driver";
  }

  setInstanceVariable() {
    this._authService.GetUsernameFromToken().pipe(
      switchMap(value => {
        this._username = value.username;
        return this._profileService.getUserFromUsername(this._username);
      })
    ).subscribe({
      next: (value) => {
        this._userRole = value.userType;
      },
      error: err => {
        console.log("username", err);
      }
    });
  }

}
