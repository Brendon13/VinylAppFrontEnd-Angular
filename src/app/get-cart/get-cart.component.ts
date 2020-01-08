import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {
  message = '';
  dtOptions: DataTables.Settings = {};

  data:any;
  totalPrice: any = 0;
  numberOfItems: any = 0;

  @ViewChild('cartTable', {static: true}) itemTable: ElementRef;
  dataTable: any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getCart().subscribe( response =>{ 
      this.data=response;
      for(var i=0; i< this.data.length; i++)
      {
      this.numberOfItems++;
      this.totalPrice += this.data[i].Price;
      }
    });

    this.dtOptions = {
      "paging":   false,
      "ordering": false,
      "info":     false,
      "searching": false
    };
    
    this.dataTable = $(this.itemTable.nativeElement);
    this.dataTable.DataTable();

  }

}
