import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminManageCategoryComponent } from './pages/admin-manage-category/admin-manage-category.component';
import { AdminManageProductsComponent } from './pages/admin-manage-products/admin-manage-products.component';
import { AdminWelcomeComponent } from './pages/admin-welcome/admin-welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { UserWelcomeComponent } from './pages/user-welcome/user-welcome.component';

const routes: Routes = [
  {path : "admin" , component : AdminWelcomeComponent},
  {path: "manageCategory", component : AdminManageCategoryComponent},
  {path: "manageProducts" , component: AdminManageProductsComponent},
  {path: "adminHome", component : AdminHomeComponent},
  {path: "manageProducts/updateProduct/:id", component : UpdateProductComponent},
  {path: "manageCategory/updateCategory/:id", component : UpdateCategoryComponent},
  {path: "addProduct" , component: AddProductComponent},
  {path: "addCategory" , component: AddCategoryComponent},
// =================== User Routes ================================= //
  {path : "user" , component : UserWelcomeComponent},
  // {path: "login", component : LoginComponent},
  // {path: "adminHome/manageProducts/updateProduc t/:id", component : UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
