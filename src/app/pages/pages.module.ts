import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { routing }       from './pages.routing';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
  		CommonModule, 
  		NgaModule,
  		AngularFormsModule,
  		NgbRatingModule,
  		AppTranslationModule,
  		FroalaEditorModule.forRoot(),
  		 FroalaViewModule.forRoot(),
  		routing
  		],
  declarations: [ PagesComponent ]
})
export class PagesModule {
}
