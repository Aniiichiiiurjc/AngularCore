import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from '../search-engine/search-engine.component';
import { H6 } from '../h6';

@Component({
  selector: 'app-h6-detail',
  standalone: true,
  imports: [CommonModule, SearchEngineComponent],
  templateUrl: './h6-detail.component.html',
  styleUrl: './h6-detail.component.css'
})
export class H6DetailComponent {
  listH6: H6 [] = [
    {
      id: 0,
      cna: '11111',
      name: 'Retrete marino'
    },
    {
      id: 1,
      cna: '11112',
      name: 'Retrete terrestre'
    }
  ];
}
