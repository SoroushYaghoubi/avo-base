import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvoMonthComponent } from './avo-month/avo-month.component';



@NgModule({
  declarations: [
    AvoMonthComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AvoMonthComponent
  ]
})
export class CalendarBaseModule { }
