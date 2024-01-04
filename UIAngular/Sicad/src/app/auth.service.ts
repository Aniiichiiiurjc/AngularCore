import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';
  constructor() { }
  isAuth(){
    //llamada a la api para autenticar
    return this.token.length > 0;
  }
}