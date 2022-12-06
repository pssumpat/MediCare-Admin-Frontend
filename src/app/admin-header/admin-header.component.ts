import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from '../models/AdminModel';
import { AdminHomeComponent } from '../pages/admin-home/admin-home.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  admin:AdminModel;

  constructor(private router:Router){}

  ngOnInit(): void {

    this.admin = JSON.parse(localStorage.getItem('admin') || '{}');

  }
  manageCategory()
  {
    return this.router.navigateByUrl('adminHome/manageCategory');
  }

  logout()
  {
    localStorage.clear();
    return this.router.navigate(['']);
  }

}
