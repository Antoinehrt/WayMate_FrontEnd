import {Component} from '@angular/core';
import {AuthenticationService} from "../../utils/authentication/authentication.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    private _userRole: string;
    private _username: string;

    constructor(private _authService: AuthenticationService) {
        this._userRole = "";
        this._username = "";
    }

    ngOnInit() {
      this.setUserRole();
      this.setUsername();
      console.log(this._userRole);
      console.log(this._username);
    }

    setUserRole() {
        this._authService.TestConnectionAdmin().subscribe({
            next: () => (this._userRole = 'Admin'),
            error: () => {
                this._authService.TestConnectionPassenger().subscribe({
                    next: () => (this._userRole = 'Passenger'),
                    error: () => {
                        this._authService.TestConnectionDriver().subscribe({
                            next: () => (this._userRole = 'Driver'),
                            error: (err) => console.log('No role was found.', err),
                        });
                    },
                });
            },
        });
    }

    setUsername() {
        this._authService.GetUsernameFromToken().subscribe({
            next: (value) => {
                this._username = value.username;
            },
            error: err => {
                console.log("username", err);
            }
        });
    }
}
