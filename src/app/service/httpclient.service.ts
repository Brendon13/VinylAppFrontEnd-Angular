import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public firstName:string,
    public lastName:string,
    public emailAddress:string,
    public password:string,
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  
  
  showUserCreatedPage()
  {
    console.log("test call");
    return this.httpClient.get<String>('http://localhost:8080/VinylStore/api/userCreated');
  }

  public createUser(user)
  {
    return this.httpClient.post<User>('http://localhost:8080/VinylStore/api/users' ,user);
  }
}
