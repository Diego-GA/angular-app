import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { WarningModalButtonComponent } from '../../components/warning-modal/warning-modal.component';
import { CalculatorComponent } from "../../components/calculator/calculator.component";
import { DetailPay } from '../../interfaces/detail-pay.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ProductListComponent,
    WarningModalButtonComponent,
    CalculatorComponent,
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  constructor( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.productsService.loadProducts();
  }

  get products() {
    return this.productsService.getProducts;
  }

  get detailPay(): DetailPay {
    return this.productsService.detailPay
  }

  showProducts() {
    console.log(this.productsService.getProducts)
  }

  removeAllProducts() {
    this.productsService.deleteAllProducts()
  }

}
