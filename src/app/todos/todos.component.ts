import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Todo } from '../todo';
import { TODOS } from '../mock/mock_todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor() {
    this.todos = TODOS;
  }
  todos: Todo[];
  radioState: string;

  ngOnInit() {
  }

  requestState(state: string) {
    this.radioState = state;
  }

}
