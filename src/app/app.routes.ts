import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'signin',
    loadComponent: () => import('./views/auth/signin/signin.page').then( m => m.SigninPage)
  },
  {
    path: 'sign-by-number',
    loadComponent: () => import('./views/auth/sign-by-number/sign-by-number.page').then( m => m.SignByNumberPage)
  },
  {
    path: 'get-code-number',
    loadComponent: () => import('./views/auth/get-code-number/get-code-number.page').then( m => m.GetCodeNumberPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./views/notifications/notifications.page').then( m => m.NotificationsPage)
  },  {
    path: 'create-annonces',
    loadComponent: () => import('./views/create-annonces/create-annonces.page').then( m => m.CreateAnnoncesPage)
  },
  {
    path: 'create-trajets',
    loadComponent: () => import('./views/create-trajets/create-trajets.page').then( m => m.CreateTrajetsPage)
  },




];
