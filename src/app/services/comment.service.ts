import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { IComment } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this._url)
  }

  getComment(id: number): Observable<IComment> {
    return this.http.get<IComment>(this._url + '/' + id);
  }

}
