import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Order} from '../models/order.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  private orderUrl = 'http://localhost:8080/starfood/orders';

  public getOrders() {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public deleteOrder(order) {
    return this.http.delete(this.orderUrl + '/' + order.orderId);
  }
  public updateOrder(order) {
    return this.http.put(this.orderUrl, order);
  }

  public createOrder(order) {
    return this.http.post<Order>(this.orderUrl, order);
  }

}
