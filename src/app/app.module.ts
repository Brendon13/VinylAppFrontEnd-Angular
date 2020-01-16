import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { GetVinylsComponent } from './get-vinyls/get-vinyls.component';
import { DataTablesModule } from 'angular-datatables';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { GetCartComponent } from './get-cart/get-cart.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { CustomersComponent } from './customers/customers.component';
import { VinylCreateComponent } from './vinyl-create/vinyl-create.component';
import { VinylUpdateComponent } from './vinyl-update/vinyl-update.component';
import { VinylDeleteComponent } from './vinyl-delete/vinyl-delete.component';
import { VinylViewComponent } from './vinyl-view/vinyl-view.component';
import { GetUserOrdersComponent } from './get-user-orders/get-user-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    GetVinylsComponent,
    DeleteUserComponent,
    AddManagerComponent,
    VerifyUserComponent,
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
