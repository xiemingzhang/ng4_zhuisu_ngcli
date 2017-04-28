import { Routes, RouterModule }  from '@angular/router';

import { EnterpriseComponent } from './enterprise.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: EnterpriseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);