import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './basicData.routing';
import { BasicDataComponent } from './basicData.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ProductAddComponent } from './productAdd/productAdd.component';
import { ProductListComponent } from './productList/productList.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
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
