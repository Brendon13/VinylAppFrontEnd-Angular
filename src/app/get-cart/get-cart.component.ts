import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit, OnDestroy {
  
  @ViewChild(DataTableDirective, {static: false}) dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  show: boolean = false;

  data:any;
  totalPrice = 0;
  numberOfItems = 0;
  totalQuantity = 0;

  deleteForm: FormGroup;
  submitted = false;
  invalidDeletion = false;
  invalidOrder = false;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      ItemId: ['', [Validators.required]]});

    this.httpClientService.getCart().subscribe( response =>{ 
      this.data=response;
      for(var i=0; i< this.data.length; i++)
      {
      this.numberOfItems++;
      this.totalQuantity += this.data[i].Quantity;
      this.totalPrice += this.data[i].Price * this.data[i].Quantity;
      }
      this.showTable();
      this.dtTrigger.next();
    });

    this.dtOptions = {
      "paging":   false,
      "ordering": false,
      "info":     false,
      "searching": false
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  showTable() {
    this.show=true;
    setTimeout(() => {
      this.dtTrigger.next();
    });
}

  deleteItem(ItemId): void {
    this.httpClientService.deleteItem(ItemId).subscribe( data => {
      alert("Item deleted successfully.");
      this.router.navigate(['/getVinyls']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  onSubmit(ItemId) {
      this.deleteItem(ItemId);
   }

   placeOrder(): void {
    this.httpClientService.placeOrder().subscribe( data => {
      alert("Order placed successfully.");
      this.router.navigate(['/getVinyls']);
      this.invalidOrder = false;
    },
    error => {
      this.invalidOrder = true;
    }
  );
  }

  onSubmit1() {
      this.placeOrder();
   }

}
