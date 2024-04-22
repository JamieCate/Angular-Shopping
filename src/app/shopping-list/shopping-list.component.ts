import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'] 
})

export class ShoppingListComponent {
  @Input() ingredients: Ingredient[] = [
    new Ingredient('Flour', 6),
    new Ingredient('Onions', 2)
  ];


  ngOnInit() {
  }

  onIngredientAdded(ingredients: Ingredient) {
    this.ingredients.push(ingredients)
  }

}
