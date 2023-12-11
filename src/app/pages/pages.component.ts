<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "./registration/dtos/dto-input-user";
import {RegistrationService} from "./registration/registration.service";
=======
import { Component } from '@angular/core';
>>>>>>> cbbb02b (Add environments variables)

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
<<<<<<< HEAD
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
=======
export class PagesComponent {

>>>>>>> cbbb02b (Add environments variables)
}
