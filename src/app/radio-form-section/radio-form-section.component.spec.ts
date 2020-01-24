import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFormSectionComponent } from './radio-form-section.component';

describe('RadioFormSectionComponent', () => {
  let component: RadioFormSectionComponent;
  let fixture: ComponentFixture<RadioFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
