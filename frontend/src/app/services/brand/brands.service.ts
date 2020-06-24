import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../../models/Brand";
import {environment} from "../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {errorHandler} from "../../constants";
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) {
  }

  getBrands(): Observable<Brand> {
    return this.http.get<Brand>(environment.api_url + "brands")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getBrand(id: string): Observable<Brand> {
    return this.http.get<Brand>(environment.api_url + "brands/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  createBrand(body: any): Observable<Brand> {
    return this.http.post<Brand>(environment.api_url + "brands", body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  updateBrand(id: string, body: any): Observable<Brand> {
    return this.http.post<Brand>(environment.api_url + "brands/" + id, body)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  deleteBrand(id: string): Observable<Brand> {
    return this.http.delete<Brand>(environment.api_url + "brands/" + id)
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }

  getProducts(brand_id: string): Observable<Product> {
    return this.http.get<Product>(environment.api_url + "brands/" + brand_id + "/products")
      .pipe(
        retry(1),
        catchError(errorHandler)
      );
  }
}
