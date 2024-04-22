import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Ramen Noodles', 'Yummy Japanese food!', 'https://www.modernfarmhouseeats.com/wp-content/uploads/2021/03/chili-lime-shrimp-ramen-2-scaled.jpg'),
    new Recipe('Cheese Burger', 'Mmmmm cheese', 'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall-FS-38.webp')
  ];
  recipeSelect

  onRecipeSelected(recipeEl: Recipe) {
    console.log(recipeEl)
    this.recipeSelected.emit(recipeEl)

  }

}
