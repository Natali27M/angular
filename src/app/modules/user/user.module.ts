import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "../../services";


@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class UserModule { }
