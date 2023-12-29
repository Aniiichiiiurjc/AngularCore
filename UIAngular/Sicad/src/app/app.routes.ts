import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { H4DetailComponent } from './h4-detail/h4-detail.component';
import { H6DetailComponent } from './h6-detail/h6-detail.component';

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
        component: H4DetailComponent
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
