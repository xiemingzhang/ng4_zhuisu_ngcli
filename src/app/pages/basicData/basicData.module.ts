import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { UEditorModule } from 'ngx-ueditor';
import { DataTableModule } from "angular2-datatable";

import { routing } from './basicData.routing';
import { BasicDataComponent } from './basicData.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ProductAddComponent } from './productAdd/productAdd.component';
import { ProductListComponent } from './productList/productList.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ChanpinliebiaoService } from '../service/chanpinliebiao.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    FormsModule,
    DataTableModule,
    UEditorModule.forRoot({
        path: './assets/ueditor/',
        options: {
            themePath: (~location.href.indexOf('github') ? '/ngx-ueditor' : '') +  '/assets/ueditor/themes/'
        }
    }),
    routing
  ],
  declarations: [
    BasicDataComponent,
    EnterpriseComponent,
    ProductAddComponent,
    ProductListComponent,
    DatatableComponent
  ],
   providers: [ChanpinliebiaoService]
})
export class BasicDataModule {}
