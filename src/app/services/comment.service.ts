import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { CommentInterface } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getComments(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this._url)
  }

  getComment(id: number): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(this._url + '/' + id);
  }

}
