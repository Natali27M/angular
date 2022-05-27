import { Component, Input, OnInit } from '@angular/core';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  // @Input()
  // user: IUser;
  // userDetails: string;

  // @Output()
  // userEmitter = new EventEmitter<IUser>();

  constructor(private  dataService: DataService) {

  }

  ngOnInit(): void {

  }

  // emit(user: IUser): void {
  //  this.userEmitter.emit(user);
  //  // this.userDetails = 'Some details about user'
  // }

  saveToStorage() {
    this.dataService.storage.next(this.user);
  }
}
