import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPost } from 'src/app/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  navigateMe(post: IPost) {
    this.router.navigate([post.id], {relativeTo: this.activeRoute, state: {data: post}}).then();
  }

}
