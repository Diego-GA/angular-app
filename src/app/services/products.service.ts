import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { DetailPay } from '../interfaces/detail-pay.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:9000/api/products'

  private products: Product[] = []

  public detailPay: DetailPay = this.calculateDetailPay()

  get getProducts() {
    return this.products
  }

  get getDetailPay() {
    return {...this.detailPay}
  }

  calculateDetailPay(): DetailPay {
    const subtotal = this.products.reduce((acc, product) => acc + product.price * product.amount, 0);

    let shippingFees = 20.00; 
    if ( this.products.length === 0 ) shippingFees = 0
    const taxes = subtotal * 0.16; 

    const total = subtotal + shippingFees + taxes;

    return {
      subtotal,
      shippingFees,
      taxes,
      total
    };
  }

  public sumAmountProductBy(productId: number, amount: number): void {
    const index = this.products.findIndex( product => product.id === productId )
    const newAmount = this.products[index].amount + amount;
    
    if( newAmount < 1  ) return 

    this.products[index].amount = newAmount
    this.detailPay = this.calculateDetailPay()
  }

  public deleteProductById( id: number) {
    this.products = this.products.filter( product => product.id !== id  );
    this.detailPay = this.calculateDetailPay()
  }

  public deleteAllProducts() {
    this.products = [];
    this.detailPay = this.calculateDetailPay()
  }

  getProductsFromBackend(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  public loadProducts(): void {
    this.getProductsFromBackend().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.detailPay = this.calculateDetailPay();
      },
      error => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }
}
