import {Component} from '@angular/core';

@Component({
  selector: 'basicData',
  template: `<H3>basicData</H3>
  			<router-outlet></router-outlet>`
})
export class BasicDataComponent {

  constructor() {
  }

  ngOnInit() {
  }

}