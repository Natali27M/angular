import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { IUser } from "../../interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(value => this.users = value);
  }

}

