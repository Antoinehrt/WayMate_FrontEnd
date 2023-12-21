import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { DtoOutputUser } from './dto/dto-output-user';
import {DtoOutputAdmin} from "./dto/dto-output-admin";
import {DtoInputAddress} from "../trip-search/dtos/dto-input-address";
import {DtoOutputPassenger} from "./dto/dto-output-passenger";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private static _URL_API_GET_USER_BY_USERNAME: string = environment.BASE_URL_API + "/user/GetByUsername";
  private static _URL_API_UPDATE_ADMIN: string = environment.BASE_URL_API + "/admin";
  private static _URL_API_UPDATE_PASSENGER: string = environment.BASE_URL_API + "/passenger";
  private static _URL_API_GET_ADDRESS_BY_ID: string = environment.BASE_URL_API + "/address";

  constructor(private _httpClient: HttpClient) { }

  getUserFromUsername(username: string): Observable<DtoOutputUser> {
    return this._httpClient.get<DtoOutputUser>(`${ProfileService._URL_API_GET_USER_BY_USERNAME}/${username}`);
  }
  updateAdmin(id: number, dto: DtoOutputAdmin): Observable<any> {
    return this._httpClient.put(`${ProfileService._URL_API_UPDATE_ADMIN}/${id}`, dto);
  }

  updatePassenger(id: number, dto: DtoOutputPassenger): Observable<any> {
    return this._httpClient.put(`${ProfileService._URL_API_UPDATE_PASSENGER}/${id}`, dto);
  }
  getAddressById(id: number): Observable<DtoInputAddress>{
    return this._httpClient.get<DtoInputAddress>(`${ProfileService._URL_API_GET_ADDRESS_BY_ID}/${id}`);
  }

}
