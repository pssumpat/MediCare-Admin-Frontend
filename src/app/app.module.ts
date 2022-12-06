import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminManageProductsComponent } from './pages/admin-manage-products/admin-manage-products.component';
import { AdminManageCategoryComponent } from './pages/admin-manage-category/admin-manage-category.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminWelcomeComponent } from './pages/admin-welcome/admin-welcome.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UserWelcomeComponent } from './pages/user-welcome/user-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminManageProductsComponent,
    AdminManageCategoryComponent,
    AddProductComponent,
    UpdateProductComponent,
    AdminHeaderComponent,
    AdminWelcomeComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    UserWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
