import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class recipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,  private router: Router, private route: ActivatedRoute) { 
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe((updatedRecipes: Recipe[]) => {
      this.recipes = updatedRecipes;
    })
  }
  
  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
