import { Injectable } from '@angular/core';
import {Product} from "../../models/Product";
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import {errorHandler} from "../../constants";
import {Stock} from "../../models/Stock";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product> {
    return this.http.get<Product>(environment.api_url + "products")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(environment.api_url + "products/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  createProduct(body: any): Observable<Product> {
    return this.http.post<Product>(environment.api_url + "products", body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  updateProduct(id: string, body: any):Observable<Product> {
    return this.http.post<Product>(environment.api_url + "products/" + id, body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(environment.api_url + "products/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getStock(id: string): Observable<Stock> {
    return this.http.get<Stock>(environment.api_url + "products/" + id + "/stock")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }
}
