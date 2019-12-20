import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
BasicAuthHttpInterceptorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BasicAuthHttpInterceptorService);
export { BasicAuthHttpInterceptorService };
//# sourceMappingURL=basic-auth-http-interceptor.service.js.map