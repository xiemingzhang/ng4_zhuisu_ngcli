import { Routes, RouterModule }  from '@angular/router';

import { BasicDataComponent } from './basicData.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ProductAddComponent } from './productAdd/productAdd.component';
import { ProductListComponent } from './productList/productList.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BasicDataComponent,
    data: {
      title: 'pages_basicData'
    },
    children: [
      { path: 'enterprise', component: EnterpriseComponent },
      { path: 'productAdd', component: ProductAddComponent },
      { path: 'productList', component: ProductListComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);