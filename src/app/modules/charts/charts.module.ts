import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart1Component } from './chart1/chart1.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Chart1Component
  ],
  exports: [
    Chart1Component
  ],
})
export class ChartsModule { }
