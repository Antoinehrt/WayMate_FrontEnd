import {Component, OnInit} from '@angular/core';
import {ProfilService} from "./profil.service";
import {DtoInputProfil} from "./dtos/dto-input-profil";
import {DtoInputAddress} from "./dtos/dto-input-address";
import {AuthenticationService} from "../../utils/authentication/authentication.service";
import {ConnectionService} from "../../pages/connection/connection.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{

  public user : DtoInputProfil = {
   // userType : "",
    idUser: 0,
    userName: "",
    password: "",
    email: "",
    birthdate: "",
    phoneNumber: "",
    lastName: "",
    firstName: "",
    gender: "",
    address: {
      passenger: "",
      city : "",
      postalCode : "",
      number : 0,
      street : "",
      idAddress: 0,
    }
  };
  public address:DtoInputAddress={
    idAddress : 0,
    street : "",
    number : 0,
    postalCode : "",
    city : "",
    passenger : ""
  }
  editMode: boolean = false;
  constructor(private profilService : ProfilService, private _connectService : ConnectionService,
              private _authService : AuthenticationService) {}

  ngOnInit(): void {
    this.profilService.fetchProfil(this._connectService.getID()).subscribe(profil => {
      this.user = profil
    })
    //this.user = this.authService.currentUserValue;
  }

  edit() {
    this.editMode = !this.editMode;
  }

  send() {

   // this.profilService.updateProfil(this.user);
    this.profilService.updateAddress(this.user.address);
    this.edit();
  }

  save() {
    if (this.editMode) {
      this._authService.updateUser(this.user).subscribe(
        (data) => {
          console.log('Profil mis à jour avec succès', data);
          this.editMode = false;
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du profil', error);
        }
      );
    }
  }
}
