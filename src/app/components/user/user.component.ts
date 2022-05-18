import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  // user: IUser = {id: 0, name: ''};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  navigateMe(user: IUser) {
    this.router.navigate([user.id], { relativeTo: this.activatedRoute, state: { data: user } })
      .then();
  }

}
