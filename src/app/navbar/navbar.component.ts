import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ImagePath: string;

  constructor() {
    this.ImagePath = "assets/img/WayMate_Logo.png"
  }
}
