import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { H4Component } from '../h4/h4.component';
import { H4 } from '../h4';
import { H6 } from '../h6';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,H4Component],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listId: number;
  list: {[key: string]: any}[];
  Object = Object;
  constructor() {
    if(this.route.snapshot.params['id'] == '0'){
      this.listId = 0;
    } else{
      this.listId = Number(this.route.snapshot.params['id'])?Number(this.route.snapshot.params['id']):-1;
    }
    this.list = this.route.snapshot.params['table'] == 'h4'?this.listH4: this.listH6;
  }
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
