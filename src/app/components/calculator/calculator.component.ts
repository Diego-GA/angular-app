import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

  constructor( private productsService: ProductsService) {}

  get subTotal() {
    return this.productsService.getSubTotal
  }

}
