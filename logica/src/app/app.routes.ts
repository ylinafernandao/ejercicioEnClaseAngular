import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'primer',
    loadComponent: () => import('./primer/primer.page').then( m => m.PrimerPage)
  },
  {
    path: 'segundo',
    loadComponent: () => import('./segundo/segundo.page').then( m => m.SegundoPage)
  },
  {
    path: 'tercer',
    loadComponent: () => import('./tercer/tercer.page').then( m => m.TercerPage)
  },
  {
    path: 'cuarto',
    loadComponent: () => import('./cuarto/cuarto.page').then( m => m.CuartoPage)
  },
  {
    path: 'quinto',
    loadComponent: () => import('./quinto/quinto.page').then( m => m.QuintoPage)
  },
];
