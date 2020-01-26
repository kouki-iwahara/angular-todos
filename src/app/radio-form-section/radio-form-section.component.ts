import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-form-section',
  templateUrl: './radio-form-section.component.html',
  styleUrls: ['./radio-form-section.component.css']
})
export class RadioFormSectionComponent implements OnInit {
  @Output()
  requestState: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  radioStatus(event) {
    console.log(event.target.value);
    this.requestState.emit(event.target.value);
  }

}
