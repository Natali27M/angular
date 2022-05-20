import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersResolver } from './services/resolves/users.resolver';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolver } from './services/resolves/user.resolver';
import { UserGuard } from './services/guards/user.guard';

const routes: Routes = [
  { path: '', component: UsersComponent,
    resolve: {
    usersData: UsersResolver
    },
    canDeactivate: [UserGuard],
    canActivate: [UserGuard],

    children: [
      {
        path: ':id', component: UserDetailsComponent,
        resolve: {
          userData: UserResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
