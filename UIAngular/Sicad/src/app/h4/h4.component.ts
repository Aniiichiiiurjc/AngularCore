import { Component, Input } from '@angular/core';
import { H4 } from '../h4';

@Component({
  selector: 'app-h4',
  standalone: true,
  imports: [],
  templateUrl: './h4.component.html',
  styleUrl: './h4.component.css'
})
export class H4Component {
  @Input() h4!: H4;
}
