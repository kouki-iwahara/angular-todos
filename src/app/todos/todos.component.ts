import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TODOS } from '../mock/mock_todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = TODOS;
  }
  ngOnInit() {
  }

}
