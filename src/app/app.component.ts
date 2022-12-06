import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AdminModel } from './models/AdminModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  // admin:AdminModel;
  // adminUrl:boolean = false;
  // userUrl:boolean = false;


  constructor( private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    // this.admin = JSON.parse(localStorage.getItem('admin') || '{}');

    // const url: string = this.activatedRoute.snapshot.url.join('');
    // console.log(url)

    // if(url.includes("admin"))
    // {
    //   console.log(url)
    //   this.adminUrl = true;
    // }
    // if(url.includes("user"))
    // {
    //   console.log(url)
    //   this.userUrl = true;
    // }

  }

  title = 'medicare-frontend';
}
