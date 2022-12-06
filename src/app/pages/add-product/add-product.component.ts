import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProductModel } from 'src/app/models/AddProductModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit
{

  product: ProductModel = new ProductModel();

  constructor(private builder:FormBuilder, private router: Router , private productService: ProductServiceService ){}

  addProductForm: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {

    this.addProductForm = this.builder.group({
      productName : ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productRating: ['', Validators.required]
    })
  }

  get form()
  {
    return this.addProductForm.controls;
  }

  onSubmit(){

    this.submitted = true;

    console.log("submitted: "+this.submitted);

    if(this.addProductForm.invalid)
    {
      return;
    }
    else
    {
      console.log(this.product);
      this.productService.addProduct(this.product).subscribe(data=> console.log(data));
      this.router.navigateByUrl('addProduct')
    }
  }
}
