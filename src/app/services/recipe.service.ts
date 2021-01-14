import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Recipe} from '../models/recipe.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  private recipeUrl = 'http://localhost:8080/starfood/recipes';

  public getRecipes() {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  public deleteRecipe(recipe) {
    return this.http.delete(this.recipeUrl + '/' + recipe.recipeId);
  }
  public updateRecipe(recipe) {
    return this.http.put(this.recipeUrl, recipe);
  }

  public createRecipe(recipe) {
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

}
