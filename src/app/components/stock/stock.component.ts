import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: []
})
export class StockComponent implements OnInit {

  stocks: Stock[];

  constructor(private router: Router, private stockService: StockService) {

  }

  ngOnInit() {
    this.stockService.getStocks()
      .subscribe( data => {
        this.stocks = data;
      });
  };

  deleteStock(stock: Stock): void {
    this.stockService.deleteStock(stock)
      .subscribe( data => {
        this.stocks = this.stocks.filter(u => u !== stock);
      })
  };

  updateStock(stock: Stock): void {
    this.stockService.updateStock(stock)
      .subscribe( data => {
        this.stocks = this.stocks.filter(u => u !== stock);
      })
  };

}
