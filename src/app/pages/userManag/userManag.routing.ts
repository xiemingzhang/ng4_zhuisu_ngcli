import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserManagComponent } from './userManag.component';
import { UserGroupComponent } from './userGroup/userGroup.component';
import { UserListComponent } from './userList/userList.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UserManagComponent,
    data: {
      title: 'pages_userManag'
    },
    children: [
      { path: 'userGroup', component: UserGroupComponent },
      { path: 'userList', component: UserListComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);