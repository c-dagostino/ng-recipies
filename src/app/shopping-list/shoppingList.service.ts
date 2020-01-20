import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from '../shared/services/logging.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('flour', 2),
    ];

    ingredientsUpdated = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    constructor(private loggingService: LoggingService) {

    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.loggingService.logMessage(`Ingredient ${ingredient.name} added to Shopping List`);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.loggingService.logMessage(`Ingredients: ${JSON.stringify(ingredients)}`)
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    getIngredients() {
        return [...this.ingredients]
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateteIngredient(index: number,  updateteIngredient: Ingredient) {
        this.ingredients[index] = updateteIngredient;
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredientsUpdated.next(this.ingredients.splice(index, 1).slice());
    }


}