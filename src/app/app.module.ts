import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [
    AppState,
    GlobalState
    ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(public appState: AppState) { }
}
