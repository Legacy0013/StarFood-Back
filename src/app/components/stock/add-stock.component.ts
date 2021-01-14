import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  templateUrl: './add-stock.component.html'
})
export class AddStockComponent {

  stock: Stock = new Stock();

  constructor(private router: Router, private stockService: StockService) {

  }

  createStock(): void {
    this.stockService.createStock(this.stock)
      .subscribe( data => {
        // alert('stock created successfully.');
        this.gotoStockList();
      });

  }

  gotoStockList() {
    this.router.navigateByUrl('/stocks');
  }
}
