import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
export class User {
    constructor(status) {
        this.status = status;
    }
}
export class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(username, password) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/users/login', { username, password }).pipe(map(userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            console.log(userData);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map