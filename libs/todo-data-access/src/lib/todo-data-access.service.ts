import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TodoDataAccessModule } from './todo-data-access.module';

@Injectable({
  providedIn: TodoDataAccessModule
})
export class TodoDataAccessService {
  todos = [
    {
      id: '1',
      title: 'Join NGTW 2019',
      done: true
    },
    {
      id: '2',
      title: 'Eat dinner',
      done: false
    },
    {
      id: '3',
      title: 'Go home',
      done: false
    }
  ];

  constructor() {}

  getTodos() {
    return of(this.todos);
  }

  addTodo(title: string) {
    this.todos = [
      ...this.todos,
      { id: new Date().toString(), title: title, done: false }
    ];
  }
}
