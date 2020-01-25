import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input()
  todos: Todo[];

  todo: Todo = new Todo();

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log(this.todos);
  }

  requestContent(content: string) {
    this.todo.content = content;
    this.todo.state = '作業中';
    console.log(this.todo);
    this.addTodo(this.todo);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  changeState(todo: Todo) {
    console.log(todo);
    if (todo.state === '作業中') {
      todo.state = '完了';
    } else {
      todo.state = '作業中';
    }
  }

}
