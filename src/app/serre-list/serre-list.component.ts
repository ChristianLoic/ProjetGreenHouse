import { Component } from '@angular/core';

import { serres } from '../serres';

@Component({
  selector: 'app-serre-list',
  templateUrl: './serre-list.component.html',
  styleUrls: ['./serre-list.component.css']
})
export class SerreListComponent {
  serres = serres;
}
