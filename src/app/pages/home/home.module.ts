import { NgModule }      from '@angular/core';

import { HomeComponent } from './home.component' ;
import { routing }       from './home.routing';

@NgModule({
  imports: [ routing ],
  declarations: [ HomeComponent ],
  providers: [ ]
})

export class HomeModule {}