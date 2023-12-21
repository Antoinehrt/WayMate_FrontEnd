import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dtos/dto-input-user";


@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  private static _URL_API_USER: string = environment.BASE_URL_API + "/user";
  constructor(private _httpClient: HttpClient) { }

  getAllUser(): Observable<DtoInputUser[]> {
    return this._httpClient.get<DtoInputUser[]>(AdminPanelService._URL_API_USER);
  }
}
