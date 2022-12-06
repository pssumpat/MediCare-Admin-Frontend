import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/models/AdminModel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  admin: AdminModel;

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('admin') || '{}');
  }

}
