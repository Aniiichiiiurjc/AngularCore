import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from '../search-engine/search-engine.component';
import { H4 } from '../h4';
import { H4Service } from '../h4.service';

@Component({
  selector: 'app-h4-detail',
  standalone: true,
  imports: [CommonModule, SearchEngineComponent],
  templateUrl: './h4-detail.component.html',
  styleUrl: './h4-detail.component.css'
})
export class H4DetailComponent {
  h4List: H4[] = [];
  h4Service: H4Service = inject(H4Service);
  constructor() {
    this.h4List = this.h4Service.getAllH4List();
  }
}
