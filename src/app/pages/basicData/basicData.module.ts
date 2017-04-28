import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing }       from './basicData.route';
import { BasicDataComponent } from './basicData.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ProductAddComponent } from './productAdd/productAdd.component';
import { ProductListComponent } from './productList/productList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    BasicDataComponent,
    EnterpriseComponent,
    ProductAddComponent,
    ProductListComponent
  ],
  providers: [  ]
})
export class BasicDataModule {}
