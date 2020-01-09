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
    return this.httpClient.get<any>('http://localhost:8080/VinylStore/api/verifyManager').pipe(
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
    let splitted = JSON.stringify(error.error).split(":");
    let splitted2 = splitted[splitted.length-1];
    let errorMessage = splitted2.substr(1, splitted2.length-3);
    console.log(errorMessage);
    alert(errorMessage);
    return throwError(error);
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  isUserManager(){
    if(this.isUserLoggedIn()){
      let userRole = sessionStorage.getItem('role');
      return (userRole.match('true'));
    }
  }

  isUserLoggedInAndManager(){
    this.isUserLoggedIn();
    this.isUserManager();
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}