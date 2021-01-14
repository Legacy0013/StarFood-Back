import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {OrderLine} from '../models/order-line.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderLineService {

  constructor(private http: HttpClient) {}

  private orderLineUrl = 'http://localhost:8080/starfood/orderLines';

  public getOrderLines() {
    return this.http.get<OrderLine[]>(this.orderLineUrl);
  }

  public deleteOrderLine(orderLine) {
    return this.http.delete(this.orderLineUrl + '/' + orderLine.orderLineId);
  }
  public updateOrderLine(orderLine) {
    return this.http.put(this.orderLineUrl, orderLine);
  }

  public createOrderLine(orderLine) {
    return this.http.post<OrderLine>(this.orderLineUrl, orderLine);
  }

}
