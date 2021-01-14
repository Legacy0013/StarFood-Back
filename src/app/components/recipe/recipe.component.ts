import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private router: Router, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe( data => {
        this.recipes = data;
      });
  };

  deleteRecipe(recipe: Recipe): void {
    this.recipeService.deleteRecipe(recipe)
      .subscribe( data => {
        this.recipes = this.recipes.filter(u => u !== recipe);
      })
  };

  updateRecipe(recipe: Recipe): void {
    this.recipeService.updateRecipe(recipe)
      .subscribe( data => {
        this.recipes = this.recipes.filter(u => u !== recipe);
      })
  };

}
