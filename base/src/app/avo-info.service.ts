import { Injectable } from '@angular/core';

// ng calendar
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class AvoInfoService {
  private info: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      end: setHours(setMinutes(new Date(), 0), 7),
      color: {
        primary: 'rgba(240, 231, 218, 1)', 
        secondary: '#AA0F0A', 
        secondaryText: '#000000', 
      },
    },

    {
      title: 'time to go out and stuff',
      start: setHours(setMinutes(new Date(), 0), 10),
      end: setHours(setMinutes(new Date(), 0), 15),
      color: {
        primary: 'rgba(240, 231, 218, 1)', 
        secondary: 'rgba(187, 141, 70, 1)', 
        secondaryText: 'rgba(187, 141, 70, 1)', 
      },
    },
  ];

  getDates() {
    return this.info;
  }

  addDate(newDate: CalendarEvent) {
    this.info.push(newDate);
  }

  constructor() {}
}
