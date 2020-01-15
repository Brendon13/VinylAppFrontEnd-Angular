import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  registerManagerForm: FormGroup;
  submitted = false;
  user: User = new User("","","","");
  errorMessage: String;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerManagerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]});
  }

  createManager(): void {
    this.user.firstName = this.registerManagerForm.controls['firstName'].value;
    this.user.lastName = this.registerManagerForm.controls['lastName'].value;
    this.user.emailAddress = this.registerManagerForm.controls['emailAddress'].value;
    this.user.password = this.registerManagerForm.controls['password'].value;

    this.httpClientService.createManager(this.user)
        .subscribe( data => {
          alert("Manager created successfully.");
          this.router.navigate(['/vinylView']);
        }); 
  };

   get f() { return this.registerManagerForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.registerManagerForm.invalid) {
           return;
       }

       this.createManager();
       
       
   }

}
