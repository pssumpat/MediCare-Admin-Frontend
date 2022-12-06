import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-manage-category',
  templateUrl: './admin-manage-category.component.html',
  styleUrls: ['./admin-manage-category.component.css']
})
export class AdminManageCategoryComponent implements OnInit
{

  categories: CategoryModel[];
  i:number = 1;

  constructor(private categoryService: CategoryService ){}

  ngOnInit(): void
  {
   this.categoryService.getAllCategories().subscribe(data=> this.categories = data);
  }


  deleteCategoryById(id: number)
  {
    this.categories = this.categories.filter(categories => categories.id!==id)
    this.categoryService.deleteCategoryById(id).subscribe(a => console.log(a));

  }

}
