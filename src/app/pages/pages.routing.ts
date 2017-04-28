import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

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
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
      { path: 'basicData', loadChildren: 'app/pages/basicData/basicData.module#basicDataModule' },
      { path: 'retrospectiveManag', loadChildren: 'app/pages/retrospectiveManag/retrospectiveManag.module#retrospectiveManagModule' },
      { path: 'userManag', loadChildren: 'app/pages/userManag/userManag.module#userManagModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
