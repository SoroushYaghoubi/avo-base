import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvoMonthComponent } from './avo-month/avo-month.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AvoMonthComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatButtonToggleModule
  ],
  exports:[
    AvoMonthComponent
  ]
})
export class CalendarBaseModule { }
