import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { WarningModalButtonComponent } from '../../components/warning-modal/warning-modal.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ProductListComponent,
    WarningModalButtonComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {

  constructor( private productsService: ProductsService ) {}

  get products() {
    return this.productsService.getProducts();
  }

}
