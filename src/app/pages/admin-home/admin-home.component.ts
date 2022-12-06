import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/models/AdminModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  implements OnInit
{
  admin: AdminModel;

  constructor(){

  }
  ngOnInit(): void {

    this.admin = JSON.parse(localStorage.getItem('admin') || '{}');
  }

}
