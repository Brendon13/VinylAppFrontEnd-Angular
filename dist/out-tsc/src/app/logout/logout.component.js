import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
LogoutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        styleUrls: ['./logout.component.css']
    })
], LogoutComponent);
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map