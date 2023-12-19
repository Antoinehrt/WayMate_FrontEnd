import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static _URL_API_IS_CONNECTED: string = environment.BASE_URL_API + "/authentication/IsConnected";
  private static _URL_API_LOGOUT: string = environment.BASE_URL_API + "/authentication/logout";
  constructor(private _httpClient: HttpClient) { }

  isConnected(): Observable<any> {
    return this._httpClient.get(`${AuthenticationService._URL_API_IS_CONNECTED}`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this._httpClient.post(`${AuthenticationService._URL_API_LOGOUT}`, {}, { withCredentials: true });
  }
}
