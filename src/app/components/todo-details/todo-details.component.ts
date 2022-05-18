import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITodoDetails } from '../../interfaces';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoDetails: ITodoDetails;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value=> {

      this.todoDetails = this.router.getCurrentNavigation()?.extras.state?.['data'] as ITodoDetails;
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

}
