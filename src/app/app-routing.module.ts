import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: 'products',
    data: {
      breadcrumb: 'products',
    },
    loadChildren: () =>
      import('src/app/products/products.module').then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path:"**",redirectTo:"products"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
