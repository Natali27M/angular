import { Component, OnInit } from '@angular/core';

import { PostDetailsInterface } from 'src/app/interfaces';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: PostDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.postDetails = this.router.getCurrentNavigation()?.extras.state?.['data'] as PostDetailsInterface;
      console.log(value);
    });
  }

  ngOnInit(): void {
  }

}
