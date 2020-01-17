import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './customer-add-user/customer-add-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { GetVinylsComponent } from './customer-get-vinyls/customer-get-vinyls.component';
import { DeleteUserComponent } from './customer-delete-user/customer-delete-user.component';
import { AddManagerComponent } from './admin-add-manager/admin-add-manager.component';
import { AuthManagerService } from './service/auth-manager.service';
import { GetCartComponent } from './customer-get-cart/customer-get-cart.component';
import { UserOrdersComponent } from './customer-get-orders/customer-get-orders.component';
import { CustomersComponent } from './admin-get-customers/admin-get-customers.component';
import { VinylCreateComponent } from './admin-vinyl-create/admin-vinyl-create.component';
import { VinylUpdateComponent } from './admin-vinyl-update/admin-vinyl-update.component';
import { VinylDeleteComponent } from './admin-vinyl-delete/admin-vinyl-delete.component';
import { VinylViewComponent } from './admin-vinyl-view/admin-vinyl-view.component';
import { GetUserOrdersComponent } from './admin-get-customer-orders/admin-get-customer-orders.component';

const routes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'getVinyls', component: GetVinylsComponent, canActivate:[AuthGuardService] },
  { path: 'deleteUser', component: DeleteUserComponent, canActivate:[AuthGuardService] },
  { path: 'addManager', component: AddManagerComponent, canActivate:[AuthManagerService] },
  { path: 'getCart', component: GetCartComponent, canActivate:[AuthGuardService] },
  { path: 'getUserOrders', component: UserOrdersComponent, canActivate:[AuthGuardService] },
  { path: 'getCustomers', component: CustomersComponent, canActivate:[AuthManagerService] },
  { path: 'vinylCreate', component: VinylCreateComponent, canActivate:[AuthManagerService] },
  { path: 'vinylUpdate', component: VinylUpdateComponent, canActivate:[AuthManagerService] },
  { path: 'vinylDelete', component: VinylDeleteComponent, canActivate:[AuthManagerService] },
  { path: 'vinylView', component: VinylViewComponent, canActivate:[AuthManagerService] },
  { path: 'getUserOrdersAdmin', component: GetUserOrdersComponent, canActivate:[AuthManagerService] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
