import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusDTO, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnDestroy, OnInit {
  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  data:any;

  updateOrderForm: FormGroup;
  getOrderForm: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  invalidSelection = false;
  statusDTO: StatusDTO = new StatusDTO(0);

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.updateOrderForm = this.formBuilder.group({
      statusId: ['', [Validators.required]],
      orderId: ['', [Validators.required]]});
    
      this.getOrderForm = this.formBuilder.group({
        ID: ['', [Validators.required]]});
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updateOrder(): void {
    this.statusDTO.id = this.updateOrderForm.controls['statusId'].value;
    this.httpClientService.updateOrder(this.updateOrderForm.controls['orderId'].value, this.statusDTO).subscribe( data => {
      alert("Order updated successfully.");
      //this.router.navigate(['/getCart']);
      this.invalidSelection = false;
    },
    error => {
      this.invalidSelection = true;
    }
  );
  }

  get f() { return this.updateOrderForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.updateOrderForm.invalid) {
           return;
       }

       this.updateOrder();
       
   }

   getOrder(): void {
    this.httpClientService.getOrder(this.getOrderForm.controls['ID'].value).subscribe( data => {
      // alert("Order updated successfully.");
      //this.router.navigate(['/getCart']);
      this.data = data;
      this.dtTrigger.next();
      this.invalidSelection = false;
    },
    error => {
      this.invalidSelection = true;
    }
  );
  }

  get f2() { return this.getOrderForm.controls; }

   onSubmit2() {
       this.submitted2 = true;
       //this.dtTrigger.unsubscribe();
       if (this.getOrderForm.invalid) {
           return;
       }

       this.getOrder();
       
   }
}
