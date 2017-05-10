import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `<ba-sidebar></ba-sidebar>
		    <ba-page-top></ba-page-top>
		    <div class="al-main">
		      <div class="al-content">
		        <ba-content-top></ba-content-top>
		        <router-outlet></router-outlet>
		      </div>
		    </div>
		    <footer class="al-footer clearfix">
		      <div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>
		      <div class="al-footer-main clearfix">
		        <div class="al-copy"> <a href="http://baidu.com" translate>{{'general.akveo'}}</a></div>
		        <ul class="al-share clearfix">
		          <li><i class="socicon socicon-baidu"></i></li>
		          <li><i class="socicon socicon-qq"></i></li>
		          <li><i class="socicon socicon-wechat"></i></li>
		        </ul>
		      </div>
		    </footer>
		    <ba-back-top position="200"></ba-back-top>`
})
export class PagesComponent {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
  
}
