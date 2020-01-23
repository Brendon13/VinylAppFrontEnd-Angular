import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { VerifyUserRoleService } from '../service/verify-user-role.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  invalidLogin = false;

  constructor(private router: Router, public loginService: AuthenticationService, private verifyUserRole: VerifyUserRoleService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]});
  }

  checkLogin() {
    (this.loginService.authenticate(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(
      data => {
        this.verifyUserRole.checkManager();
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    ));
  }

  get formControls() { return this.loginForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.loginForm.invalid) {
           return;
       }

       this.checkLogin();
   }

}