import { Routes, RouterModule }  from '@angular/router';

import { ProductAddComponent } from './productAdd.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProductAddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);