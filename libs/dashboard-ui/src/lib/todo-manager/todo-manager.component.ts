import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '@ngtw19-nx-demo/todo-ui';

@Component({
  selector: 'ngtw19-nx-demo-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent implements OnInit {

  @Input() todos: TodoItem[];
  @Output() addTodo=new EventEmitter<string>();
  @Output() toggleTodo = new EventEmitter<TodoItem>();
  @Output() deleteTodo = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {
  }

}
