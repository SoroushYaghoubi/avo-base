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


  // ng calendar

  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      end: setHours(setMinutes(new Date(), 0), 7),
      color: {
        primary: '#000A08', // Red background
        secondary: '#AA0F0A', // White text
        secondaryText: '#000000', // Black text
      },
    },
  ];

}
