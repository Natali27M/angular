import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

import { IUser } from '../interfaces';
import { urls } from '../../../constans/urls';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(urls.users)
      // .pipe(
      //   map(value => value),
      //   catchError((err) => throwError('error'))
      // );
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users + '/' + id);
  }

}
