import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/app.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('auth-register'),
  },
];
