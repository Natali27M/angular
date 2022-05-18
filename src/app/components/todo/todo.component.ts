import { Component, Input, OnInit } from '@angular/core';

import { ITodo } from '../../interfaces';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  navigateMe(todo: ITodo) {
    this.router.navigate([todo.id], { relativeTo: this.activatedRoute, state: { data: todo } })
      .then();
  }

}
