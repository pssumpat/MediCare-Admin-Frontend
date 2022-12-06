import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_admin } from '../data';
import { AdminModel } from '../models/AdminModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  baseUrl: string = "http://localhost:8080/api/admin";

  constructor(private http: HttpClient) { }

  admin: AdminModel[] = sample_admin ;


// this mthod to get single admin details by email
  getAdminByEmail(email:string):Observable<AdminModel>
  {
    return this.http.get<AdminModel>(this.baseUrl+"/"+email);
  }

  //  getAdminByEmail(inputEmail:string)
  // {
  //   let admin: AdminModel;
  //   //write logic to return admin with inputEmail or else retrun with error - incorrrect password or usernot found
  //    sample_admin.forEach(element => {
  //     if(element.email === inputEmail)
  //     {
  //       admin = element;
  //       return;
  //     }
  //   });

  // }

}
