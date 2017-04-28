import { Routes, RouterModule }  from '@angular/router';

import { ProductListComponent } from './productList.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);