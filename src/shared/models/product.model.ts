import {RateModel} from "./rate.model";


export class ProductModel {
  id?: string;
  // tslint:disable-next-line:variable-name
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: RateModel;
  regionName?: string;
}
