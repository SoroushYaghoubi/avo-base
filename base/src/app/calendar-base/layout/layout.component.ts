import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'avo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AvoLayoutComponent {
  startView: 'month' | 'year' | 'multi-year' = 'month';
}
