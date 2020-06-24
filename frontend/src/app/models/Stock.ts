import {Product} from "./Product";
import {Size} from "./Size";

export class Stock {
  constructor(private _id: string,
              private _product: Product,
              private _size: Size,
              private _amount: number) {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get size(): Size {
    return this._size;
  }

  set size(value: Size) {
    this._size = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}
