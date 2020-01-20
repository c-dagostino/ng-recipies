import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  changesSaved = false;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  // canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   const name: string = this.nameInputRef.nativeElement.value;
  //   const amount: number = this.amountInputRef.nativeElement.value;
  //   if ((name || amount) && !this.changesSaved) {
  //     return confirm('Do you want to discard the changes?');
  //   }
  //   return true;
  // }

  resetForm() {
    this.editMode = false;
    this.slForm.reset();
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateteIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.resetForm();
    //this.changesSaved = true;
    //this.router.navigate(['/'], {relativeTo: this.route})
  }

  onClear() {
    this.resetForm();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.resetForm();
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
