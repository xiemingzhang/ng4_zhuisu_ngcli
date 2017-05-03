import {Component} from '@angular/core';

@Component({
  selector: 'userManag',
  template: `<H3>UserManagComponent</H3>
  			<router-outlet></router-outlet>`
})
export class UserManagComponent {

  constructor() {
  }

  ngOnInit() {
  }

}
