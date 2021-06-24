import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule, ChartsModule } from './modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UfComponent, DseiComponent, TiComponent, CoiabComponent, TribeComponent } from './pages';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './shared/shared.module';
import { InfoMapComponent } from './modules/map/info-map/info-map.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    UfComponent,
    DseiComponent,
    TribeComponent,
    TiComponent,
    CoiabComponent,
    InfoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    BrowserAnimationsModule,
    SharedModule,
    ChartsModule,
    ...materialModules
  ],
  exports:[
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [InfoMapComponent]
})
export class AppModule { }
