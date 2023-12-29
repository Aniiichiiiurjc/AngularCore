import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from '../item';
@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  @Input() list!: Item[];
  Object = Object;
  // constructor() {
  //   //this.list = list;
  //   console.log(this.list);
  // }
}
