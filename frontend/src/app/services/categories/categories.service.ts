import {Injectable} from '@angular/core';
import {Category} from "../../models/Category";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from "../../../environments/environment";
import {errorHandler} from "../../constants";
import {Product} from "../../models/Product";
import {Brand} from "../../models/Brand";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category> {
    return this.http.get<Category>(environment.api_url + "categories")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(environment.api_url + "categories/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  createCategory(body: any): Observable<Category> {
    return this.http.post<Category>(environment.api_url + "categories", body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  updateCategory(id: string, body: any):Observable<Category> {
    return this.http.post<Category>(environment.api_url + "categories/" + id, body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(environment.api_url + "categories/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getProducts(category_id: string): Observable<Product> {
    return this.http.get<Product>(environment.api_url + "categories/" + category_id + "/products")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

 /* getBrands(brand_id: string): Observable<Brand> {
    return this.http.get<Brand>(environment.api_url + "categories/" + brand_id + "/brands")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }*/
}
