import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) {

  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe( data => {
        this.orders = data;
      });
  };

  deleteOrder(order: Order): void {
    this.orderService.deleteOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

  updateOrder(order: Order): void {
    this.orderService.updateOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

}
