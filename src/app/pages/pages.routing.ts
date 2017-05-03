import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

import { PagesComponent } from './pages.component';
// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
 /* {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },*/
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'basicData', loadChildren: './basicData/basicData.module#BasicDataModule' },
      { path: 'retrospectiveManag', loadChildren: './retrospectiveManag/retrospectiveManag.module#RetrospectiveManagModule' },
      { path: 'userManag', loadChildren: './userManag/userManag.module#UserManagModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
