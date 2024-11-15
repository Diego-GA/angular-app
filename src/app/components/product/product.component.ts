import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent { 
  
  constructor( private productsService: ProductsService ) {}

  @Input() 
  public product!: Product

  changeAmountBy( productId: number, amount: number ) {
    this.productsService.sumAmountProductBy(productId, amount);
  }

  deleteProductById( id: number ) {
    this.productsService.deleteProductById(id);
  }

}
