import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from '../constans';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }
}
