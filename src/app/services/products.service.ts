import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  private products: Product[] = [
    { id: 1, name: 'Producto 1', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ8NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8/OD84NygtLisBCgoKDQ0NFQ8NFS0ZFRkrKzc3KystLSsrKystKysrKysrKystKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgMABAUGB//EABsQAQEBAQEAAwAAAAAAAAAAAAABAhIRA0Fx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACBAUD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD87h4WGjoeOaCzIMPjCkwsJLeDI0hpEg8HwZDeNQhIMhpBkahL4Ph5k3LcaT5blXluWoU/C2LchctRI2BYrchy0UbC+LWFsMSXgHsCxpJ2EqlgeIkY3IpIw0LDx5z4DDRoKDDI0glN4MjSHkRDwZB8PIiWQ8gyHmWooWQ0yeZPMtNQkyaZUmTTLUKUyPKvI8NQo8luHRwXhqFC5Jcui5LrLSc1yS5dOsp3LUSFhLFrCWFJeF8UsLYUVhApCHhYaPNfA0NAkNEhkGNIKTSH8aQ0hLSHzBmTzKIZimcjnCmcNEucqZybOFM4MaJMnmD5wpMtQo8DwtyPLRQ4Lcunkty1C5rhPWXVck1louW5T1l06ylqNBzaynqOjUS1CkNQliuoTUKKzeMQ5oeFh4858DQ8gZh4k0hpGhpERkPmNIpmFNIpnLZimcotnKucjnKmcmNQM5Vzkc5UzlqGBMDMqTJ5ktJTI8rchy1ClyW5XsLY1C57lPWXTrKWstJzaylvLq1lHeWk5dRHcdW8o7y0HNqJ6X1EtQpNh8YpyRXMLmHkec5zw8gZh5EWkUzlpD5iQyKZjSK5yS2cq5y2cq5yjGzlXOWzlXOS0Gcq5yOcqzJJJk8yaZPMtNJ8t4p43LRSsLcrk1GoUbE9RexPUMTm1Edx06iO41E5dxHbp3EdRoOXcT1F9o6jQJ4wsk44piEyrl574HypmFzFcxAZFcZDOVcREc5WzkM5WzlNBnK2MhnK2MktnKuY2YpImmzlSZaQ8hhgSG8GQ0jTRZA8P4HjRJYWxSwtahR1E9RbUT00kNxHcdGoluNQOXcQ1HVuIbhic24hqOncS1GggJ/PxkHDmKZhMq4cDnUzFsQmItmInzFc5LiLYiJ85VxkMRXMTUNnKuchmK5hLZypI2TyItIbMaRSQtQPGOFjUIUPGZolsLT0tahTqeorSahSOojuL6R00nPuI7jp1EdxqBzbiGo6txHUaCLH5ZJ5uVsRHK+HA51sL5iWItiJK4i+IniLYiaUxFswmItmIw2YrmEzFMpo0h5Cw8JbKqcN6YRa0PS2tQiwN600FLTUtrURaTR6SmJLSeotU9NJHcR1HRpHUIc24jp1biOo0kPGU8ZB5GF8IYXw4XO6MLfGjhfCK+F8IYXwithbCOFcppWKZTyeVFSDKQ3pJ4xW9MJgpfQtahN6HpfW9aJrS0vretES2taW1pBpOnpNFE1EtRWk1CkNRLUX1EtQhLwD+MU8PC2HPhf43C5XVhfDmxV8VF04Ww58VbFDTozVc1DNVlJi2apKhKaaJW9H1P1pUVegtJaW6ahV9LdE6C6ahU6C6T6Dpoqet6n63rRP63pPW9JHVK1pSgpKekpSdT0rpLRBBBinz2atiufNWxXC5XVirYrmxV81F04q2a5c1bGkXVnSma5s1TOkXTKb1CaNNJqVboZpHpuiVroLpLsO2olLprpK6DpuFXpukug6ahWmm9Smh6JV9H1LoZWie0PS+h0Uak3Qui2pBpPRqTVKKwMU+cytioZUzXC5nTirZ05s1XNSdOdK505s6UzpJ1Z0pNOXOlJtNOmaNNuebNNkxfoOke2uyV7ovSPYdNQrXQdo9N01Et2Pbn6GaahXmzTTnmjTTZX6HpGaHolbpvUppukT2ltC6LdFDdJ6oXRLSh9YnrEPn81TNRima4HMvmqZ0hKeVJ0TSmdOaaPNIumaPNOaaPNFOmaHtz9D0iv0PSHTdGFbpukO2umyt2HSPTdNRpboZpHoZppLzQzSHRpWi6JoZpzzZpolfpukeh6JVui3SfQXRxGuia0W6JdFH6BPpkniynlSimXA51c00qcNKgpKaVOUZUlpo00j6PRK80M0h6b1FXpukum6ahVum6StbppK9N0l63TUaW9bpLoZW4Vpoekem6aS/RukJo00St03SXTdEq3RbpPoLoo90W0vRbSjeil0yTzIfLM898DizIHaMyRhZiWh2ZIKzM1C1YWaIwKzNRpob6Zmy0FmbiEYzEmjMxQUGYkC1mSBmYp//9k=', stock: 10, amount: 1 },
    { id: 2, name: 'Producto 2', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,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', stock: 10, amount: 1 },
    { id: 3, name: 'Producto 3', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,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', stock: 10, amount: 1 },
    { id: 4, name: 'Producto 4', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,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', stock: 10, amount: 1 },
    { id: 5, name: 'Producto 5', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,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', stock: 10, amount: 1 },
    { id: 6, name: 'Producto 6', subInformation: 'información', price: 100.00, imgUrl: 'data:image/jpeg;base64,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', stock: 10, amount: 1 },
  ]

  get getProducts() {
    return [...this.products]
  }

  get getSubTotal() {
    const total = this.products.reduce((acc, product) => acc + product.price * product.amount, 0); 
    return total
  }

  public sumAmountProductBy(productId: number, amount: number): void {
    const index = this.products.findIndex( product => product.id === productId )
    const newAmount = this.products[index].amount + amount;
    
    if( newAmount < 0  ) return 

    this.products[index].amount = newAmount
  }

  public deleteProductById( id: number) {
    this.products = this.products.filter( product => product.id !== id  );
  }

  public async deleteAllProducts() {
    return this.products = [];
  }
}
