import { Injectable } from '@angular/core';
import {DtoOutputUser} from "./dtos/dto-output-user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyTripService {
  private static _URL_API_GET_USER_BY_USERNAME: string = environment.BASE_URL_API + "/user/GetByUsername";

  constructor(private _httpClient: HttpClient) {
  }

  getUserFromUsername(username: string): Observable<DtoOutputUser> {
    return this._httpClient.get<DtoOutputUser>(`${MyTripService._URL_API_GET_USER_BY_USERNAME}/${username}`);
  }
}
