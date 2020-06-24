import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {ShoppingCartsComponent} from "./components/shopping-carts/shopping-carts.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'shopping-carts', component: ShoppingCartsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
