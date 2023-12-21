import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductsComponent} from "./list-products/list-products.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {DetailsComponent} from "./details/details.component";
import {UpdateProductsComponent} from "./update-products/update-products.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListProductsComponent,
        data: {
          breadcrumb: 'Products',
        },
      },
      {
        path: 'add',
        component: AddProductsComponent,
        data: {
          breadcrumb: 'Add',
        },
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: DetailsComponent,
          },
          {
            path: 'edit',
            component: UpdateProductsComponent,
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

}
