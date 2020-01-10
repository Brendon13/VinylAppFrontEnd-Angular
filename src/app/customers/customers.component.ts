import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientService } from '../service/httpclient.service';

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

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getCustomers().subscribe( response =>{ 
      this.data=response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
