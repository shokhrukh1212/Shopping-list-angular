import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('productName') name: ElementRef;
  @ViewChild('productAmount') amount: ElementRef;
  @Output() productEmitter = new EventEmitter<Ingredients>();

  onAddProduct() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredients(name, amount);
    this.productEmitter.emit(ingredient);
  }
}
