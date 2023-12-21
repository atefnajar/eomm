import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {ProductModel} from "../../../shared/models/product.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products: ProductModel[] | undefined;
  constructor(private productService:ProductService) {
  }
  ngOnInit(){
    this.productService.getAllProduct().subscribe(
      (products) => {
        this.products = products;
        console.log(products)
      },
      () => {
        console.log("error");
      },
    );


  }
}
