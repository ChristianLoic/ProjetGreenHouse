import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';


import { Sensor, sensors } from '../sensors';


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

}
