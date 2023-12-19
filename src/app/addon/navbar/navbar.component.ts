import { Component } from '@angular/core';
import {AuthenticationService} from "../../utils/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ImagePath: string;
  collapsed = true;
  isConnected = false;

  constructor(private authService: AuthenticationService, private _route:Router) {
    this.ImagePath = "assets/img/WayMate_Logo.png"
  }

  displayLogout(){
    this.authService.isConnected().subscribe({
      next: value => {
        this.isConnected = true;
      },
      error: (err) => {
        this.isConnected = false;
    }
    });
  }

  logout(): void{
    this.authService.logout().subscribe({
      next: value => {
        console.log(value);
        this._route.navigate(['/home']);
      },
      error: (err) => {
        console.error("Logout failed", err);
      }
    });
  }
}
