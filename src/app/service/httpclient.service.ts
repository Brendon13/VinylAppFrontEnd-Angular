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

export class ItemWithOutId{
  constructor(
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

export class StatusDTO{
  constructor(
    public id:number
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

  public deleteUser(){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/delete').pipe(catchError(this.handleError));
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

  public deleteItem(itemId){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/users/cart/' + itemId).pipe(catchError(this.handleError));
  }

  public placeOrder(){
    return this.httpClient.put('http://localhost:8080/VinylStore/api/orders', null).pipe(catchError(this.handleError));
  }

  public getUserOrder(){
    return this.httpClient.get('http://localhost:8080/VinylStore/api/users/orders').pipe(catchError(this.handleError));
  }

  public addVinyl(vinyl){
    return this.httpClient.post<Item>('http://localhost:8080/VinylStore/api/vinylsAdd', vinyl).pipe(catchError(this.handleError));
  }

  public deleteVinyl(itemId){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/vinyls/' + itemId).pipe(catchError(this.handleError));
  }

  public updateVinyl(itemId, vinyl){
    return this.httpClient.put('http://localhost:8080/VinylStore/api/vinyls/update/' + itemId, vinyl).pipe(catchError(this.handleError));
  }

  public getCustomers(){
    return this.httpClient.get('http://localhost:8080/VinylStore/api/customers').pipe(catchError(this.handleError));
  }

  public updateOrder(orderId, status){
    return this.httpClient.put('http://localhost:8080/VinylStore/api/orders/' + orderId, status).pipe(catchError(this.handleError));
  }

  public getOrder(userId){
    return this.httpClient.get('http://localhost:8080/VinylStore/api/users/' + userId + '/orders').pipe(catchError(this.handleError));
  }

  public getVinyl(vinylId){
    return this.httpClient.get('http://localhost:8080/VinylStore/api/vinyls/' + vinylId).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse)
  {
    alert(error.error.message);
    return throwError(error);
  }

}
