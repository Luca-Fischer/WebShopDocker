import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {mapProduct, mapStock} from "../../constants";
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../models/Product";
import {Stock} from "../../models/Stock";
import {Size} from "../../models/Size";
import {ShoppingCartService} from "../../services/shopping_cart/shopping-cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public id: string;
  public product: Product = null;
  public stock: Array<Stock> = [];
  public size: Size = null;
  public amount: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private snackBar: MatSnackBar,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    // id aus der URL als Parameter holen
    this.id = this.activatedRoute.snapshot.paramMap.get('id');


    // Produkt Details abfragen
    this.productsService.getProduct(this.id).subscribe(res => {
      this.product = mapProduct(res);
      // Stock des Produktes abfragen
      this.productsService.getStock(this.id).subscribe(res_stock => {
        this.stock = [];
        for (let i in res_stock) {
          this.stock.push(mapStock(res_stock[i]));
        }
      });
    });
  }

  setSize(size: Size) {
    this.size = size;
  }

  addToCart() {
    if (this.size == null) {
      this.snackBar.open('Please select a size', 'OK');
    } else {
      for (let _stock of this.stock) {
        if (_stock.size.id == this.size.id) {
          if (this.amount > _stock.amount) {
            this.snackBar.open('You can not add the selected amount to the shopping cart', 'OK');
          } else {
            //TODO: add to shopping cart service
          }
        }
      }
    }
  }
}
