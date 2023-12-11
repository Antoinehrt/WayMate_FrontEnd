import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputProfil} from "./dtos/dto-input-profil";
import {DtoInputAddress} from "./dtos/dto-input-address";
import {DtoOutputUpdateAddress} from "./dtos/dto-output-update-address";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private environment: any;

  constructor(private _httpClient: HttpClient,
              private _session: SessionService) {
  }
  fetchProfil(id: number): Observable<DtoInputProfil> {
    return this._httpClient.get<DtoInputProfil>(this.environment.apiUrlAccount + "/fetch/profil/" + id);
  }

  updateProfil(dto: DtoInputProfil) {

    let dtoUpdate: DtoOutputUpdateDriver = {
      email: dto.email,
      firstName: dto.firstName,
      idAccount: this._session.getID(),
      isAdmin: null,
      phone: dto.phone,
      lastName: dto.lastName,
      pictureURL: dto.pictureURL,
    }
    return this.updateProfil(dtoUpdate).subscribe();
  }

  updateAddress(dto: DtoInputAddress) {

    let dtoAddress:DtoOutputUpdateAddress={
      idAddress:dto.idAddress,
      city:dto.city,
      street:dto.street,
      number:dto.number,
      postCode:dto.postCode
    }
    return this.updateAddress(dtoAddress).subscribe();
  }
}
