import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing }       from './userManag.routing';
import { UserManagComponent } from './userManag.component';
import { UserGroupComponent } from './userGroup/userGroup.component';
import { UserListComponent } from './userList/userList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UserManagComponent,
    UserGroupComponent,
    UserListComponent
  ],
  providers: [  ]
})
export class UserManagModule {}
