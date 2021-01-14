import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Product} from '../models/product.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  private productUrl = 'http://localhost:8080/starfood/products';

  public getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }

  public deleteProduct(product) {
    return this.http.delete(this.productUrl + '/' + product.productId);
  }

  public createProduct(product) {
    return this.http.post<Product>(this.productUrl, product);
  }

  public getAvailableProducts() {
    return this.http.get<Product[]>(this.productUrl + '/status/1');
  }

}
