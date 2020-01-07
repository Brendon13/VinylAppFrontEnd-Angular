import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  invalidManager = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.checkManager();
  }

  checkManager(){
    (this.loginservice.verifyUser().subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidManager = false;
      },
      error => {
        this.invalidManager = true;
      }
    ));
  }

}
