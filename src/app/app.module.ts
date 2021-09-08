import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HelloComponent } from './hello.component';
import  { SerreListComponent } from './serre-list/serre-list.component' ;

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([])],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    SerreListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
