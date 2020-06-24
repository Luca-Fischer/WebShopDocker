import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping_cart/shopping-cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {mapProduct, mapSize} from "../../constants";
import {Product} from "../../models/Product";
import {Size} from "../../models/Size";

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {

  cart: Array<any> = [];
  total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cart = this.shoppingCartService.getItems();
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.amount * item.product._price;
    }
  }

  orderNow() {

  }

  removeElement(index: number) {
    this.shoppingCartService.removeItem(index);
    this.snackBar.open("Erfolgreich gelöscht")
    this.cart = this.shoppingCartService.getItems();

    this.calcTotalPrice();
  }
}
