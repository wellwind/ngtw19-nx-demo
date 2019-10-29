import { Component } from '@angular/core';
import { TodoDataAccessService } from '@ngtw19-nx-demo/todo-data-access';

@Component({
  selector: 'ngtw19-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';

  todos$ = this.todoDataAccessService.getTodos();

  constructor(private todoDataAccessService: TodoDataAccessService) {}
}
