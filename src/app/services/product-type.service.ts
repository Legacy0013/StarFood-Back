import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ProductType} from '../models/product-type.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductTypeService {

  constructor(private http: HttpClient) {}

  private productTypeUrl = 'http://localhost:8080/starfood/productTypes';

  public getProductTypes() {
    return this.http.get<ProductType[]>(this.productTypeUrl);
  }

  public deleteProductType(productType) {
    return this.http.delete(this.productTypeUrl + '/' + productType.productTypeId);
  }
  public updateProductType(productType) {
    return this.http.put(this.productTypeUrl, productType);
  }

  public createProductType(productType) {
    return this.http.post<ProductType>(this.productTypeUrl, productType);
  }

}
