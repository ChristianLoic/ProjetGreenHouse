import { Component, VERSION } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})




export class AppComponent 
 {
  title = 'apprenants';
  data = [];
  name = 'Angular ' + VERSION.major;








     myType = ChartType.LineChart;
      myData = 
      [
            ['London', 8136000],
            ['New York', 8538000],
            ['Paris', 2244000],
            ['Berlin', 3470000],
            ['Kairo', 19500000]
       ];
 }




