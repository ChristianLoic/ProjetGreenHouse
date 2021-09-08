import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HelloComponent } from './hello.component';
import { SerreListComponent } from './serre-list/serre-list.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { AllSensorComponent } from './all-sensor/all-sensor.component';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';

@NgModule({
  imports: [
    GoogleChartsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SerreListComponent },
      { path: 'serre/:idSerre', component: SensorListComponent },
      { path: 'sensors/:idSensor', component: SensorDetailsComponent },
      { path: 'allSensors', component: AllSensorComponent}
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    SerreListComponent,
    SensorListComponent,
    AllSensorComponent,
    SensorDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
