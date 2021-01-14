import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  templateUrl: './add-recipe.component.html'
})
export class AddRecipeComponent {

  recipe: Recipe = new Recipe();

  constructor(private router: Router, private recipeService: RecipeService) {

  }

  createRecipe(): void {
    this.recipeService.createRecipe(this.recipe)
      .subscribe( data => {
        // alert('recipe created successfully.');
        this.gotoRecipeList();
      });

  }

  gotoRecipeList() {
    this.router.navigateByUrl('/recipes');
  }
}
