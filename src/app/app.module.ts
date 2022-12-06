import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminManageProductsComponent } from './pages/admin-manage-products/admin-manage-products.component';
import { AdminManageCategoryComponent } from './pages/admin-manage-category/admin-manage-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminManageProductsComponent,
    AdminManageCategoryComponent,
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
