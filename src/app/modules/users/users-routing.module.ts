import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { UsersComponent } from 'src/app/components/users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
