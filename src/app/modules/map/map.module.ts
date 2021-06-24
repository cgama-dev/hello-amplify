import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { ServicesModule } from './../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  entryComponents: []
})
export class MapModule { }
