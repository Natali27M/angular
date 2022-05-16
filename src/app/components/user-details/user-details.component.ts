import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from '@angular/router';

import { IUserDetails } from 'src/app/interfaces';
// import { UserService } from 'src/app/services';
// import { IUser } from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
// DDOS
//   userDetails: IUser;
//
//   constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {}
//
//   ngOnInit(): void {
//     // this.activatedRoute.url.subscribe(value => console.log(value));
//     this.activatedRoute.params.subscribe(({id}) =>{
//       this.userService.getUser(+id).subscribe(value => this.userDetails = value);
//     });
//   }

  userDetails: IUserDetails;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(value=> {
  //     let {state: {data}} = history;
  //     this.userDetails = data;
  //   })
  // }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value=> {
      // // @ts-ignore
      // console.log(this.router.getCurrentNavigation().extras.state['data'] as IUserDetails);

      this.userDetails = this.router.getCurrentNavigation()?.extras.state?.['data'] as IUserDetails;
      console.log(value);
    })
  }
  ngOnInit(): void {
  // this.activatedRoute.params.subscribe(value=>{
  //   let {state: {data}} = history;
  //   this.userDetails = data as IUserDetails;
  // })
  }

}
