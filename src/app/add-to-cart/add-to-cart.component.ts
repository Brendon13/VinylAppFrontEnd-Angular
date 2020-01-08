import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService, CartItemDTO } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  addToCartForm: FormGroup;
  submitted = false;
  data:any;
  invalidSelection = false;
  cartItemDTO: CartItemDTO = new CartItemDTO(0);

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addToCartForm = this.formBuilder.group({
      ID: ['', [Validators.required]],
      quantity: ['', [Validators.required]],});
  }

  addToCart(): void {
    this.cartItemDTO.quantity = this.addToCartForm.controls['quantity'].value;
    this.httpClientService.addToCart(this.addToCartForm.controls['ID'].value, this.cartItemDTO).subscribe( data => {
      alert("Item added to cart successfully.");
      this.router.navigate(['/getVinyls']);
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