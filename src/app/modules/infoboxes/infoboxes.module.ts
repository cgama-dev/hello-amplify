import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoboxVacinadosComponent } from './infobox-vacinados/infobox-vacinados.component';
import { InfoboxConfirmadosComponent } from './infobox-confirmados/infobox-confirmados.component';
import { InfoboxObitosComponent } from './infobox-obitos/infobox-obitos.component';
import { InfoboxPovosComponent } from './infobox-povos/infobox-povos.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InfoboxVacinadosComponent,
    InfoboxConfirmadosComponent,
    InfoboxObitosComponent,
    InfoboxPovosComponent
  ],
  exports: [
    InfoboxVacinadosComponent,
    InfoboxConfirmadosComponent,
    InfoboxObitosComponent,
    InfoboxPovosComponent
  ]
})
export class InfoboxesModule { }
