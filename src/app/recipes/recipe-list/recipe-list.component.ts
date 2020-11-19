import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

export { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is desc',
      'https://leaf.nutrisystem.com/wp-content/uploads/2020/05/ww-pizza.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is desc',
      'https://leaf.nutrisystem.com/wp-content/uploads/2020/05/ww-pizza.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is desc',
      'https://leaf.nutrisystem.com/wp-content/uploads/2020/05/ww-pizza.jpg'
    ),
  ];
  
  onRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit(recipe);
  }
}
