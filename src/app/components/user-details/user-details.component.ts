import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { IUserDetails } from "../../interfaces/user-details.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value=> {

      this.userDetails = this.router.getCurrentNavigation()?.extras.state?.['data'] as IUserDetails;
      console.log(value);
    })
  }

  ngOnInit(): void {

  }

}
