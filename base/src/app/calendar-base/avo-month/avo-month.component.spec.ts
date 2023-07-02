import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoMonthComponent } from './avo-month.component';

describe('AvoMonthComponent', () => {
  let component: AvoMonthComponent;
  let fixture: ComponentFixture<AvoMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvoMonthComponent]
    });
    fixture = TestBed.createComponent(AvoMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
