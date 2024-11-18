import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { DetailPay } from '../interfaces/detail-pay.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  private products: Product[] = [
    { id: 1, name: 'Producto 1', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
    { id: 2, name: 'Producto 2', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
    { id: 3, name: 'Producto 3', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
    { id: 4, name: 'Producto 4', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
    { id: 5, name: 'Producto 5', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
    { id: 6, name: 'Producto 6', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10, amount: 1 },
  ]

  public detailPay: DetailPay = this.calculateDetailPay()

  get getProducts() {
    return this.products
  }

  get getDetailPay() {
    return {...this.detailPay}
  }

  calculateDetailPay(): DetailPay {
    const subtotal = this.products.reduce((acc, product) => acc + product.price * product.amount, 0);

    const shippingFees = 20.00; 
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
    
    if( newAmount < 0  ) return 

    this.products[index].amount = newAmount
    this.detailPay = this.calculateDetailPay()
  }

  public deleteProductById( id: number) {
    this.products = this.products.filter( product => product.id !== id  );
    this.detailPay = this.calculateDetailPay()
  }

  public async deleteAllProducts() {
    return this.products = [];
  }
}
