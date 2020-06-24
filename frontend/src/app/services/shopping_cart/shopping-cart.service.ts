import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
  }

  /**
   * Add selection to the user's shopping cart
   * @param product to be added to the local storage
   * @param size of the product
   * @param amount of items
   */
  addItem(product: any, size: any, amount: number) {
    let cart = this.getItems();
    // check if cart has not initialized before
    if (cart == null) {
      cart = [];
    }
    // push selection to array
    cart.push({
      product: product,
      size: size,
      amount: amount
    });
    // save it
    this.writeItems(cart);
  }

  /**
   * Save shopping cart in local storage
   * @param cart
   */
  writeItems(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getItems(): Array<any> {
    let cart_string = localStorage.getItem('cart');
    let cart_json = JSON.parse(cart_string);

    return cart_json;
  }

  /**
   * Remove product with size from shopping cart
   * @param index
   */
  removeItem(index: number) {
    let cart = this.getItems();
    // remove index
    delete cart[index];
    // remove null value
    let filtered = cart.filter(function (el) {
      return el != null;
    });

    this.writeItems(filtered);
  }
}
