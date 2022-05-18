import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from 'src/app/components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from '../../services';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],

  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class UsersModule {

}
