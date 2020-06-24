import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {Category} from "../../models/Category";
import {mapCategory} from "../../constants";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [];
  category: Category = null;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(res => {
      for (let i in res) {
        this.categories.push(mapCategory(res[i]));
      }
    });
  }

  selectCategory(category: Category) {
    this.category = category;
  }
}
