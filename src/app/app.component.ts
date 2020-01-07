import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'VinylApp';
  
  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
    if(!this.loginService.isUserLoggedIn())
    this.router.navigate(['/login']);
  }
}
