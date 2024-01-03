import { Injectable } from '@angular/core';
import { H4 } from './h4';

@Injectable({
  providedIn: 'root'
})
export class H4Service {
  protected  H4List: H4 [] = [
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
  getAllH4List(): H4[] {
    return this.H4List;
  }

  getH4ById(id: number): H4 | undefined {
    //return this.listH4[id];
    return this.H4List.find(h4 => h4.id === id);
  }
}
