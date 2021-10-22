import { Component, OnInit } from '@angular/core';

import { sensors } from '../sensors';

@Component({
  selector: 'app-all-sensor',
  templateUrl: './all-sensor.component.html',
  styleUrls: ['./all-sensor.component.css']
})
export class AllSensorComponent  {

  sensors = sensors;
 
 
}