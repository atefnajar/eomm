import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";
import {ProductModel} from "../../shared/models/product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
endpoint= `${environment.api}/products`;
  getAllProduct():Observable<ProductModel[]>{
    return this._http.get<ProductModel[]>(this.endpoint)
  }
}
