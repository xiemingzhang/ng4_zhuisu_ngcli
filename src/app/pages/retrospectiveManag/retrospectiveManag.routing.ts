import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RetrospectiveManagComponent } from './retrospectiveManag.component';
import { RetrospectiveApplComponent } from './retrospectiveAppl/retrospectiveAppl.component';
import { RetrospectiveUploadComponent } from './retrospectiveUpload/retrospectiveUpload.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: RetrospectiveManagComponent,
    children: [
      { path: 'retrospectiveAppl', component: RetrospectiveApplComponent },
      { path: 'retrospectiveUpload', component: RetrospectiveUploadComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);