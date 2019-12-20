import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
export class User {
    constructor(firstName, lastName, emailAddress, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
}
let HttpClientService = class HttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    showUserCreatedPage() {
        console.log("test call");
        return this.httpClient.get('http://localhost:8080/VinylStore/api/userCreated');
    }
    createUser(user) {
        return this.httpClient.post('http://localhost:8080/VinylStore/api/users', user);
    }
};
HttpClientService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpClientService);
export { HttpClientService };
//# sourceMappingURL=httpclient.service.js.map