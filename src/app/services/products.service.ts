import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  public products: Product[] = [
    { name: 'Producto 1', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
    { name: 'Producto 2', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
    { name: 'Producto 3', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
    { name: 'Producto 4', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
    { name: 'Producto 5', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
    { name: 'Producto 6', subInformation: 'información', price: 100.00, imgUrl: '', stock: 10 },
  ]


}
