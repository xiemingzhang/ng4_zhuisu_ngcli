import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RetrospectiveManagComponent } from './retrospectiveManag.component';
import { RetrospectiveApplComponent } from './retrospectiveAppl/retrospectiveAppl.component';
import { RetrospectiveUploadComponent } from './retrospectiveUpload/retrospectiveUpload.component';
import { RetrospectiveListComponent } from './retrospectiveList/retrospectiveList.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: RetrospectiveManagComponent,
    data: {
    	title: 'RetrospectiveManagComponent'
    },
    children: [
      { path: 'retrospectiveAppl', component: RetrospectiveApplComponent },
      { path: 'retrospectiveUpload', component: RetrospectiveUploadComponent },
      { path: 'retrospectiveList', component: RetrospectiveListComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);