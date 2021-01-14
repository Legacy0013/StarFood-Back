import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {

  product: Product = new Product();

  constructor(private router: Router, private productService: ProductService) {

  }

  createProduct(): void {
    this.productService.createProduct(this.product)
      .subscribe( data => {
        this.gotoProductsList();
      });

  }

  gotoProductsList() {
    this.router.navigateByUrl('/products');
  }

}
