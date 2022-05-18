import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from '../../components/todo/todo.component';
import { TodoDetailsComponent } from '../../components/todo-details/todo-details.component';
import { TodosComponent } from '../../components/todos/todos.component';
import { TodosService } from '../../services';


@NgModule({
  declarations: [
    TodoComponent,
    TodoDetailsComponent,
    TodosComponent,
  ],

  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],

  providers: [TodosService]
})
export class TodosModule { }
