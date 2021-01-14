import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Stock} from '../models/stock.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {

  constructor(private http: HttpClient) {}

  private stockUrl = 'http://localhost:8080/starfood/stocks';

  public getStocks() {
    return this.http.get<Stock[]>(this.stockUrl);
  }

  public deleteStock(stock) {
    return this.http.delete(this.stockUrl + '/' + stock.stockId);
  }
  public updateStock(stock) {
    return this.http.put(this.stockUrl, stock);
  }

  public createStock(stock) {
    return this.http.post<Stock>(this.stockUrl, stock);
  }

}
