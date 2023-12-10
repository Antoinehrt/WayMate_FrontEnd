import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "./registration/dtos/dto-input-user";
import {RegistrationService} from "./registration/registration.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  users: DtoInputUser[] = [];

  constructor(private _registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._registrationService.getAll().subscribe(users => this.users = users);
  }
}
