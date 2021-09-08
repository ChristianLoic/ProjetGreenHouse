import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HelloComponent } from './hello.component';
import  { SerreListComponent } from './serre-list/serre-list.component' ;
import { SensorListComponent } from './sensor-list/sensor-list.component';

@NgModule({
  imports: [
            BrowserModule, 
            ReactiveFormsModule,
            FormsModule,
            RouterModule.forRoot([                      
              { path: '', component: SerreListComponent },
              { path: 'serres/:idSerre',component: SensorListComponent },
            ])
          ],
  declarations: [
              AppComponent,
              HelloComponent,
              TopBarComponent,
              SerreListComponent,
              SensorListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
