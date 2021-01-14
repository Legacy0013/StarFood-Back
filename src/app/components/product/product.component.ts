import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  products: Product[];
  availableProducts: Product[];

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });

    this.productService.getAvailableProducts()
      .subscribe( data => {
        this.availableProducts = data;
      });


  };

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

}
