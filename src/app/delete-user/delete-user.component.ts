import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteForm: FormGroup;
  submitted = false;
  data:any;
  invalidDeletion = false;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
    ID: ['', [Validators.required]]});
    
  }

  deleteUser(): void {
    this.httpClientService.deleteUser(this.deleteForm.controls['ID'].value).subscribe( data => {
      alert("User deleted successfully.");
      this.router.navigate(['/logout']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  get f() { return this.deleteForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.deleteForm.invalid) {
           return;
       }

       this.deleteUser();
       
   }
}
