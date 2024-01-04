import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { H4DetailComponent } from './h4-detail/h4-detail.component';
import { H6DetailComponent } from './h6-detail/h6-detail.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'list',
    //     component: ListComponent
    // },
    {
        path: 'h4',
        component: H4DetailComponent,
        canActivate: [authGuard] //Puedo acceder a esta ruta si el guard me devuelve un true
    },
    {
        path: 'h6',
        component: H6DetailComponent     
    },
    // {
    //     path: 'list/:table/:id',
    //     component: ListComponent
    // },
    {
        path: '**',
        component: HomeComponent
    }
];
