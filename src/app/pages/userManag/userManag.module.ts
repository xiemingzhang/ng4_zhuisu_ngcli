import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './userManag.routing';
import { UserManagComponent } from './userManag.component';
import { UserGroupComponent } from './userGroup/userGroup.component';
import { UserListComponent } from './userList/userList.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
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
