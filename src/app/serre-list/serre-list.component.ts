import { Component } from '@angular/core';

import { serres } from '../serres';

import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-serre-list',
  templateUrl: './serre-list.component.html',
  styleUrls: ['./serre-list.component.css']
})



export class SerreListComponent 
{
  serres = serres;

  title = 'apprenants';
  data = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/employee.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }


}
