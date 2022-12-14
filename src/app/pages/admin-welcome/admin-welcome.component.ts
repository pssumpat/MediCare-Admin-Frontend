import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/models/AdminModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent {

  constructor(private builder: FormBuilder,private router:Router,private adminService: AdminService)
  {

  }

  adminLoginForm : FormGroup;
  submitted: boolean = false;
  passwordInvalid: boolean = false;
  adminLoggedIn: boolean = false;

  ngOnInit(): void {
    this.adminLoginForm = this.builder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }

  get form()
  {
    return this.adminLoginForm.controls;
  }

  admin : AdminModel;
  onSubmit(){
    this.submitted = true;
    if(this.adminLoginForm.invalid)
    {
      return;
    }
    else
    {
      //USE ADMIN SERVICE TO GET USER BY EMAIL AND VALIDATE PASSWORD
      let inputEmail = this.adminLoginForm.value.email;
      let inputPass = this.adminLoginForm.value.password;
      this.adminService.getAdminByEmail(inputEmail).subscribe(data => {
        this.admin = data;
        if(this.admin.password === inputPass)
      {
        console.log("true");
        this.passwordInvalid = false;
        this.adminLoggedIn = true;
        localStorage.setItem("adminLoggedIn","true");
        localStorage.setItem('admin',JSON.stringify(this.admin));
        this.router.navigateByUrl('adminHome')

      }
      else
      {
        this.passwordInvalid = true;
        return console.log("invalid Password");
      }
      });

    }
  }
}
