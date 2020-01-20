import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
  
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Cookie', 
    //         'Test Cookie', 
    //         'https://app.slickstream.com/p/pageimg/UY0TXWCJ/39?site=UY0TXWCJ&w=64&h=64&epoch=1575957132358',
    //          [
    //              new Ingredient('Flour', 1),
    //              new Ingredient('Butter', 2),
    //              new Ingredient('Chocolate Chips', 50)

    //          ]),
    //     new Recipe(
    //         'Pie', 
    //         'Test Pie', 
    //         'https://app.slickstream.com/p/pageimg/UY0TXWCJ/39?site=UY0TXWCJ&w=64&h=64&epoch=1575957132358',
    //         [
    //             new Ingredient('Flour', 1),
    //             new Ingredient('Shortening', 2),
    //             new Ingredient('Apples', 10)

    //         ]),
    //   ];

    private recipes: Recipe[] = [];

      constructor(private shoppingListService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return [...this.recipes];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next([...this.recipes]);
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next([...this.recipes]);
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next([...this.recipes]);
      }
}