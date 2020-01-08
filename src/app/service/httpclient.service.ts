import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
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

export class ItemWithOutId{
  constructor(
    public id:number,
    public name:string,
    public description:string,
    public price:number,
    public quantity:number,
  ){}
}

export class CartItemDTO{
  constructor(
    public quantity:number
  ){}
}

export class Cart{
  constructor(
    public NumberOfItems:number,
    public ItemsInCart:ItemWithOutId[],
    public TotalCost:number 
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  public createUser(user){
    return this.httpClient.post<User>('http://localhost:8080/VinylStore/api/users' , user).pipe(catchError(this.handleError));
  }

  public getVinyls(){
    return this.httpClient.get<Item[]>('http://localhost:8080/VinylStore/api/vinyls').pipe(catchError(this.handleError));
  }

  public deleteUser(userId){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/' + userId).pipe(catchError(this.handleError));
  }

  public createManager(user){
    return this.httpClient.post<User>('http://localhost:8080/VinylStore/api/managers' , user).pipe(catchError(this.handleError));
  }

  public addToCart(itemId, cartItemDTO){
    return this.httpClient.post<CartItemDTO>('http://localhost:8080/VinylStore/api/vinyls/cart/' + itemId, cartItemDTO).pipe(catchError(this.handleError));
  }

  public getCart(){
    return this.httpClient.get('http://localhost:8080/VinylStore/api/customer/cart/detail').pipe(catchError(this.handleError));
  }

  public deleteItem(userId, itemId){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/' + userId + '/cart/' + itemId).pipe(catchError(this.handleError));
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
}
