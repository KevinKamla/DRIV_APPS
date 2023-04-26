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
];
