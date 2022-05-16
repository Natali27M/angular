import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { PostInterface } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this._url)
  }

}
