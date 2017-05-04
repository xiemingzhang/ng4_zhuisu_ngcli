import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
  		CommonModule, 
  		NgaModule,
  		AppTranslationModule,
  		routing
  		],
  declarations: [ PagesComponent ]
})
export class PagesModule {
}
