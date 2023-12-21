import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dtos/dto-input-user";
import {DtoOutputRegistration} from "../registration/dtos/dto-output-registration";
import {DtoOutputUser} from "./dtos/dto-output-user";
import {DtoOutputAdmin} from "./dtos/dto-output-admin";
import {DtoInputAdmin} from "./dtos/dto-input-admin";
import {DtoOutputDriver} from "./dtos/dto-output-driver";
import {DtoOutputPassenger} from "./dtos/dto-output-passenger";


@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  private static _URL_API_USER: string = environment.BASE_URL_API + "/user";
  private static _URL_API_ADMIN: string = environment.BASE_URL_API + "/admin";
  private static _URL_API_DRIVER: string = environment.BASE_URL_API + "/driver";
  private static _URL_API_PASSENGER: string = environment.BASE_URL_API + "/passenger";
  constructor(private _httpClient: HttpClient) { }

  getAllUser(): Observable<DtoInputUser[]> {
    return this._httpClient.get<DtoInputUser[]>(AdminPanelService._URL_API_USER);
  }

  updateAdmin(dto:DtoOutputAdmin): Observable<DtoInputUser> {
    return this._httpClient.put<DtoInputUser>(AdminPanelService._URL_API_ADMIN +"/"+ dto.id, dto);
  }
  updateDriver(dto:DtoOutputDriver): Observable<DtoInputUser> {
    return this._httpClient.put<DtoInputUser>(AdminPanelService._URL_API_DRIVER +"/"+ dto.id, dto);
  }

  updatePassenger(dto:DtoOutputPassenger): Observable<DtoInputUser> {
    return this._httpClient.put<DtoInputUser>(AdminPanelService._URL_API_PASSENGER +"/"+ dto.id, dto);
  }
}
