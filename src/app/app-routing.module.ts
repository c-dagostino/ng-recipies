import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
// import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)}, //Lazy Loading
    { path: 'shoppingList', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)} //Lazy Loading
    
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // { path: 'shoppingList', component: ShoppingListComponent, canDeactivate: [CanDeactivateGuard] },
    //{ path: 'recipes/recipe', component: RecipeComponent, canActivate: [AuthGuard] }
  ]
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}