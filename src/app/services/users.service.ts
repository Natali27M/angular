import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { IUser } from "../interfaces";
import { urls } from "../constans";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  // getUserById(id: number): Observable<IUser> {
  //   return this.httpClient.get<IUser>(urls.users + '/' + id);
  // }
}
