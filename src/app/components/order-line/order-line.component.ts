import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderLineService} from '../../services/order-line.service';
import {OrderLine} from '../../models/order-line.model';


@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.component.html',
  styles: []
})
export class OrderLineComponent implements OnInit {

  orderLines: OrderLine[];

  constructor(private router: Router, private orderLineService: OrderLineService) {

  }

  ngOnInit() {
    this.orderLineService.getOrderLines()
      .subscribe( data => {
        this.orderLines = data;
      });
  };

  deleteOrderLine(orderLine: OrderLine): void {
    this.orderLineService.deleteOrderLine(orderLine)
      .subscribe( data => {
        this.orderLines = this.orderLines.filter(u => u !== orderLine);
      })
  };

  updateOrderLine(orderLine: OrderLine): void {
    this.orderLineService.updateOrderLine(orderLine)
      .subscribe( data => {
        this.orderLines = this.orderLines.filter(u => u !== orderLine);
      })
  };

}
