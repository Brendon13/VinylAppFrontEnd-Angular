import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientService, Item, CartItemDTO } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
declare var $;

@Component({
  selector: 'app-customer-get-vinyls',
  templateUrl: './customer-get-vinyls.component.html',
  styleUrls: ['./customer-get-vinyls.component.css']
})
export class GetVinylsComponent implements OnInit, OnDestroy {

  data:Item[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();

  addToCartForm: FormGroup;
  submitted = false;
  invalidSelection = false;
  cartItemDTO: CartItemDTO = new CartItemDTO(0);
  ItemId:any;

  quantityPattern = "^[0-9]*$";

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
 
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.pattern(this.quantityPattern)]]});

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
    this.httpClientService.addToCart(this.ItemId, this.cartItemDTO).subscribe( data => {
      alert("Item added/updated to cart successfully.");
      this.router.navigate(['/getCart']);
      this.invalidSelection = false;
    },
    error => {
      this.invalidSelection = true;
    });
  }

  get formControls() { return this.addToCartForm.controls; }

  onSubmit(ItemId) {
    this.submitted = true;
    this.ItemId = ItemId;

    if (this.addToCartForm.invalid) {
        return;
    }
    this.addToCart();   
   }
}
