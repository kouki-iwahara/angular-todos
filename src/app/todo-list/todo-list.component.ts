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
  @Input()
  radioState: string;

  todo: Todo = new Todo();
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log(this.todos);
  }

  todoComputed(): Todo[] {
    if (this.radioState === 'working') {
      return this.todos.filter(todo => todo.state === '作業中');
    }
    if (this.radioState === 'complete') {
      return this.todos.filter(todo => todo.state === '完了');
    }
    return this.todos;
  }

  requestContent(content: string) {
    this.todo = new Todo();
    this.todo.id = this.todos.length + 1;
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

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
    this.todos.forEach((t, i) => {
      t.id = i + 1;
    });
  }

}
