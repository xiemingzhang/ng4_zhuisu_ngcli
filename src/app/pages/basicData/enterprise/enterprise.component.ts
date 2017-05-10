import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';

@Component({
  moduleId: module.id,
  selector: 'enterprise',
  templateUrl: 'enterprise.component.html',
  styleUrls: [ 'enterprise.component.scss' ],
  animations:[flyIn]
})
export class EnterpriseComponent implements OnInit {
  ckeditorContent = "";
  constructor() {
   }
  config={   
  };
  ngOnInit() {
    this.ckeditorContent = "fff"
  	this.config = {
  		uiColor: '#F1F1F1',
  		height: 300,
  		toolbarCanCollapse:'true',
  		resizeEnabled:'true',
  		toolbar :[
			['Bold','Italic','Underline','Strike','Subscript','Superscript'],
			['NumberedList','BulletedList','-','Outdent','Indent'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			['Link','Unlink','Anchor'],
			['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak']
		]
	}
  }
}