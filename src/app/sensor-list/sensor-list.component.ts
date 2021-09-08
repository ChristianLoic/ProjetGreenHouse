
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Serre, serres } from '../serres';

import { Sensor, sensors } from '../sensors';

import { Input } from '@angular/core';




@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  @Input() sensor!: Sensor | undefined;
    sensors =sensors;
    serres=serres;
    serre : Serre | undefined;

  
   
  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {

      // First get the serre id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const serreIdFromRoute = Number(routeParams.get('idSerre'));

      // Find the product that correspond with the id provided in route.
   this.serre = serres.find(serre => serre.idSerre === serreIdFromRoute);

   
    


    }
 
   
  }
  
