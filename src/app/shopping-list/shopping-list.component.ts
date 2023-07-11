import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Banana', 10),
    new Ingredients('Apple', 15),
  ];

  handleProduct(product: Ingredients) {
    this.ingredients.push(product);
  }
}
