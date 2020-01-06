import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/httpclient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: User = new User("","","","");
  errorMessage: String;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]});
  }

  createUser(): void {
    this.user.firstName = this.registerForm.controls['firstName'].value;
    this.user.lastName = this.registerForm.controls['lastName'].value;
    this.user.emailAddress = this.registerForm.controls['emailAddress'].value;
    this.user.password = this.registerForm.controls['password'].value;

    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        }); 
  };

   get f() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.registerForm.invalid) {
           return;
       }

       this.createUser();
       
   }

}
