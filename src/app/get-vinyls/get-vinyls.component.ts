import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClientService, Item, CartItemDTO } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
declare var $;

@Component({
  selector: 'app-get-vinyls',
  templateUrl: './get-vinyls.component.html',
  styleUrls: ['./get-vinyls.component.css']
})
export class GetVinylsComponent implements OnInit, OnDestroy {

  data:Item[];

  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();

  addToCartForm: FormGroup;
  submitted = false;
  invalidSelection = false;
  cartItemDTO: CartItemDTO = new CartItemDTO(0);

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
 
    this.addToCartForm = this.formBuilder.group({
      ID: ['', [Validators.required]],
      quantity: ['', [Validators.required]],});

    this.httpClientService.getVinyls().subscribe( response => {
      this.data=response
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  addToCart(): void {
    this.cartItemDTO.quantity = this.addToCartForm.controls['quantity'].value;
    this.httpClientService.addToCart(this.addToCartForm.controls['ID'].value, this.cartItemDTO).subscribe( data => {
      alert("Item added/updated to cart successfully.");
      this.router.navigate(['/getCart']);
      this.invalidSelection = false;
    },
    error => {
      this.invalidSelection = true;
    }
  );
  }

  get f() { return this.addToCartForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.addToCartForm.invalid) {
           return;
       }

       this.addToCart();
       
   }

}
