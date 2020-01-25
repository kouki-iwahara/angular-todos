import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form-section',
  templateUrl: './todo-form-section.component.html',
  styleUrls: ['./todo-form-section.component.css']
})
export class TodoFormSectionComponent implements OnInit {
  @Output()
  requestContent: EventEmitter<string> = new EventEmitter<string>();

  content: string;


  constructor() {
   }

  ngOnInit() {
  }

  addTodo() {
    this.requestContent.emit(this.content);
    this.content = '';
  }

}
