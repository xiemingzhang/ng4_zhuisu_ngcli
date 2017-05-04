import { Component, ViewContainerRef } from '@angular/core';
import * as $ from 'jquery';

import 'style-loader!./app.component.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
}
