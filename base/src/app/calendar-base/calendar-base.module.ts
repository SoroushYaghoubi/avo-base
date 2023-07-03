import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// avo
import { AvoMonthComponent } from './avo-month/avo-month.component';
import { AvoLayoutComponent } from './layout/layout.component';

// ng material
// ng calendar
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// ng field
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// ng calendar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [AvoMonthComponent, AvoLayoutComponent],
  imports: [
    CommonModule,

    // ng material
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,

    // ng calendar
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    // ng input field
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [AvoMonthComponent, AvoLayoutComponent],
})
export class CalendarBaseModule {}
