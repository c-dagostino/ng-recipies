import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { LoggingService } from '../shared/services/logging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingListSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { 
   this.shoppingListSub = this.shoppingListService.ingredientsUpdated.subscribe((updatedIngredients: Ingredient[]) => {
      this.ingredients = updatedIngredients;
  });
}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);

  }

  ngOnDestroy() {
    this.shoppingListSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
