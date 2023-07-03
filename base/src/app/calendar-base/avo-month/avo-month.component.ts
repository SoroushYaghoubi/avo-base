import { Component } from '@angular/core';
import { AvoInfoService } from 'src/app/avo-info.service';

@Component({
  selector: 'avo-month',
  templateUrl: './avo-month.component.html',
  styleUrls: ['./avo-month.component.css'],
})
export class AvoMonthComponent {
  selected: Date | null;
  startView: 'month' | 'year' | 'multi-year' = 'month';
  startAt: Date = new Date();

  info: Date[];

  constructor(private PersonInfo: AvoInfoService) {
    this.info = PersonInfo.getDates();
  }
}
