import { Component, Input, OnInit } from '@angular/core';

import { IUser } from "../../interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit(): void {}

}
