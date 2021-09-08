
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Serre, serres } from '../serres';

import { Sensor, sensors } from '../sensors';




@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

   sensors = new Array<Sensor>();

  serre : Serre | undefined;

  sensor :Sensor | undefined;


   
  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {

      // First get the serre id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const serreIdFromRoute = Number(routeParams.get('idSerre'));

      // Find the product that correspond with the id provided in route.
   this.serre = serres.find(serre => serre.idSerre === serreIdFromRoute);

   
    // fill the sensors list 
    
   for (var i = 0; i<sensors.length; i++)
   {         
          this.sensor= sensors.find(sensor=> sensor.idSensor === i)
          if(this.sensor.idSerre==serreIdFromRoute )
          {
              this.sensors.push(this.sensor) 
          }
   }
  
   
   
  }
  
}