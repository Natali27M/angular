import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { PostsService } from '../posts.services';
import { IPost } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})

export class PostResolver implements Resolve<IPost> {

  constructor(private postsService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    const { id } = route.params;

    return this.postsService.getPostById(id);
  }

}
