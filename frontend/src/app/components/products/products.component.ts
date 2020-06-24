import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../models/Product";
import {mapProduct} from "../../constants";
import {CategoriesService} from "../../services/categories/categories.service";
import {Category} from "../../models/Category";
import {mapCategory} from "../../constants";
import {BrandsService} from "../../services/brand/brands.service";
import {Brand} from "../../models/Brand";
import {mapBrand} from "../../constants";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  product: Product = null;

  categories: Array<Category> = [];
  category: Category = null;

  brands: Array<Brand> = [];
  brand: Brand = null;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      for (let i in res) {
        this.products.push(mapProduct(res[i]));
      }
    });
    this.categoriesService.getCategories().subscribe(res => {
      for (let i in res) {
        this.categories.push(mapCategory(res[i]));
      }
    });
    this.brandsService.getBrands().subscribe(res => {
      for (let i in res) {
        this.brands.push(mapBrand(res[i]));
      }
    });
  }

  selectCategory(category: Category) {
    this.category = category;
    this.categoriesService.getProducts(this.category.id).subscribe(res => {
      this.products = [];
      for (let k in res) {
        this.products.push(mapProduct(res[k]));
      }
    });
  }
  selectBrand(brand: Brand) {
    this.brand = brand;
    this.brandsService.getProducts(this.brand.id).subscribe(res => {
      this.products = [];
      for (let k in res) {
        this.products.push(mapProduct(res[k]));
      }
    });
  }
}
