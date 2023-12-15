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
    this._connectionService.login(value.email, value.password).subscribe({
      next: (response) => {
        //This.loginForm.reset
        console.log(response);
        this._connectionService.storeToken(response);
      },
      error: (err) => {
        console.error("Login failed", err);
      }
    })
  }
}
