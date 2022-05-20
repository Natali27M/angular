import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users.services';
import { UsersResolver } from './services/resolves/users.resolver';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolver } from './services/resolves/user.resolver';
import { UserGuard } from './services/guards/user.guard';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    UsersResolver,
    UserResolver,
    UserGuard
  ]
})

export class UserModule {

}
