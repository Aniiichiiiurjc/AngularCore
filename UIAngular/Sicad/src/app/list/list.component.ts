import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listId: number;
  constructor() {
    this.listId = Number(this.route.snapshot.params['id'])?Number(this.route.snapshot.params['id']):-1;
  }
}
