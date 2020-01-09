import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit, OnDestroy {
  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();

  data:any;
  totalPrice: any = 0;
  numberOfItems: any = 0;
  totalQuantity: any = 0;

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

  deleteItem(): void {
    this.httpClientService.deleteItem(this.deleteForm.controls['ItemId'].value).subscribe( data => {
      alert("Item deleted successfully.");
      this.router.navigate(['/getVinyls']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  get f() { return this.deleteForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.deleteForm.invalid) {
          return;
      }

      this.deleteItem();
       
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
