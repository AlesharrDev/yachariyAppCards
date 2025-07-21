import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tema',
    loadComponent: () => import('./features/tema/tema.page').then( m => m.TemaPage)
  },
  {
    path: 'tema/:id',
    loadComponent: () => import('./features/tema/tema.page').then( m => m.TemaPage)
  },
];
