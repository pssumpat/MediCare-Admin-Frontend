import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = "http://localhost:8080/api/category";

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<CategoryModel[]>
  {
    return this.http.get<CategoryModel[]>(this.baseUrl);
  }

  deleteCategoryById(id:number){
    return this.http.delete(this.baseUrl+'/'+id);
  }

  addCategory(category:CategoryModel):Observable<CategoryModel>
  {
    return this.http.post<CategoryModel>(this.baseUrl,category);
  }

}
