import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AvoInfoService } from 'src/app/avo-info.service';

// ng calendar
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'avo-month',
  templateUrl: './avo-month.component.html',
  styleUrls: ['./avo-month.component.css'],
  styles:[`
  .mwl-calendar-day-view {
    border: none;
  }
`]
})
export class AvoMonthComponent {
  // ng material
  selected: Date | null;
  startAt: Date = new Date();
  info: CalendarEvent[];
  startView: 'month' | 'year' | 'multi-year' = 'month';

  constructor(private PersonInfo: AvoInfoService) {
    this.info = PersonInfo.getDates();
  }

  onChangeValue(event: MatButtonToggleChange) {
    const selectedValue = event.value;
    this.startView = selectedValue;
    console.log(this.startView);
  }

  // ng calendar
  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();
  events: CalendarEvent[] = this.PersonInfo.getDates();


  // avo pop up
  popUp: boolean = true;
}
