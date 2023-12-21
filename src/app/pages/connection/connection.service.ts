import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoOutputToken} from "./dto/dto-output-token";

import * as jwt from "jwt-decode";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {jwtDecode} from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private static _URL_API_AUTH: string = environment.BASE_URL_API + "/authentication/login";
  constructor(private _httpClient: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<DtoOutputToken> {
    return this._httpClient.get<DtoOutputToken>(`${ConnectionService._URL_API_AUTH}?email=${email}&password=${password}`, { withCredentials: true });
  }

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  existCookie(): boolean {
    return this.cookieService.get("public") != ""
  }
  private DecodeToken(token: string): string {
    return jwtDecode(token);
  }
  getID(): number {

    let cookie = this.DecodeToken(this.getCookie("public"));
    let result = Object.entries(cookie);

    return (parseInt(result[0][1].toString()));
  }
}
