import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OrderLine } from '../../models/order-line.model';
import { OrderLineService } from '../../services/order-line.service';

@Component({
  templateUrl: './add-order-line.component.html'
})
export class AddOrderLineComponent {

  orderLine: OrderLine = new OrderLine();

  constructor(private router: Router, private orderLineService: OrderLineService) {

  }

  createOrderLine(): void {
    this.orderLineService.createOrderLine(this.orderLine)
      .subscribe( data => {
        // alert('orderLine created successfully.');
        this.gotoOrderLineList();
      });

  }

  gotoOrderLineList() {
    this.router.navigateByUrl('/orderLines');
  }
}
