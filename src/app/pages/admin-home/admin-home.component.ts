import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  implements OnInit
{
  products: ProductModel[];

  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {

    // this.products = this.productService.getAllProducts();
  }

}
