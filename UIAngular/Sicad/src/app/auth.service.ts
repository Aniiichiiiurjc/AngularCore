import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';
  logged = false;
  userList = [{
    email:'prueba@gmail.com',
    pass: '1234'
  }];
  constructor(private router: Router) {

   }
  isAuth(){
    //llamada a la api para autenticar

    return this.token.length > 0;
  }
  submitAuth(email: string, pass: string){
    const Lis = this.userList.some(user => user.email === email && user.pass === pass);
    if (Lis){
      this.token = 'kgfjyf';
      this.logged = true;
    }
  }
}
