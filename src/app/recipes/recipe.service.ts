import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Testing the Recipe model',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [new Ingredient('Meat', 2), new Ingredient('Testing Salt', 55)]
    ),
    new Recipe(
      'Second Test Recipe',
      'Another description here for this testing.',
      'https://c1.staticflickr.com/3/2015/2269983942_96804244fb_b.jpg',
      [new Ingredient('Bread', 10), new Ingredient('Protein', 12)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
