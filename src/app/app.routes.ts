import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
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
    path: 'signup',
    loadComponent: () => import('./views/auth/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./views/auth/logout/logout.page').then( m => m.LogoutPage)
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
    path: 'tabs',
    loadComponent: () => import('./views/tabs/tabs.page').then( m => m.TabsPage)
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
