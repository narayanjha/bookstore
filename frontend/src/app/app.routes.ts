import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },
  // MAIN LAYOUT
  {
    path: 'main',
    component: Layout,

    children: [

      {
        path: '',
        loadComponent: () =>
          import('./features/profile/profile')
            .then(m => m.Profile)
      },
    ]
  }
];
