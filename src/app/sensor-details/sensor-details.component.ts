import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';


import { Sensor, sensors } from '../sensors';

import { ChartType } from 'angular-google-charts';


@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css']
})
export class SensorDetailsComponent implements OnInit 
{

  sensor: Sensor | undefined;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {


     //  get the sensor id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const sensorIdFromRoute = Number(routeParams.get('idSensor'));

   // Find the sensor that correspond with the id provided in route.
   this.sensor = sensors.find(sensor => sensor.idSensor === sensorIdFromRoute);
  }

  myType = ChartType.LineChart;
  myData = [
['London', 8136000],
['New York', 8538000],
['Paris', 2244000],
['Berlin', 3470000],
['Kairo', 19500000]];

}
