import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyUserRoleService implements OnInit {

  invalidManager = false;
  data:any;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.checkManager();
  }

  checkManager(){
    (this.loginservice.verifyUser().subscribe(
      data => {
        this.data=data;
        if(data.role == true){
          this.router.navigate(['/getCustomers']);
        }
        else{
          this.router.navigate(['/getVinyls']);
        }
        this.invalidManager = false;
      },
      error => {
        this.invalidManager = true;
      }
    ));
  }
}
