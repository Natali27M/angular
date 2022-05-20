import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../../../constans/urls';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  }

  getPostById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(urls.posts + '/' + id);
  }
}
