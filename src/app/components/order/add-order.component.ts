import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  templateUrl: './add-order.component.html'
})
export class AddOrderComponent {

  order: Order = new Order();

  constructor(private router: Router, private orderService: OrderService) {

  }

  createOrder(): void {
    this.orderService.createOrder(this.order)
      .subscribe( data => {
        // alert('order created successfully.');
        this.gotoOrderList();
      });

  }

  gotoOrderList() {
    this.router.navigateByUrl('/orders');
  }
}
