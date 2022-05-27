import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._url);
  }

}
