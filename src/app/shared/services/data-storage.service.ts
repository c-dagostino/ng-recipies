import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    private url = 'https://ng-project-eebd4.firebaseio.com/recipes.json';
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url, recipes).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipes() {
          return this.http.get<Recipe[]>(this.url)
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),
            tap((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}