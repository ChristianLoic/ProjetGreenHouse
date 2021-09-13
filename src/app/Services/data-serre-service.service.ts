import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Serre } from '../serres';



@Injectable({ providedIn: 'root'})

export class DataSerreServiceService 
{
  items: Serre[] = [];
  
  
  
  constructor( private http: HttpClient) { }


  getItems() 
  {
    return this.items;
  }

  getShippingPrices() 
  {
    return this.http.get<{ idSerre:number, description: string, idProfil: number}[]>('/assets/shipping.json');
  }

}
