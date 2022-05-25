import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],

  imports: [
    CommonModule,
    CarRoutingModule
  ],

  providers: [

  ]
})

export class CarModule {

}
