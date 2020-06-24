import {Category} from "./models/Category";
import {Product} from "./models/Product";
import {Size} from "./models/Size";
import {Stock} from "./models/Stock";
import {Brand} from "./models/Brand";
import {throwError} from "rxjs";

export function mapProduct(product: any): Product {
  const category = mapCategory(product.category);
  const brand = mapBrand(product.brand);
  return new Product(product._id, product.name, product.price, product.logo, category, brand);
}

export function mapCategory(category: any): Category {
  return new Category(category._id, category.name);
}

export function mapBrand(brand: any): Brand {
  return new Brand(brand._id, brand.name);
}

export function mapSize(size: any): Size {
  return new Size(size._id, size.name);
}

export function mapStock(stock: any): Stock {
  let product = mapProduct(stock.product);
  let size = mapSize(stock.size);
  return new Stock(stock._id, product, size, stock.amount);
}


/**
 * Handle Errors for HttpClient
 */
export function errorHandler(err: Response | any) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
  }
  //console.log(errorMessage);
  return throwError(errorMessage);
}
