import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../utils/authentication/authentication.service";
import {MyTripService} from "./my-trip.service";
import {switchMap} from "rxjs";
import {DtoOutputUser} from "./dtos/dto-output-user";

@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.css']
})
export class MyTripComponent implements OnInit {
  _username!: string;
  user!:DtoOutputUser;

  constructor(private _authService: AuthenticationService, private _myTripService: MyTripService) {
  }


  ngOnInit(): void {
    this.getUsernameToken();
  }

  getUsernameToken(){
    this._authService.GetUsernameFromToken().subscribe(
      value => {
        this._myTripService.getUserFromUsername(value.username).subscribe(
          value => {
            this.user = value;
          });
      }
    );
  }
}
