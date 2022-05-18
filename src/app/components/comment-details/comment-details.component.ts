import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { ICommentDetails } from '../../interfaces';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( value =>{

      this.commentDetails = this.router.getCurrentNavigation()?.extras.state?.['data'] as ICommentDetails;
      console.log(value);
    })
  }

  ngOnInit(): void {

  }

}
