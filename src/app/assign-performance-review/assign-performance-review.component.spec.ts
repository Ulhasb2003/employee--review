import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPerformanceReviewComponent } from './assign-performance-review.component';

describe('AssignPerformanceReviewComponent', () => {
  let component: AssignPerformanceReviewComponent;
  let fixture: ComponentFixture<AssignPerformanceReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPerformanceReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPerformanceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
