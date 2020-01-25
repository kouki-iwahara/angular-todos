import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormSectionComponent } from './todo-form-section.component';

describe('TodoFormSectionComponent', () => {
  let component: TodoFormSectionComponent;
  let fixture: ComponentFixture<TodoFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
