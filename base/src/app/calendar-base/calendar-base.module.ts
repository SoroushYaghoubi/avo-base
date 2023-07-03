import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// avo
import { AvoMonthComponent } from './avo-month/avo-month.component';

// ng material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AvoLayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AvoMonthComponent, AvoLayoutComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatButtonToggleModule,

    MatButtonModule,
    MatIconModule,
  ],
  exports: [AvoMonthComponent, AvoLayoutComponent],
})
export class CalendarBaseModule {}
