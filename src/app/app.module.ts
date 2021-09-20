import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HelloComponent } from './hello.component';
import { SerreListComponent } from './serre-list/serre-list.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { AllSensorComponent } from './all-sensor/all-sensor.component';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { DataTestComponent } from './data-test/data-test.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    GoogleChartsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SerreListComponent },
      { path: 'serres/:idSerre', component: SensorListComponent },
      { path: 'sensors/:idSensor', component: SensorDetailsComponent },
      { path: 'TEST', component: DataTestComponent},
      { path: 'Login', component: LoginComponent},
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
    SensorDetailsComponent,
    DataTestComponent,
    LoginComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
