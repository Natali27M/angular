import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { IUser } from '../../interfaces';
import { UsersService } from '../users.services';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<IUser> {

  constructor(private usersService: UsersService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const { id } = route.params;
    // const id = route.params['id'];
    return this.usersService.getUserById(id);
  }

}
