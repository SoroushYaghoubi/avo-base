import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AvoInfoService } from 'src/app/avo-info.service';

// ng calendar
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';

@Component({
  selector: 'avo-month',
  templateUrl: './avo-month.component.html',
  styleUrls: ['./avo-month.component.css'],
})
export class AvoMonthComponent {
  // ng material
  selected: Date | null;
  startAt: Date = new Date();
  info: CalendarEvent[];
  startView: 'month' | 'year' | 'multi-year' = 'month';

  isMonthView: boolean = true;

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

  events: CalendarEvent[] = [
    {
      title: 'My first Event :=)',
      start: setHours(setMinutes(new Date(), 0), 5),
      end: setHours(setMinutes(new Date(), 0), 7),
      color: {
        primary: 'rgba(0, 0, 0, 0)',
        secondary: 'rgba(228, 234, 239, 1)',
        secondaryText: 'rgba(34, 87, 103, 1)',
      },
    },

    {
      title: 'My second Event :)',
      start: setHours(setMinutes(new Date(), 0), 10),
      end: setHours(setMinutes(new Date(), 0), 15),
      color: {
        primary: 'rgba(0, 0, 0, 0)',
        secondary: 'rgba(240, 231, 218, 1)',
        secondaryText: 'rgba(187, 141, 70, 1)',
      },
    },
  ];
}
