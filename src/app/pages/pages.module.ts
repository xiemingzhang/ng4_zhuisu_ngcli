import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { routing }       from './pages.routing';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
  		CommonModule, 
  		NgaModule,
  		NgbRatingModule,
  		AppTranslationModule,
  		routing
  		],
  declarations: [ PagesComponent ]
})
export class PagesModule {
}
