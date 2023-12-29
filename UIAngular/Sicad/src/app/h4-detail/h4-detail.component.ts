import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { SearchEngineComponent } from '../search-engine/search-engine.component';
import { H4 } from '../h4';

@Component({
  selector: 'app-h4-detail',
  standalone: true,
  imports: [CommonModule, SearchEngineComponent],
  templateUrl: './h4-detail.component.html',
  styleUrl: './h4-detail.component.css'
})
export class H4DetailComponent {
  listH4: H4 [] = [
    {
      id: 0,
      ncage: '0117B',
      name: 'Airbus Defence and Space'
    },
    {
      id: 1,
      ncage: '0118B',
      name: 'Indra'
    }
  ];
}
