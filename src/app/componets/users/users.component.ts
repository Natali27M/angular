import { Component, OnInit } from '@angular/core';
// import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IUser } from '../../interface/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
  // users: IUser[];
  //
  // @Output()
  // userEmit= new EventEmitter<IUser>()

  // constructor(private userService: UserService) {
  //   this.userService.getUsers().subscribe(value => this.users = value);
  // }

  ngOnInit(): void {

  }

  // catchUserEmit(userCatch: IUser): void {
  //   // console.log('users', userCatch);
  //   this.userEmit.emit(userCatch);
  // }

}
