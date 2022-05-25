import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CarsComponent } from './modules/car/components/cars/cars.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
      { path: 'cars', loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule) }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}
