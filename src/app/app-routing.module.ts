import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { GetVinylsComponent } from './get-vinyls/get-vinyls.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AuthManagerService } from './service/auth-manager.service';
import { GetCartComponent } from './get-cart/get-cart.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

const routes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
  { path: 'getVinyls', component: GetVinylsComponent, canActivate:[AuthGuardService] },
  { path: 'deleteUser', component: DeleteUserComponent, canActivate:[AuthGuardService] },
  { path: 'addManager', component: AddManagerComponent, canActivate:[AuthManagerService] },
  { path: 'verifyUser', component: VerifyUserComponent, canActivate:[AuthGuardService] },
  { path: 'getCart', component: GetCartComponent, canActivate:[AuthGuardService] },
  { path: 'getUserOrders', component: UserOrdersComponent, canActivate:[AuthGuardService] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
