import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../service/httpclient.service';
import { Validators } from '@angular/forms';
let AddUserComponent = class AddUserComponent {
    constructor(httpClientService, formBuilder) {
        this.httpClientService = httpClientService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.user = new User("", "", "", "");
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailAddress: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
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
        });
    }
    ;
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.createUser();
        if (this.errorMessage = "Email already in use!") {
            alert("Email already in use!");
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
};
AddUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-user',
        templateUrl: './add-user.component.html',
        styleUrls: ['./add-user.component.css']
    })
], AddUserComponent);
export { AddUserComponent };
//# sourceMappingURL=add-user.component.js.map