import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './services';
import { MainInterceptor } from '../../main.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarsComponent
  ],

  imports: [
    CommonModule,
    CarRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [
    CarService,
    {
      provide: HTTP_INTERCEPTORS,
      multi:true,
      useClass: MainInterceptor
    }
  ]
})

export class CarModule {

}
