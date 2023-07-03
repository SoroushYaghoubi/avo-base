import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AvoInfoService } from 'src/app/avo-info.service';

@Component({
  selector: 'avo-month',
  templateUrl: './avo-month.component.html',
  styleUrls: ['./avo-month.component.css'],
})
export class AvoMonthComponent {
  selected: Date | null;
  startAt: Date = new Date();
  info: Date[];
  startView: 'month' | 'year' | 'multi-year' = 'month';

  isMonthView: boolean = true;

  constructor(private PersonInfo: AvoInfoService) {
    this.info = PersonInfo.getDates();
  }

  onChangeValue(event: MatButtonToggleChange) {
    const selectedValue = event.value;
    this.startView=selectedValue;
    console.log(this.startView)
  }
}
