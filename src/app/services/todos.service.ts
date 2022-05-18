import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITodo } from '../interfaces';
import { urls } from '../constans';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {

  }

  getTodos(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(urls.todos)
  }

}

