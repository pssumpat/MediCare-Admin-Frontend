import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  category : CategoryModel = new CategoryModel();
  addCategoryForm:FormGroup;
  submitted:boolean = false;

  constructor(private builder:FormBuilder,private router: Router, private categoryService:CategoryService){}

  ngOnInit(): void {
    this.addCategoryForm = this.builder.group({
      name : ['',Validators.required]
    })
  }

  get form(){
    return this.addCategoryForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.addCategoryForm.invalid)
    {
      return;
    }
    else
    {
      this.categoryService.addCategory(this.category).subscribe(data=>console.log(data));
      return this.router.navigateByUrl("addCategory");
    }
  }


}
