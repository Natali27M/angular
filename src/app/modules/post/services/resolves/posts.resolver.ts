import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { IPost } from '../../interfaces';
import { PostsService } from '../posts.services';

@Injectable({
  providedIn: 'root'
})

export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postsService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsService.getPosts();
  }

}
