import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService, Cart, ItemWithOutId } from '../service/httpclient.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {
  // ItemsInCart: ItemWithOutId[];
  // cart: Cart;
  //res: Cart;
   message = '';
   dtOptions: DataTables.Settings = {};

   data:any;
   totalPrice: any = 0;
   numberOfItems: any = 0;

   @ViewChild('cartTable', {static: true}) itemTable: ElementRef;
   dataTable: any;

  constructor(private httpClientService: HttpClientService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClientService.getCart().subscribe( response =>{ 
      //let res = response[0];
      this.data=response;
      for(var i=0; i< this.data.length; i++)
      {
      this.numberOfItems++;
      this.totalPrice += this.data[i].Price;
      }
    });
    
    // this.httpClient.get('http://localhost:8080/VinylStore/api/customer/cart/detail').subscribe(
    //   data => {
    //    this.data = data[0];
    //    this.ItemsInCart = this.data['ItemsInCart'];
    //    console.log(this.ItemsInCart);
    //   }
      
    // );
      // this.res = data[0];  
      // console.log(this.res['ItemsInCart']);
      //  this.ItemsInCart = data[0]['ItemsInCart'];
      //  console.log(this.ItemsInCart);

      //  console.log(this.ItemsInCart[0]['Description']); 
      //  console.log(this.ItemsInCart[0]['Price']);
      //  console.log(this.ItemsInCart[0]['Quantity']);
      //  console.log(this.ItemsInCart[0]['Name']);

      //  console.log(this.ItemsInCart[1]['Description']); 
      //  console.log(this.ItemsInCart[1]['Price']);
      //  console.log(this.ItemsInCart[1]['Quantity']);
      //  console.log(this.ItemsInCart[1]['Name']);
      //  }
      // (err: HttpErrorResponse) => {
      //  console.log (err.message);
      // }
     this.dataTable = $(this.itemTable.nativeElement);
     this.dataTable.DataTable();

  }

}
