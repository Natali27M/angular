import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IComment } from '../interfaces';
import { urls } from 'src/app/constans/urls';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private httpClient: HttpClient) {

  }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getCommentById(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(urls.comments + '/' + id);
  }

}
