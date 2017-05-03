import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'pages_home'
    },
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);