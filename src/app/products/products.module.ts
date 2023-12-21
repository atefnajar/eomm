import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsComponent } from './details/details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import {HeaderModule} from "../header/header.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailsComponent,
    AddProductsComponent,
    UpdateProductsComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    HeaderModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class ProductsModule { }
