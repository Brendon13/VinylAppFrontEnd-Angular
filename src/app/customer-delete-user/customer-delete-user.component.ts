import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-delete-user',
  templateUrl: './customer-delete-user.component.html',
  styleUrls: ['./customer-delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  data:any;
  invalidDeletion = false;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  deleteUser(): void {
    this.httpClientService.deleteUser().subscribe( data => {
      alert("User deleted successfully.");
      this.router.navigate(['/logout']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

   onSubmit() {
       this.deleteUser(); 
   }
}
