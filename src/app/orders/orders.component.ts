import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusDTO, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  data:any;

  updateOrderForm: FormGroup;
  submitted = false;
  invalidSelection = false;
  statusDTO: StatusDTO = new StatusDTO(0);

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.updateOrderForm = this.formBuilder.group({
      statusId: ['', [Validators.required]],
      orderId: ['', [Validators.required]]});

    // this.httpClientService.getVinyls().subscribe( response => {
    //   this.data=response
    //   this.dtTrigger.next();
    // });
  }

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }


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
}
