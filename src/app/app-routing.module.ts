import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminManageProductsComponent } from './pages/admin-manage-products/admin-manage-products.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path: "login", component : LoginComponent},
  {path: "login/adminLogin", component : AdminLoginComponent},
  {path: "adminHome", component : AdminHomeComponent},
  {path: "adminHome/manageProducts", component : AdminManageProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
