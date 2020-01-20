import { NgModule } from '@angular/core';
import { recipesComponent } from './recipes.component';
import { recipeListComponent } from './recipe-list/recipe-list.component';
import { recipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { recipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        recipesComponent,
        recipeListComponent,
        recipeDetailComponent,
        recipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RecipesRoutingModule,
        SharedModule,
        ReactiveFormsModule,

    ],
})
export class RecipesModule {}