import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recipesComponent } from './recipes.component';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { recipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolve.service';

const routes: Routes = [
    { path: '', component: recipesComponent, canActivate: [AuthGuard], children: [
        {path: '', component: RecipeStartComponent },
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: recipeDetailComponent, resolve: [RecipesResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}