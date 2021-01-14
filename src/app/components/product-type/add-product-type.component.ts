import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductType } from '../../models/product-type.model';
import { ProductTypeService } from '../../services/product-type.service';

@Component({
  templateUrl: './add-product-type.component.html'
})
export class AddProductTypeComponent {

  productType: ProductType = new ProductType();

  constructor(private router: Router, private productTypeService: ProductTypeService) {

  }

  createProductType(): void {
    this.productTypeService.createProductType(this.productType)
      .subscribe( data => {
        // alert('productType created successfully.');
        this.gotoProductTypeList();
      });

  }

  gotoProductTypeList() {
    this.router.navigateByUrl('/productTypes');
  }
}
