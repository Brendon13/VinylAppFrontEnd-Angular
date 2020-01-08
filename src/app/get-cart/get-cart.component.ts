import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  deleteForm: FormGroup;
  submitted = false;
  invalidDeletion = false;

  @ViewChild('cartTable', {static: true}) itemTable: ElementRef;
  dataTable: any;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      UserId: ['', [Validators.required]],
      ItemId: ['', [Validators.required]]});

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

  deleteItem(): void {
    this.httpClientService.deleteItem(this.deleteForm.controls['UserId'].value, this.deleteForm.controls['ItemId'].value).subscribe( data => {
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

}
