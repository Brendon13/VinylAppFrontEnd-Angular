import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
      return this.httpClient.post<any>('http://localhost:8080/VinylStore/api/users/login',{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       ),
       catchError(this.handleError)
      );
    }

  verifyUser(){
    return this.httpClient.get<any>('http://localhost:8080/VinylStore/api/users/role').pipe(
      map(
        userData => {
          let userRole = userData.role;
          sessionStorage.setItem('role', userRole);
          return userData;
        }
      )
    )
  }

  handleError(error: HttpErrorResponse)
  {
    alert(error.error.message);
    return throwError(error);
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  isUserManager(){
    if(this.isUserLoggedIn()){
      let userRole = sessionStorage.getItem('role');
      return (userRole.match('1'));
    }
  }

  isUserCustomer(){
    if(this.isUserLoggedIn()){
      let userRole = sessionStorage.getItem('role');
      return (userRole.match('0'));
    }
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}