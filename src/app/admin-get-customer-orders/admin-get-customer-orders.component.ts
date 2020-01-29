import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClientService, StatusDTO } from '../service/httpclient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-get-customer-orders',
  templateUrl: './admin-get-customer-orders.component.html',
  styleUrls: ['./admin-get-customer-orders.component.css']
})
export class GetUserOrdersComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  show: boolean = false;

  userId:any;
  data:any;

  updateOrderForm: FormGroup;
  submitted = false;
  invalidUpdate = false;

  statusDTO: StatusDTO = new StatusDTO(0);
  orderId:any;

  constructor(private httpClientService: HttpClientService, private router: Router, private formBuilder: FormBuilder) { 
    this.userId = this.router.getCurrentNavigation().extras.state.userId;
  }

  ngOnInit() {
    this.httpClientService.getOrder(this.userId).subscribe( response => {
      this.data=response;
      this.showTable();
      this.dtTrigger.next();
    });

    this.updateOrderForm = this.formBuilder.group({
      statusId: ['', [Validators.required]]});
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updateOrder(): void {
    this.statusDTO.id = this.updateOrderForm.controls['statusId'].value;
    this.httpClientService.updateOrder(this.orderId, this.statusDTO).subscribe( data => {
      alert("Order updated successfully.");
      this.router.navigate(['/getCustomers']);
      this.invalidUpdate = false;
    },
    error => {
      this.invalidUpdate = true;
    }
  );
  }

  get formControls() { return this.updateOrderForm.controls; }

  onSubmit(orderID) {
      this.submitted = true;
      this.orderId = orderID;
      if (this.updateOrderForm.invalid) {
          return;
      }
      this.updateOrder();     
  }

  showTable() {
    this.show=true;
    setTimeout(() => {
      this.dtTrigger.next();
    });
}
}
