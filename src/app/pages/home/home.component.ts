import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/models/AdminModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { AdminService } from 'src/app/services/admin.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : ProductModel[]
  admin: AdminModel;

  constructor(private productService: ProductServiceService, private adminService: AdminService)
  {

  }
  ngOnInit(): void
  {
    // this will subscribe to data comming from product service
   this.productService.getAllProducts().subscribe(data=> this.products = data);
    // this.products = this.productService.getAllProducts();
  }

}
