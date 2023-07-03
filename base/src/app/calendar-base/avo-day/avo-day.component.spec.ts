import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoDayComponent } from './avo-day.component';

describe('AvoDayComponent', () => {
  let component: AvoDayComponent;
  let fixture: ComponentFixture<AvoDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvoDayComponent]
    });
    fixture = TestBed.createComponent(AvoDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
