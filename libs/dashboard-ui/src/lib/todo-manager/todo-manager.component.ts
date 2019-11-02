import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngtw19-nx-demo-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent implements OnInit {
  @Input() todos: any[];
  @Output() addTodo = new EventEmitter<string>();
  @Output() toggleTodo = new EventEmitter<any>();
  @Output() deleteTodo = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
