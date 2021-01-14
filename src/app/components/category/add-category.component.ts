import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent {

  category: Category = new Category();

  constructor(private router: Router, private categoryService: CategoryService) {

  }

  createCategory(): void {
    this.categoryService.createCategory(this.category)
      .subscribe( data => {
        // alert('category created successfully.');
        this.gotoCategoryList();
      });

  }

  gotoCategoryList() {
    this.router.navigateByUrl('/categories');
  }
}
