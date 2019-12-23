import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class User{
  constructor(
    public firstName:string,
    public lastName:string,
    public emailAddress:string,
    public password:string,
  ) {}
  
}

export class Item{
  constructor(
    public id:number,
    public name:string,
    public description:string,
    public price:number,
    public quantity:number,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  public createUser(user)
  {
    return this.httpClient.post<User>('http://localhost:8080/VinylStore/api/users' ,user).pipe(catchError(this.handleError));
  }

  public getVinyls()
  {
    return this.httpClient.get<Item[]>('http://localhost:8080/VinylStore/api/vinyls').pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    alert("Email already in use!");
    return throwError(error);
    }
}
