import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing }       from './retrospectiveManag.routing';
import { RetrospectiveManagComponent } from './retrospectiveManag.component';
import { RetrospectiveApplComponent } from './retrospectiveAppl/retrospectiveAppl.component';
import { RetrospectiveUploadComponent } from './retrospectiveUpload/retrospectiveUpload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    RetrospectiveManagComponent,
    RetrospectiveApplComponent,
    RetrospectiveUploadComponent
  ],
  providers: [  ]
})
export class RetrospectiveManagModule {}
