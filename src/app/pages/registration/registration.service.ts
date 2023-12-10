import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dtos/dto-input-user";
import {DtoOutputCreateUser} from "./dtos/dto-output-create-user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private static _URL_API: string = environment.BASE_URL_API + "/user";

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<DtoInputUser[]> {
    return this._httpClient.get<DtoInputUser[]>(RegistrationService._URL_API);
  }

  registerUser(dto: DtoOutputCreateUser): Observable<DtoInputUser> {
    return this._httpClient.post<DtoInputUser>(RegistrationService._URL_API, dto);
  }
}
