import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../utils/authentication/authentication.service";
import {ProfileService} from "./profile.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    _userRole!: string;
    _username!: string;

    constructor(private _authService: AuthenticationService, private _profileService: ProfileService) {
    }

  ngOnInit() {
    this.setUsername();
  }

    setUserRole() {
      this._profileService.getUserFromUsername(this._username).subscribe({
        next: (value) => {
          this._userRole = value.userType;
          console.log(this._userRole);
        }
      })
    }

    setUsername() {
        this._authService.GetUsernameFromToken().subscribe({
            next: (value) => {
                this._username = value.username;
                console.log("1",this._username);
                this.setUserRole();

            },
            error: err => {
                console.log("username", err);
            }
        });
    }

  private getProfileEndpoint(role: string): string {
    // Logique pour déterminer l'endpoint approprié en fonction du rôle
    switch (role) {
      case 'passenger':
        return 'passenger-profile';
      case 'driver':
        return 'driver-profile';
      case 'admin':
        return 'admin-profile';
      default:
        throw new Error('Role not recognized');
    }
  }
}
