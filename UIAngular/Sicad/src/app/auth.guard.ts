import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })

export const authGuard: CanActivateFn = (route, state) => {
  //Inyectamos el servicio de autenticación
  const authService = inject(AuthService);
  return authService.isAuth();
};
