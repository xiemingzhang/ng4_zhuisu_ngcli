import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './retrospectiveManag.routing';
import { RetrospectiveManagComponent } from './retrospectiveManag.component';
import { RetrospectiveApplComponent } from './retrospectiveAppl/retrospectiveAppl.component';
import { RetrospectiveUploadComponent } from './retrospectiveUpload/retrospectiveUpload.component';
import { RetrospectiveListComponent } from './retrospectiveList/retrospectiveList.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    RetrospectiveManagComponent,
    RetrospectiveApplComponent,
    RetrospectiveUploadComponent,
    RetrospectiveListComponent
  ],
  providers: [  ]
})
export class RetrospectiveManagModule {}
