import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUserComponent } from './customer-add-user/customer-add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { GetVinylsComponent } from './customer-get-vinyls/customer-get-vinyls.component';
import { DataTablesModule } from 'angular-datatables';
import { DeleteUserComponent } from './customer-delete-user/customer-delete-user.component';
import { AddManagerComponent } from './admin-add-manager/admin-add-manager.component';
import { GetCartComponent } from './customer-get-cart/customer-get-cart.component';
import { UserOrdersComponent } from './customer-get-orders/customer-get-orders.component';
import { CustomersComponent } from './admin-get-customers/admin-get-customers.component';
import { VinylCreateComponent } from './admin-vinyl-create/admin-vinyl-create.component';
import { VinylUpdateComponent } from './admin-vinyl-update/admin-vinyl-update.component';
import { VinylDeleteComponent } from './admin-vinyl-delete/admin-vinyl-delete.component';
import { VinylViewComponent } from './admin-vinyl-view/admin-vinyl-view.component';
import { GetUserOrdersComponent } from './admin-get-customer-orders/admin-get-customer-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    GetVinylsComponent,
    DeleteUserComponent,
    AddManagerComponent,
    GetCartComponent,
    UserOrdersComponent,
    CustomersComponent,
    VinylCreateComponent,
    VinylUpdateComponent,
    VinylDeleteComponent,
    VinylViewComponent,
    GetUserOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
