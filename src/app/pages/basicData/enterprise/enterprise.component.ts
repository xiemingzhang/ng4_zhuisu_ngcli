import { Component } from '@angular/core';


import './ckeditor.loader';
import 'ckeditor';

@Component({
  moduleId: module.id,
  selector: 'enterprise',
  templateUrl: 'enterprise.component.html',
  styleUrls: [ 'enterprise.component.scss' ]
 
})
export class EnterpriseComponent {
	public ckeditorContent:string = '<p>Hello CKEditor</p>';
	public config = {
	height: '400'
	};
	constructor() {
	}
}