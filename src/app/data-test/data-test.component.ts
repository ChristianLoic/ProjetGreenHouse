import { Component, OnInit } from '@angular/core';
import { SerreService } from '../Services/serre.service';

@Component({
  selector: 'app-data-test',
  templateUrl: './data-test.component.html',
  styleUrls: ['./data-test.component.css']
})
export class DataTestComponent implements OnInit {



  serres = this.serreService.getData();

  constructor(private serreService: SerreService) {}

  ngOnInit() {}
}
