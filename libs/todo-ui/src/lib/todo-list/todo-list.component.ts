import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'ngtw19-nx-demo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
