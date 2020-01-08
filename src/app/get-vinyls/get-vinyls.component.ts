import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService, Item, CartItemDTO } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-get-vinyls',
  templateUrl: './get-vinyls.component.html',
  styleUrls: ['./get-vinyls.component.css']
})
export class GetVinylsComponent implements OnInit {

  data:Item[];

  message = '';
  dtOptions: DataTables.Settings = {};


  addToCartForm: FormGroup;
  submitted = false;
  invalidSelection = false;
  cartItemDTO: CartItemDTO = new CartItemDTO(0);

  @ViewChild('itemTable', {static: true}) itemTable: ElementRef;
  dataTable: any;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
 
    this.addToCartForm = this.formBuilder.group({
      ID: ['', [Validators.required]],
      quantity: ['', [Validators.required]],});

    this.httpClientService.getVinyls().subscribe( response => this.data=response);
    this.dataTable = $(this.itemTable.nativeElement);
    this.dataTable.DataTable();

  }


  addToCart(): void {
    this.cartItemDTO.quantity = this.addToCartForm.controls['quantity'].value;
    this.httpClientService.addToCart(this.addToCartForm.controls['ID'].value, this.cartItemDTO).subscribe( data => {
      alert("Item added to cart successfully.");
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
