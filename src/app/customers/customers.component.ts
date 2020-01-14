import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  data:any;

  viewOrdersForm: FormGroup;
  invalidDeletion = false;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.viewOrdersForm = this.formBuilder.group({
      UserId: ['', [Validators.required]]});

    this.httpClientService.getCustomers().subscribe( response =>{ 
      this.data=response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
  onSubmit(UserId) {
    this.router.navigate(['/getUserOrdersAdmin'], { state: { userId: UserId } });
  }
}
