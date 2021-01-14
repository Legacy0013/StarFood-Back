import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductType } from '../../models/product-type.model';
import { ProductTypeService } from '../../services/product-type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styles: []
})
export class ProductTypeComponent implements OnInit {

  productTypes: ProductType[];

  constructor(private router: Router, private productTypeService: ProductTypeService) {

  }

  ngOnInit() {
    this.productTypeService.getProductTypes()
      .subscribe( data => {
        this.productTypes = data;
      });
  };

  deleteProductType(productType: ProductType): void {
    this.productTypeService.deleteProductType(productType)
      .subscribe( data => {
        this.productTypes = this.productTypes.filter(u => u !== productType);
      })
  };

  updateProductType(productType: ProductType): void {
    this.productTypeService.updateProductType(productType)
      .subscribe( data => {
        this.productTypes = this.productTypes.filter(u => u !== productType);
      })
  };

}
