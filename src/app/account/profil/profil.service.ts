import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputProfil} from "./dtos/dto-input-profil";
import {DtoInputAddress} from "./dtos/dto-input-address";
import {DtoOutputUpdateAddress} from "./dtos/dto-output-update-address";
import {AuthenticationService} from "../../utils/authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private environment: any;

  constructor(private _httpClient: HttpClient,
              private _authService: AuthenticationService){

  }
  fetchProfil(id: number): Observable<DtoInputProfil> {
    return this._httpClient.get<DtoInputProfil>(this.environment.apiUrlAccount + "/fetch/profil/" + id);
  }

  // @ts-ignore
  /*updateProfil(dto: DtoInputProfil) {

    let dtoUpdate: DtoOutputUpdateUser = {
      email: dto.email,
      firstName: dto.firstName,
     // idAccount: this._session.getID(),
      isAdmin: null,
      phone: dto.phoneNumber,
      lastName: dto.lastName,
    }
    return this.updateProfil(dtoUpdate).subscribe();
  }*/

  // @ts-ignore
  updateAddress(dto: DtoInputAddress) {

    let dtoAddress:DtoOutputUpdateAddress={
      idAddress:dto.idAddress,
      street:dto.street,
      number:dto.number,
      postalCode:dto.postalCode,
      city:dto.city,
      passenger:dto.passenger
    }
    return this.updateAddress(dtoAddress).subscribe();
  }
}
