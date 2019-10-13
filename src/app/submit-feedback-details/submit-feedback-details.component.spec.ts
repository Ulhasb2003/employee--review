import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFeedbackDetailsComponent } from './submit-feedback-details.component';

describe('SubmitFeedbackDetailsComponent', () => {
  let component: SubmitFeedbackDetailsComponent;
  let fixture: ComponentFixture<SubmitFeedbackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFeedbackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFeedbackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
