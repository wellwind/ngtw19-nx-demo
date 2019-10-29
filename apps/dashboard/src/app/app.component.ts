import { Component, OnInit } from '@angular/core';
import { TodoDataAccessService } from '@ngtw19-nx-demo/todo-data-access';
import { TodoItem } from '@ngtw19-nx-demo/todo-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngtw19-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$: Observable<TodoItem[]>;

  constructor(private todoDataAccessService: TodoDataAccessService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todos$ = this.todoDataAccessService.getTodos();
  }
}
