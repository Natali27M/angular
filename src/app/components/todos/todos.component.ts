import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services';

import { ITodo } from '../../interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(private todosService: TodosService) {

  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(value => this.todos = value);
  }

}
