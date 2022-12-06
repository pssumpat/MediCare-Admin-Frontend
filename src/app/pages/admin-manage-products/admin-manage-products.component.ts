import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-manage-products',
  templateUrl: './admin-manage-products.component.html',
  styleUrls: ['./admin-manage-products.component.css']
})
export class AdminManageProductsComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data => this.products = data);

    // this.products = this.productService.getAllProducts();
  }

  deleteProductById(id:number){
    this.products = this.products.filter(products => products.id!==id)
    this.productService.deleteProductById(id);
  }
}
