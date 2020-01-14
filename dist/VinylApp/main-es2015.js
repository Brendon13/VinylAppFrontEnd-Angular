(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-manager/add-manager.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-manager/add-manager.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h3>Vinyl Store Manager Creation</h3>\n                <form [formGroup]=\"registerManagerForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label>First Name</label>\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Last Name</label>\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email Address</label>\n                        <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\n                        <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.emailAddress.errors.required\">Email is required</div>\n                            <div *ngIf=\"f.emailAddress.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Register Manager</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"jumbotron\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                  <h3>Vinyl Store User Creation</h3>\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                      <div class=\"form-group\">\n                          <label>First Name</label>\n                          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Last Name</label>\n                          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Email Address</label>\n                          <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.emailAddress.errors }\" />\n                          <div *ngIf=\"submitted && f.emailAddress.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.emailAddress.errors.required\">Email is required</div>\n                              <div *ngIf=\"f.emailAddress.errors.email\">Email must be a valid email address</div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label>Password</label>\n                          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <button class=\"btn btn-primary\">Register</button>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h3>Customers</h3>\n        <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr align=\"center\">\n            <th>ID</th>\n            <th>Email</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th></th>\n            </tr>\n            </thead>\n        <tbody>\n            <tr *ngFor=\"let Customers of data\" align=\"center\">\n                <td>{{Customers.Id}}</td>\n                <td>{{Customers.Email}}</td>\n                <td>{{Customers.FirstName}}</td>\n                <td>{{Customers.LastName}}</td>\n                <td>\n                    <form [formGroup]=\"viewOrdersForm\" (submit)=\"onSubmit(Customers.Id)\">\n                        <span class=\"form-group\" align=\"center\">\n                            <button class=\"btn btn-primary\">Edit Order</button>\n                        </span>\n                        </form>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr align=\"center\">\n                <th>ID</th>\n                <th>Email</th>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th></th>\n            </tr>\n        </tfoot>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h3 align=\"center\">Vinyl Store User Deletion</h3>\n                <form (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\" align=\"center\">\n                        <button class=\"btn btn-primary\" style=\"background-color: #4d0000\">Delete</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <span class=\"text-muted\">All Rights Reserved 2019 @Kovacs Brendon</span>\n    </div>\n  \n  </footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-cart/get-cart.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-cart/get-cart.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h3>Cart</h3>\n        <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n            <thead>\n            <tr align=\"center\">\n              <th>Number of Items</th>\n              <th>Total cost</th>\n              <th>Total Quantity</th>\n              <th></th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr align=\"center\">\n                    <td>{{numberOfItems}}</td>\n                    <td>{{totalPrice}}</td>\n                    <td>{{totalQuantity}}</td>\n                    <td><form (ngSubmit)=\"onSubmit1()\">\n                        <span class=\"form-group\">\n                            <button class=\"btn btn-primary\">Place Order</button>\n                        </span>\n                        </form >\n                </td>\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr align=\"center\">\n                    <th>Number of Items</th>\n                    <th>Total cost</th>\n                    <th>Total Quantity</th>\n                    <th></th>\n                </tr>\n            </tfoot>\n          </table>\n        <br><br>\n        <h3>Cart Items</h3>\n        <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n            <tr align=\"center\">\n                <th>ID</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Quantity</th>\n                <th></th>\n            </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let Items of data\" align=\"center\">\n                    <td>{{Items.Id}}</td>\n                    <td>{{Items.Name}}</td>\n                    <td>{{Items.Description}}</td>\n                    <td>{{Items.Price}}</td>\n                    <td>{{Items.Quantity}}</td>\n                    <td>\n                        <form [formGroup]=\"deleteForm\" (submit)=\"onSubmit(Items.Id)\">\n                            <span class=\"form-group\">\n                                <button class=\"btn btn-primary\" style=\"background-color: #4d0000\">Delete</button>\n                            </span>\n                        </form>\n                    </td>\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr align=\"center\">\n                    <th>ID</th>\n                    <th>Name</th>\n                    <th>Description</th>\n                    <th>Price</th>\n                    <th>Quantity</th>\n                    <th></th>\n                </tr>\n            </tfoot>\n        </table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-user-orders/get-user-orders.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-user-orders/get-user-orders.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\"> \n        <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n            <thead>\n                <tr align=\"center\">\n                    <th>ID</th>\n                    <th>Order Date</th>\n                    <th>Update Date</th>\n                    <th>Cost</th>\n                    <th>Status</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let Orders of data\" align=\"center\">\n                    <td>{{Orders.Id}}</td>\n                    <td>{{Orders.OrderDate}}</td>\n                    <td>{{Orders.UpdateDate}}</td>\n                    <td>{{Orders.Cost}}</td>\n                    <td>{{Orders.Status}}</td>\n                    <td>\n                        <form [formGroup]=\"updateOrderForm\" (ngSubmit)=\"onSubmit(Orders.Id)\">\n                            <div class=\"form-group\">\n                                <label>Status ID</label>\n                                <input type=\"number\" formControlName=\"statusId\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.statusId.errors }\" />\n                                <div *ngIf=\"submitted && f.statusId.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.statusId.errors.required\">Status ID is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary\">Update Order</button>\n                            </div>\n                        </form>\n                    </td>\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr align=\"center\">\n                    <th>ID</th>\n                    <th>Order Date</th>\n                    <th>Update Date</th>\n                    <th>Cost</th>\n                    <th>Status</th>\n                    <th></th>\n                </tr>\n            </tfoot>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-vinyls/get-vinyls.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-vinyls/get-vinyls.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\r\n    <div class=\"container\"> \r\n        <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n            <thead>\r\n            <tr align=\"center\">\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n                <th>Price</th>\r\n                <th>Quantity Available</th>\r\n                <th></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let Vinyls of data\" align=\"center\">\r\n                    <td>{{Vinyls.Id}}</td>\r\n                    <td>{{Vinyls.Name}}</td>\r\n                    <td>{{Vinyls.Description}}</td>\r\n                    <td>{{Vinyls.Price}}</td>\r\n                    <td>{{Vinyls.Quantity}}</td>\r\n                    <td>\r\n                        <form [formGroup]=\"addToCartForm\" (ngSubmit)=\"onSubmit(Vinyls.Id)\">\r\n                            <div class=\"form-group\">\r\n                                <label>Quantity to add to cart</label>\r\n                                <input type=\"number\" formControlName=\"quantity\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.quantity.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.quantity.errors.required\">Quantity is required</div>\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button class=\"btn btn-primary\">Add to Cart</button>\r\n                            </div>\r\n                        </form>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr align=\"center\">\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n                <th>Price</th>\r\n                <th>Quantity Available</th>\r\n                <th></th>\r\n            </tr>\r\n            </tfoot>\r\n            </table>\r\n<!-- <br><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3\">\r\n          <h3>Add Item to Cart</h3>\r\n          <form [formGroup]=\"addToCartForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                  <label>Item ID</label>\r\n                  <input type=\"number\" formControlName=\"ID\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ID.errors }\" />\r\n                  <div *ngIf=\"submitted && f.ID.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.ID.errors.required\">ID is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label>Quantity</label>\r\n                  <input type=\"number\" formControlName=\"quantity\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" />\r\n                  <div *ngIf=\"submitted && f.quantity.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.quantity.errors.required\">Quantity is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <button class=\"btn btn-primary\">Add to Cart</button>\r\n              </div>\r\n          </form>\r\n      </div>\r\n  </div> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class =\"navbar navbar-expand-md navbar-dark \" style=\"background-color: #4d0000\">\r\n    <span class=\"navbar-brand mb-0 h1\">VinylStore</span>\r\n    \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!-- <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/addUser\">Sign Up</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/login\">Login</a></li> -->\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserManager()\" routerLink=\"/addManager\">Add Manager</a></li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"loginService.isUserManager()\">\r\n          Edit Vinyls\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" *ngIf=\"loginService.isUserManager()\" routerLink=\"/vinylView\">View and Update</a>\r\n          <a class=\"dropdown-item\" *ngIf=\"loginService.isUserManager()\" routerLink=\"/vinylCreate\">Create</a>\r\n          <a class=\"dropdown-item\" *ngIf=\"loginService.isUserManager()\" routerLink=\"/vinylDelete\">Delete</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserCustomer()\" routerLink=\"/getVinyls\">Vinyls</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserManager()\" routerLink=\"/getCustomers\">Edit Customers Orders</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserCustomer()\" routerLink=\"/getCart\">Cart</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserCustomer()\" routerLink=\"/getUserOrders\">Orders</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/deleteUser\">Delete User</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/logout\">Log Out</a></li>\r\n    </ul>\r\n    </div>\r\n    </nav>\r\n    \r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"jumbotron\">\n  <div class=\"container\" align=\"center\">\n    <form class=\"text-center border border-light p-5\">\n\n      <p class=\"h4 mb-4\">Sign in</p>\n\n      <input type=\"email\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control mb-4\" placeholder=\"E-mail\">\n\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\n\n      <button (click)=checkLogin() mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\">Sign in</button>\n\n      <p>Not a member?\n        <a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/addUser\">Register</a>\n      </p>\n    </form>\n  </div>\n</div> -->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<title>Login V16</title>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!--===============================================================================================-->\t\n\t<link rel=\"icon\" type=\"image/png\" href=\"images/icons/favicon.ico\"/>\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/bootstrap/css/bootstrap.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"fonts/Linearicons-Free-v1.0.0/icon-font.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/animate/animate.css\">\n<!--===============================================================================================-->\t\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/css-hamburgers/hamburgers.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/animsition/css/animsition.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/select2/select2.min.css\">\n<!--===============================================================================================-->\t\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"vendor/daterangepicker/daterangepicker.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/util.css\">\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"css/main.css\">\n<!--===============================================================================================-->\n</head>\n<body>\n\t\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t\t\t<div class=\"wrap-login100 p-t-30 p-b-50\">\n\t\t\t\t<span class=\"login100-form-title p-b-41\">\n\t\t\t\t\tAccount Login\n\t\t\t\t</span>\n\t\t\t\t<form class=\"login100-form validate-form p-b-33 p-t-5\">\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"User name\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"&#xe82a;\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"&#xe80f;\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"container-login100-form-btn m-t-32\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\n\t<div id=\"dropDownSelect1\"></div>\n\t\n<!--===============================================================================================-->\n\t<script src=\"vendor/jquery/jquery-3.2.1.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/animsition/js/animsition.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/bootstrap/js/popper.js\"></script>\n\t<script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/select2/select2.min.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/daterangepicker/moment.min.js\"></script>\n\t<script src=\"vendor/daterangepicker/daterangepicker.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"vendor/countdowntime/countdowntime.js\"></script>\n<!--===============================================================================================-->\n\t<script src=\"js/main.js\"></script>\n\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-orders/user-orders.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-orders/user-orders.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\"> \n      <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n        <thead>\n        <tr align=\"center\">\n          <th>ID</th>\n          <th>Order Date</th>\\\n          <th>Update Date</th>\n          <th>Status</th>\n          <th>Cost</th>\n        </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let Orders of data\" align=\"center\">\n                <td>{{Orders.Id}}</td>\n                <td>{{Orders.OrderDate}}</td>\n                <td>{{Orders.UpdateDate}}</td>\n                <td>{{Orders.Status}}</td>\n                <td>{{Orders.Cost}}</td>\n            </tr>\n        </tbody>\n        <tfoot>\n          <tr align=\"center\">\n            <th>ID</th>\n            <th>Order Date</th>\n            <th>Update Date</th>\n            <th>Status</th>\n            <th>Cost</th>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-user/verify-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-user/verify-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-user-orders/view-user-orders.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-user-orders/view-user-orders.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>view-user-orders works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-create/vinyl-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-create/vinyl-create.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h3>Vinyl Creation</h3>\n                <form [formGroup]=\"addVinylForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label>Description</label>\n                        <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\n                        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Price</label>\n                        <input type=\"number\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" />\n                        <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.price.errors.required\">Price is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Quantity</label>\n                        <input type=\"text\" ng-pattern=\"^[0-9]*$\" formControlName=\"quantity\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" />\n                        <div *ngIf=\"submitted && f.quantity.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.quantity.errors.required\">Quantity is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Add Vinyl</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-delete/vinyl-delete.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-delete/vinyl-delete.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <h3>Vinyl Deletion</h3>\n            <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n                <thead>\n                <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Quantity</th>\n                <th></th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let Vinyls of data\">\n                        <td>{{Vinyls.Id}}</td>\n                        <td>{{Vinyls.Name}}</td>\n                        <td>{{Vinyls.Description}}</td>\n                        <td>{{Vinyls.Price}}</td>\n                        <td>{{Vinyls.Quantity}}</td>\n                        <td>\n                            <form [formGroup]=\"deleteVinylForm\" (submit)=\"onSubmit(Vinyls.Id)\">\n                                <span class=\"form-group\">\n                                    <button class=\"btn btn-primary\" style=\"background-color: #4d0000\">Delete</button>\n                                </span>\n                            </form>\n                        </td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                    <th>Description</th>\n                    <th>Price</th>\n                    <th>Quantity</th>\n                    <th></th>\n                </tr>\n            </tfoot>\n            </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-update/vinyl-update.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-update/vinyl-update.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h3>Vinyl Update</h3>\n                <form [formGroup]=\"updateVinylForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label>Description</label>\n                        <input type=\"text\" formControlName=\"description\" class=\"form-control\" value={{retrievedVinyl.description}} [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\n                        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" value={{retrievedVinyl.name}} [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Price</label>\n                        <input type=\"number\" formControlName=\"price\" class=\"form-control\" value={{retrievedVinyl.price}} [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" />\n                        <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.price.errors.required\">Price is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Quantity</label>\n                        <input type=\"text\" formControlName=\"quantity\" class=\"form-control\" value={{retrievedVinyl.quantity}} [ngClass]=\"{ 'is-invalid': submitted && f.quantity.errors }\" />\n                        <div *ngIf=\"submitted && f.quantity.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.quantity.errors.required\">Quantity is required</div>\n                            <div *ngIf=\"f.quantity.errors.pattern\">Quantity is not a valid number</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Update Vinyl</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-view/vinyl-view.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-view/vinyl-view.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\"> \n      <table datatable [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n        <thead>\n        <tr align=\"center\">\n          <th>ID</th>\n          <th>Name</th>\n          <th>Description</th>\n          <th>Price</th>\n          <th>Quantity</th>\n          <th></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let Vinyls of data\" align=\"center\">\n                <td>{{Vinyls.Id}}</td>\n                <td>{{Vinyls.Name}}</td>\n                <td>{{Vinyls.Description}}</td>\n                <td>{{Vinyls.Price}}</td>\n                <td>{{Vinyls.Quantity}}</td>\n                <td>\n                  <form [formGroup]=\"updateVinylForm\" (submit)=\"onSubmit(Vinyls.Id)\">\n                    <span class=\"form-group\">\n                        <button class=\"btn btn-primary\">Update</button>\n                    </span>\n                </form>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n          <tr align=\"center\">\n            <th>ID</th>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th></th>\n          </tr>\n      </tfoot>\n      </table>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-manager/add-manager.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-manager/add-manager.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tYW5hZ2VyL2FkZC1tYW5hZ2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-manager/add-manager.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-manager/add-manager.component.ts ***!
  \******************************************************/
/*! exports provided: AddManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagerComponent", function() { return AddManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddManagerComponent = class AddManagerComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.user = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "");
    }
    ngOnInit() {
        this.registerManagerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    createManager() {
        this.user.firstName = this.registerManagerForm.controls['firstName'].value;
        this.user.lastName = this.registerManagerForm.controls['lastName'].value;
        this.user.emailAddress = this.registerManagerForm.controls['emailAddress'].value;
        this.user.password = this.registerManagerForm.controls['password'].value;
        this.httpClientService.createManager(this.user)
            .subscribe(data => {
            alert("Manager created successfully.");
            this.router.navigate(['']);
        });
    }
    ;
    get f() { return this.registerManagerForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.registerManagerForm.invalid) {
            return;
        }
        this.createManager();
    }
};
AddManagerComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-manager/add-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-manager.component.css */ "./src/app/add-manager/add-manager.component.css")).default]
    })
], AddManagerComponent);



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddUserComponent = class AddUserComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.user = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "", "");
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    }
    createUser() {
        this.user.firstName = this.registerForm.controls['firstName'].value;
        this.user.lastName = this.registerForm.controls['lastName'].value;
        this.user.emailAddress = this.registerForm.controls['emailAddress'].value;
        this.user.password = this.registerForm.controls['password'].value;
        this.httpClientService.createUser(this.user)
            .subscribe(data => {
            alert("User created successfully.");
            this.router.navigate(['/login']);
        });
    }
    ;
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.createUser();
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _get_vinyls_get_vinyls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-vinyls/get-vinyls.component */ "./src/app/get-vinyls/get-vinyls.component.ts");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/delete-user/delete-user.component.ts");
/* harmony import */ var _add_manager_add_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-manager/add-manager.component */ "./src/app/add-manager/add-manager.component.ts");
/* harmony import */ var _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify-user/verify-user.component */ "./src/app/verify-user/verify-user.component.ts");
/* harmony import */ var _service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth-manager.service */ "./src/app/service/auth-manager.service.ts");
/* harmony import */ var _get_cart_get_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-cart/get-cart.component */ "./src/app/get-cart/get-cart.component.ts");
/* harmony import */ var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-orders/user-orders.component */ "./src/app/user-orders/user-orders.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _vinyl_create_vinyl_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vinyl-create/vinyl-create.component */ "./src/app/vinyl-create/vinyl-create.component.ts");
/* harmony import */ var _vinyl_update_vinyl_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vinyl-update/vinyl-update.component */ "./src/app/vinyl-update/vinyl-update.component.ts");
/* harmony import */ var _vinyl_delete_vinyl_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vinyl-delete/vinyl-delete.component */ "./src/app/vinyl-delete/vinyl-delete.component.ts");
/* harmony import */ var _vinyl_view_vinyl_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vinyl-view/vinyl-view.component */ "./src/app/vinyl-view/vinyl-view.component.ts");
/* harmony import */ var _view_user_orders_view_user_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-user-orders/view-user-orders.component */ "./src/app/view-user-orders/view-user-orders.component.ts");
/* harmony import */ var _get_user_orders_get_user_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./get-user-orders/get-user-orders.component */ "./src/app/get-user-orders/get-user-orders.component.ts");





















const routes = [
    { path: 'addUser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'getVinyls', component: _get_vinyls_get_vinyls_component__WEBPACK_IMPORTED_MODULE_7__["GetVinylsComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'deleteUser', component: _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_8__["DeleteUserComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'addManager', component: _add_manager_add_manager_component__WEBPACK_IMPORTED_MODULE_9__["AddManagerComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'verifyUser', component: _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_10__["VerifyUserComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'getCart', component: _get_cart_get_cart_component__WEBPACK_IMPORTED_MODULE_12__["GetCartComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'getUserOrders', component: _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_13__["UserOrdersComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'getCustomers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'vinylCreate', component: _vinyl_create_vinyl_create_component__WEBPACK_IMPORTED_MODULE_15__["VinylCreateComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'vinylUpdate', component: _vinyl_update_vinyl_update_component__WEBPACK_IMPORTED_MODULE_16__["VinylUpdateComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'vinylDelete', component: _vinyl_delete_vinyl_delete_component__WEBPACK_IMPORTED_MODULE_17__["VinylDeleteComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'vinylView', component: _vinyl_view_vinyl_view_component__WEBPACK_IMPORTED_MODULE_18__["VinylViewComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'vinylUserOrders', component: _view_user_orders_view_user_orders_component__WEBPACK_IMPORTED_MODULE_19__["ViewUserOrdersComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
    { path: 'getUserOrdersAdmin', component: _get_user_orders_get_user_orders_component__WEBPACK_IMPORTED_MODULE_20__["GetUserOrdersComponent"], canActivate: [_service_auth_manager_service__WEBPACK_IMPORTED_MODULE_11__["AuthManagerService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");




let AppComponent = class AppComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'VinylApp';
    }
    ngOnInit() {
        if (!this.loginService.isUserLoggedIn())
            this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/basic-auth-http-interceptor.service */ "./src/app/service/basic-auth-http-interceptor.service.ts");
/* harmony import */ var _get_vinyls_get_vinyls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-vinyls/get-vinyls.component */ "./src/app/get-vinyls/get-vinyls.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/delete-user/delete-user.component.ts");
/* harmony import */ var _add_manager_add_manager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-manager/add-manager.component */ "./src/app/add-manager/add-manager.component.ts");
/* harmony import */ var _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verify-user/verify-user.component */ "./src/app/verify-user/verify-user.component.ts");
/* harmony import */ var _get_cart_get_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./get-cart/get-cart.component */ "./src/app/get-cart/get-cart.component.ts");
/* harmony import */ var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-orders/user-orders.component */ "./src/app/user-orders/user-orders.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _vinyl_create_vinyl_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vinyl-create/vinyl-create.component */ "./src/app/vinyl-create/vinyl-create.component.ts");
/* harmony import */ var _vinyl_update_vinyl_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vinyl-update/vinyl-update.component */ "./src/app/vinyl-update/vinyl-update.component.ts");
/* harmony import */ var _vinyl_delete_vinyl_delete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vinyl-delete/vinyl-delete.component */ "./src/app/vinyl-delete/vinyl-delete.component.ts");
/* harmony import */ var _vinyl_view_vinyl_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vinyl-view/vinyl-view.component */ "./src/app/vinyl-view/vinyl-view.component.ts");
/* harmony import */ var _view_user_orders_view_user_orders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-user-orders/view-user-orders.component */ "./src/app/view-user-orders/view-user-orders.component.ts");
/* harmony import */ var _get_user_orders_get_user_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./get-user-orders/get-user-orders.component */ "./src/app/get-user-orders/get-user-orders.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
            _get_vinyls_get_vinyls_component__WEBPACK_IMPORTED_MODULE_13__["GetVinylsComponent"],
            _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_15__["DeleteUserComponent"],
            _add_manager_add_manager_component__WEBPACK_IMPORTED_MODULE_16__["AddManagerComponent"],
            _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_17__["VerifyUserComponent"],
            _get_cart_get_cart_component__WEBPACK_IMPORTED_MODULE_18__["GetCartComponent"],
            _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_19__["UserOrdersComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_20__["CustomersComponent"],
            _vinyl_create_vinyl_create_component__WEBPACK_IMPORTED_MODULE_21__["VinylCreateComponent"],
            _vinyl_update_vinyl_update_component__WEBPACK_IMPORTED_MODULE_22__["VinylUpdateComponent"],
            _vinyl_delete_vinyl_delete_component__WEBPACK_IMPORTED_MODULE_23__["VinylDeleteComponent"],
            _vinyl_view_vinyl_view_component__WEBPACK_IMPORTED_MODULE_24__["VinylViewComponent"],
            _view_user_orders_view_user_orders_component__WEBPACK_IMPORTED_MODULE_25__["ViewUserOrdersComponent"],
            _get_user_orders_get_user_orders_component__WEBPACK_IMPORTED_MODULE_26__["GetUserOrdersComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _service_basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["BasicAuthHttpInterceptorService"], multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CustomersComponent = class CustomersComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.invalidDeletion = false;
    }
    ngOnInit() {
        this.viewOrdersForm = this.formBuilder.group({
            UserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.httpClientService.getCustomers().subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    onSubmit(UserId) {
        this.router.navigate(['/getUserOrdersAdmin'], { state: { userId: UserId } });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")).default]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/delete-user/delete-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS11c2VyL2RlbGV0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/delete-user/delete-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DeleteUserComponent = class DeleteUserComponent {
    constructor(httpClientService, router) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.invalidDeletion = false;
    }
    ngOnInit() {
    }
    deleteUser() {
        this.httpClientService.deleteUser().subscribe(data => {
            alert("User deleted successfully.");
            this.router.navigate(['/logout']);
            this.invalidDeletion = false;
        }, error => {
            this.invalidDeletion = true;
        });
    }
    onSubmit() {
        this.deleteUser();
    }
};
DeleteUserComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-user/delete-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-user.component.css */ "./src/app/delete-user/delete-user.component.css")).default]
    })
], DeleteUserComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #222222;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/get-cart/get-cart.component.css":
/*!*************************************************!*\
  !*** ./src/app/get-cart/get-cart.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1jYXJ0L2dldC1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/get-cart/get-cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/get-cart/get-cart.component.ts ***!
  \************************************************/
/*! exports provided: GetCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCartComponent", function() { return GetCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let GetCartComponent = class GetCartComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.totalPrice = 0;
        this.numberOfItems = 0;
        this.totalQuantity = 0;
        this.submitted = false;
        this.invalidDeletion = false;
        this.invalidOrder = false;
    }
    ngOnInit() {
        this.deleteForm = this.formBuilder.group({
            ItemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.httpClientService.getCart().subscribe(response => {
            this.data = response;
            for (var i = 0; i < this.data.length; i++) {
                this.numberOfItems++;
                this.totalQuantity += this.data[i].Quantity;
                this.totalPrice += this.data[i].Price * this.data[i].Quantity;
            }
            this.dtTrigger.next();
        });
        this.dtOptions = {
            "paging": false,
            "ordering": false,
            "info": false,
            "searching": false
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    deleteItem(ItemId) {
        this.httpClientService.deleteItem(ItemId).subscribe(data => {
            alert("Item deleted successfully.");
            this.router.navigate(['/getVinyls']);
            this.invalidDeletion = false;
        }, error => {
            this.invalidDeletion = true;
        });
    }
    onSubmit(ItemId) {
        this.deleteItem(ItemId);
    }
    placeOrder() {
        this.httpClientService.placeOrder().subscribe(data => {
            alert("Order placed successfully.");
            this.router.navigate(['/getVinyls']);
            this.invalidOrder = false;
        }, error => {
            this.invalidOrder = true;
        });
    }
    onSubmit1() {
        this.placeOrder();
    }
};
GetCartComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GetCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-cart/get-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-cart.component.css */ "./src/app/get-cart/get-cart.component.css")).default]
    })
], GetCartComponent);



/***/ }),

/***/ "./src/app/get-user-orders/get-user-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/get-user-orders/get-user-orders.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC11c2VyLW9yZGVycy9nZXQtdXNlci1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/get-user-orders/get-user-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/get-user-orders/get-user-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: GetUserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserOrdersComponent", function() { return GetUserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let GetUserOrdersComponent = class GetUserOrdersComponent {
    constructor(httpClientService, router, formBuilder) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.submitted = false;
        this.invalidUpdate = false;
        this.statusDTO = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["StatusDTO"](0);
        this.UserId = this.router.getCurrentNavigation().extras.state.userId;
    }
    ngOnInit() {
        this.httpClientService.getOrder(this.UserId).subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
        this.updateOrderForm = this.formBuilder.group({
            statusId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    updateOrder() {
        this.statusDTO.id = this.updateOrderForm.controls['statusId'].value;
        this.httpClientService.updateOrder(this.orderId, this.statusDTO).subscribe(data => {
            alert("Order updated successfully.");
            this.router.navigate(['/getCustomers']);
            this.invalidUpdate = false;
        }, error => {
            this.invalidUpdate = true;
        });
    }
    get f() { return this.updateOrderForm.controls; }
    onSubmit(orderID) {
        this.submitted = true;
        this.orderId = orderID;
        if (this.updateOrderForm.invalid) {
            return;
        }
        this.updateOrder();
    }
};
GetUserOrdersComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
GetUserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-user-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-user-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-user-orders/get-user-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-user-orders.component.css */ "./src/app/get-user-orders/get-user-orders.component.css")).default]
    })
], GetUserOrdersComponent);



/***/ }),

/***/ "./src/app/get-vinyls/get-vinyls.component.css":
/*!*****************************************************!*\
  !*** ./src/app/get-vinyls/get-vinyls.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC12aW55bHMvZ2V0LXZpbnlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/get-vinyls/get-vinyls.component.ts":
/*!****************************************************!*\
  !*** ./src/app/get-vinyls/get-vinyls.component.ts ***!
  \****************************************************/
/*! exports provided: GetVinylsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVinylsComponent", function() { return GetVinylsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let GetVinylsComponent = class GetVinylsComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.submitted = false;
        this.invalidSelection = false;
        this.cartItemDTO = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["CartItemDTO"](0);
    }
    ngOnInit() {
        this.addToCartForm = this.formBuilder.group({
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.httpClientService.getVinyls().subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    addToCart() {
        this.cartItemDTO.quantity = this.addToCartForm.controls['quantity'].value;
        this.httpClientService.addToCart(this.ItemId, this.cartItemDTO).subscribe(data => {
            alert("Item added/updated to cart successfully.");
            this.router.navigate(['/getCart']);
            this.invalidSelection = false;
        }, error => {
            this.invalidSelection = true;
        });
    }
    get f() { return this.addToCartForm.controls; }
    onSubmit(ItemId) {
        this.submitted = true;
        this.ItemId = ItemId;
        console.log(this.ItemId);
        if (this.addToCartForm.invalid) {
            console.log(this.addToCartForm.invalid);
            return;
        }
        this.addToCart();
    }
};
GetVinylsComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GetVinylsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-vinyls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-vinyls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-vinyls/get-vinyls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-vinyls.component.css */ "./src/app/get-vinyls/get-vinyls.component.css")).default]
    })
], GetVinylsComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(loginService, httpClientService) {
        this.loginService = loginService;
        this.httpClientService = httpClientService;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    checkLogin() {
        (this.loginService.authenticate(this.username, this.password).subscribe(data => {
            this.router.navigate(['/verifyUser']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutComponent = class LogoutComponent {
    constructor(authentocationService, router) {
        this.authentocationService = authentocationService;
        this.router = router;
    }
    ngOnInit() {
        this.authentocationService.logOut();
        this.router.navigate(['login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/service/auth-manager.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/auth-manager.service.ts ***!
  \*************************************************/
/*! exports provided: AuthManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManagerService", function() { return AuthManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




let AuthManagerService = class AuthManagerService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserManager())
            return true;
        this.router.navigate(['']);
        return false;
    }
};
AuthManagerService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthManagerService);



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(username, password) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/users/login', { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    verifyUser() {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/verifyManager').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(userData => {
            let userRole = userData.role;
            sessionStorage.setItem('role', userRole);
            return userData;
        }));
    }
    handleError(error) {
        let splitted = JSON.stringify(error.error).split(":");
        let splitted2 = splitted[splitted.length - 1];
        let errorMessage = splitted2.substr(1, splitted2.length - 3);
        console.log(errorMessage);
        alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null);
    }
    isUserManager() {
        if (this.isUserLoggedIn()) {
            let userRole = sessionStorage.getItem('role');
            return (userRole.match('true'));
        }
    }
    isUserCustomer() {
        if (this.isUserLoggedIn()) {
            let userRole = sessionStorage.getItem('role');
            return (userRole.match('false'));
        }
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/basic-auth-http-interceptor.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/basic-auth-http-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: BasicAuthHttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthHttpInterceptorService", function() { return BasicAuthHttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicAuthHttpInterceptorService = class BasicAuthHttpInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthHttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthHttpInterceptorService);



/***/ }),

/***/ "./src/app/service/httpclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/httpclient.service.ts ***!
  \***********************************************/
/*! exports provided: User, Item, ItemWithOutId, CartItemDTO, StatusDTO, Cart, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWithOutId", function() { return ItemWithOutId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemDTO", function() { return CartItemDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDTO", function() { return StatusDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class User {
    constructor(firstName, lastName, emailAddress, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
}
class Item {
    constructor(id, name, description, price, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}
class ItemWithOutId {
    constructor(name, description, price, quantity) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}
class CartItemDTO {
    constructor(quantity) {
        this.quantity = quantity;
    }
}
class StatusDTO {
    constructor(id) {
        this.id = id;
    }
}
class Cart {
    constructor(NumberOfItems, ItemsInCart, TotalCost) {
        this.NumberOfItems = NumberOfItems;
        this.ItemsInCart = ItemsInCart;
        this.TotalCost = TotalCost;
    }
}
let HttpClientService = class HttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    createUser(user) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/users', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getVinyls() {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/vinyls').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteUser() {
        return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    createManager(user) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/managers', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    addToCart(itemId, cartItemDTO) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/vinyls/cart/' + itemId, cartItemDTO).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCart() {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/customer/cart/detail').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteItem(itemId) {
        return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/cart/' + itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    placeOrder() {
        return this.httpClient.put('http://localhost:8080/VinylStore/api/orders', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUserOrder() {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/users/orders').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    addVinyl(vinyl) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/vinylsAdd', vinyl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorAddVinyl));
    }
    deleteVinyl(itemId) {
        return this.httpClient.delete('http://localhost:8080/VinylStore/api/vinyls/' + itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateVinyl(itemId, vinyl) {
        return this.httpClient.put('http://localhost:8080/VinylStore/api/vinyls/update/' + itemId, vinyl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCustomers() {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/customers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateOrder(orderId, status) {
        return this.httpClient.put('http://localhost:8080/VinylStore/api/orders/' + orderId, status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getOrder(userId) {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/users/' + userId + '/orders').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getVinyl(vinylId) {
        return this.httpClient.get('http://localhost:8080/VinylStore/api/vinyls/' + vinylId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let splitted = JSON.stringify(error.error).split(":");
        let splitted2 = splitted[splitted.length - 1];
        let errorMessage = splitted2.substr(1, splitted2.length - 3);
        alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
    handleErrorAddVinyl(error) {
        let splitted = JSON.stringify(error.error).split(":");
        let splitted2 = splitted[splitted.length - 1];
        let errorMessage = splitted2.substr(1, splitted2.length - 3);
        if (error.error.error == 'Bad Request') {
            alert('Quantity must be integer value!');
        }
        else
            alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
};
HttpClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpClientService);



/***/ }),

/***/ "./src/app/user-orders/user-orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-orders/user-orders.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItb3JkZXJzL3VzZXItb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-orders/user-orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-orders/user-orders.component.ts ***!
  \******************************************************/
/*! exports provided: UserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function() { return UserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let UserOrdersComponent = class UserOrdersComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.httpClientService.getUserOrder().subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
};
UserOrdersComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
];
UserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-orders/user-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-orders.component.css */ "./src/app/user-orders/user-orders.component.css")).default]
    })
], UserOrdersComponent);



/***/ }),

/***/ "./src/app/verify-user/verify-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/verify-user/verify-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS11c2VyL3ZlcmlmeS11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/verify-user/verify-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/verify-user/verify-user.component.ts ***!
  \******************************************************/
/*! exports provided: VerifyUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function() { return VerifyUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");




let VerifyUserComponent = class VerifyUserComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.invalidManager = false;
    }
    ngOnInit() {
        this.checkManager();
    }
    checkManager() {
        (this.loginservice.verifyUser().subscribe(data => {
            this.data = data;
            if (data.role == true) {
                this.router.navigate(['/getCustomers']);
            }
            else {
                this.router.navigate(['/getVinyls']);
            }
            this.invalidManager = false;
        }, error => {
            this.invalidManager = true;
        }));
    }
};
VerifyUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
VerifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-user/verify-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-user.component.css */ "./src/app/verify-user/verify-user.component.css")).default]
    })
], VerifyUserComponent);



/***/ }),

/***/ "./src/app/view-user-orders/view-user-orders.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view-user-orders/view-user-orders.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdXNlci1vcmRlcnMvdmlldy11c2VyLW9yZGVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/view-user-orders/view-user-orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view-user-orders/view-user-orders.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewUserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserOrdersComponent", function() { return ViewUserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewUserOrdersComponent = class ViewUserOrdersComponent {
    //, {state: {data: {}}}
    constructor() { }
    ngOnInit() {
    }
};
ViewUserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-user-orders/view-user-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user-orders.component.css */ "./src/app/view-user-orders/view-user-orders.component.css")).default]
    })
], ViewUserOrdersComponent);



/***/ }),

/***/ "./src/app/vinyl-create/vinyl-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vinyl-create/vinyl-create.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbnlsLWNyZWF0ZS92aW55bC1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vinyl-create/vinyl-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vinyl-create/vinyl-create.component.ts ***!
  \********************************************************/
/*! exports provided: VinylCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylCreateComponent", function() { return VinylCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VinylCreateComponent = class VinylCreateComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.vinyl = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["ItemWithOutId"]("", "", 0, 0);
        this.invalidDeletion = false;
    }
    ngOnInit() {
        this.addVinylForm = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    createVinyl() {
        this.vinyl.description = this.addVinylForm.controls['description'].value;
        this.vinyl.name = this.addVinylForm.controls['name'].value;
        this.vinyl.price = this.addVinylForm.controls['price'].value;
        this.vinyl.quantity = this.addVinylForm.controls['quantity'].value;
        this.httpClientService.addVinyl(this.vinyl)
            .subscribe(data => {
            alert("Vinyl created successfully.");
            this.router.navigate(['/getVinyls']);
        });
    }
    ;
    get f() { return this.addVinylForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.addVinylForm.invalid) {
            return;
        }
        this.createVinyl();
    }
};
VinylCreateComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VinylCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vinyl-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vinyl-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-create/vinyl-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vinyl-create.component.css */ "./src/app/vinyl-create/vinyl-create.component.css")).default]
    })
], VinylCreateComponent);



/***/ }),

/***/ "./src/app/vinyl-delete/vinyl-delete.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vinyl-delete/vinyl-delete.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbnlsLWRlbGV0ZS92aW55bC1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vinyl-delete/vinyl-delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vinyl-delete/vinyl-delete.component.ts ***!
  \********************************************************/
/*! exports provided: VinylDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylDeleteComponent", function() { return VinylDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let VinylDeleteComponent = class VinylDeleteComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.invalidDeletion = false;
    }
    ngOnInit() {
        this.deleteVinylForm = this.formBuilder.group({
            ItemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.httpClientService.getVinyls().subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    deleteItem(ItemId) {
        this.httpClientService.deleteVinyl(ItemId).subscribe(data => {
            alert("Vinyl deleted successfully.");
            this.router.navigate(['/getVinyls']);
            this.invalidDeletion = false;
        }, error => {
            this.invalidDeletion = true;
        });
    }
    onSubmit(ItemId) {
        this.deleteItem(ItemId);
    }
};
VinylDeleteComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VinylDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vinyl-delete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vinyl-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-delete/vinyl-delete.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vinyl-delete.component.css */ "./src/app/vinyl-delete/vinyl-delete.component.css")).default]
    })
], VinylDeleteComponent);



/***/ }),

/***/ "./src/app/vinyl-update/vinyl-update.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vinyl-update/vinyl-update.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbnlsLXVwZGF0ZS92aW55bC11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/vinyl-update/vinyl-update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vinyl-update/vinyl-update.component.ts ***!
  \********************************************************/
/*! exports provided: VinylUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylUpdateComponent", function() { return VinylUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VinylUpdateComponent = class VinylUpdateComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.vinyl = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["ItemWithOutId"]("", "", 0, 0);
        this.invalidDeletion = false;
        this.retrievedVinyl = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["ItemWithOutId"]("", "", 0, 0);
        this.quantityPattern = "^[0-9]*$";
        this.ItemId = this.router.getCurrentNavigation().extras.state.ItemId;
    }
    ngOnInit() {
        this.httpClientService.getVinyl(this.ItemId).subscribe(response => {
            this.data = response;
            this.retrievedVinyl.description = this.data.Description;
            this.retrievedVinyl.name = this.data.Name;
            this.retrievedVinyl.price = this.data.Price;
            this.retrievedVinyl.quantity = this.data.Quantity;
        });
        this.updateVinylForm = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.quantityPattern)]]
        });
    }
    updateVinyl() {
        this.vinyl.description = this.updateVinylForm.controls['description'].value;
        this.vinyl.name = this.updateVinylForm.controls['name'].value;
        this.vinyl.price = this.updateVinylForm.controls['price'].value;
        this.vinyl.quantity = this.updateVinylForm.controls['quantity'].value;
        this.httpClientService.updateVinyl(this.ItemId, this.vinyl).subscribe(data => {
            alert("Vinyl updated successfully.");
            this.router.navigate(['/vinylView']);
            this.invalidDeletion = false;
        }, error => {
            this.invalidDeletion = true;
        });
    }
    get f() { return this.updateVinylForm.controls; }
    onSubmit() {
        this.submitted = true;
        console.log(this.updateVinylForm.controls['description'].value);
        if (this.updateVinylForm.invalid) {
            return;
        }
        this.updateVinyl();
    }
};
VinylUpdateComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VinylUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vinyl-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vinyl-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-update/vinyl-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vinyl-update.component.css */ "./src/app/vinyl-update/vinyl-update.component.css")).default]
    })
], VinylUpdateComponent);



/***/ }),

/***/ "./src/app/vinyl-view/vinyl-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/vinyl-view/vinyl-view.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpbnlsLXZpZXcvdmlueWwtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/vinyl-view/vinyl-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/vinyl-view/vinyl-view.component.ts ***!
  \****************************************************/
/*! exports provided: VinylViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinylViewComponent", function() { return VinylViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let VinylViewComponent = class VinylViewComponent {
    constructor(httpClientService, formBuilder, router) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.message = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.invalidDeletion = false;
    }
    ngOnInit() {
        this.updateVinylForm = this.formBuilder.group({
            ItemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.httpClientService.getVinyls().subscribe(response => {
            this.data = response;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    onSubmit(ItemId) {
        this.router.navigate(['/vinylUpdate'], { state: { ItemId: ItemId } });
    }
};
VinylViewComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VinylViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vinyl-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vinyl-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vinyl-view/vinyl-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vinyl-view.component.css */ "./src/app/vinyl-view/vinyl-view.component.css")).default]
    })
], VinylViewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VinylApp\VINYLAPP\VinylApp-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);