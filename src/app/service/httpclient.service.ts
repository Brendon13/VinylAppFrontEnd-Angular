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
    return this.httpClient.post<Item>('http://localhost:8080/VinylStore/api/vinylsAdd', vinyl).pipe(catchError(this.handleErrorAddVinyl));
  }

  public deleteVinyl(itemId){
    return this.httpClient.delete('http://localhost:8080/VinylStore/api/vinyls/' + itemId).pipe(catchError(this.handleError));
  }

  public updateVinyl(itemId, vinyl){
    return this.httpClient.put('http://localhost:8080/VinylStore/api/vinyls/update/' + itemId, vinyl).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse)
  {
    let splitted = JSON.stringify(error.error).split(":");
    let splitted2 = splitted[splitted.length-1];
    let errorMessage = splitted2.substr(1, splitted2.length-3);

    alert(errorMessage);
    return throwError(error);
  }

  handleErrorAddVinyl(error: HttpErrorResponse)
  {
    let splitted = JSON.stringify(error.error).split(":");
    let splitted2 = splitted[splitted.length-1];
    let errorMessage = splitted2.substr(1, splitted2.length-3);

    if(error.error.error == 'Bad Request'){
       alert('Quantity must be integer value!');
    }
    else 
    alert(errorMessage);
    return throwError(error);
  }
}
