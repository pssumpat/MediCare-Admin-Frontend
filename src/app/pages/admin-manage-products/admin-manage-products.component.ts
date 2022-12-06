import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/models/AdminModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-manage-products',
  templateUrl: './admin-manage-products.component.html',
  styleUrls: ['./admin-manage-products.component.css']
})
export class AdminManageProductsComponent implements OnInit {

  products: ProductModel[];
  admin: AdminModel;
  i:number =1;
  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data =>{
      this.products = data;
    } );
    this.admin = JSON.parse(localStorage.getItem('admin') || '{}');

    // this.products = this.productService.getAllProducts();
  }

  deleteProductById(id:number){
    this.products = this.products.filter(products => products.id!==id)
    this.productService.deleteProductById(id).subscribe(a => console.log(a));
  }
}
