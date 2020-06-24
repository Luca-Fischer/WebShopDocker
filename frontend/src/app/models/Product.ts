import {Category} from "./Category";
import {Brand} from "./Brand";

export class Product {
  constructor(private _id: string,
              private _name: string,
              private _price: number,
              private _logo: string,
              private _category: Category,
              private _brand: Brand) {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get brand(): Brand {
    return this._brand;
  }

  set brand(value: Brand) {
    this._brand = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }
}
