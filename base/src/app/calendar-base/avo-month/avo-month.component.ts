import { Component } from '@angular/core';

@Component({
  selector: 'avo-month',
  templateUrl: './avo-month.component.html',
  styleUrls: ['./avo-month.component.css']
})
export class AvoMonthComponent {
  selected: Date | null;
  startView: 'month' | 'year' | 'multi-year' = 'year';
  startAt: Date = new Date();
} 
