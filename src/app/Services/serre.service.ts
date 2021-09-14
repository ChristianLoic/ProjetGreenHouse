import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serre } from '../serres';

@Injectable({ providedIn: 'root' })
export class SerreService {
  items: Serre[] = [];

  constructor(private http: HttpClient) {}

  getItems() {
    return this.items;
  }

  getData() {
    return this.http.get<
      { idSerre: number; description: string; idProfil: number }[]>('/assets/SerreData.json');
  }
}
