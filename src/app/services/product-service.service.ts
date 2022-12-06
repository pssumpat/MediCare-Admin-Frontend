import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/ProductModel';
import { sample_product } from '../data';
import { AddProductModel } from '../models/AddProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl: string = "http://localhost:8080/api/product";
  constructor(private http:HttpClient){}
  // methods to access data from api
  getAllProducts():Observable<ProductModel[]>
  {
    return this.http.get<ProductModel[]>(this.baseUrl);
  }

  // getAllProducts():ProductModel[]
  // {
  //   return sample_product;
  // }

// this method is used to get single product by id from api
  getProductById(id:number):Observable<ProductModel>
  {
    return this.http.get<ProductModel>(this.baseUrl+'/'+id);
  }

  // getProductById(id:number):Observable<ProductModel>
  // {
  //   return this.http.get<ProductModel>(this.baseUrl+id);
  // }

  deleteProductById(id:number)
  {
    return this.http.delete(this.baseUrl+'/'+id);
  }

  addProduct(product:AddProductModel):Observable<ProductModel>
  {
    console.log("service: "+product);
    return this.http.post<ProductModel>(this.baseUrl,product);
  }


}
