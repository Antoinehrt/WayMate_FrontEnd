import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../utils/services/user/dtos/dto-input-user";
import {UserService} from "../utils/services/user/user.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  users: DtoInputUser[] = [];

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._userService.getAll().subscribe(users => this.users = users);
  }
}
