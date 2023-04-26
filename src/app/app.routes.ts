import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'login-phone1',
    loadComponent: () => import('./login-phone1/login-phone1.page').then( m => m.LoginPhone1Page)
  },
  {
    path: 'login-phone2',
    loadComponent: () => import('./login-phone2/login-phone2.page').then( m => m.LoginPhone2Page)
  },
  {
    path: 'annonces',
    loadComponent: () => import('./annonces/annonces.page').then( m => m.AnnoncesPage)
  },


];
