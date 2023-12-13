import { Component } from '@angular/core';
import {ConnectionService} from "./connection.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  form: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private _connectionService: ConnectionService, private _fb: FormBuilder) {
  }

  verifyLogin(value: any){
    this._connectionService.login(value.email, value.password)
      .subscribe(
        response => {
          console.log("Login succeeded.", response.isLogged);
        },
        (error) =>{
          console.log("Login failed.", error);
        }
      );
  }
}
