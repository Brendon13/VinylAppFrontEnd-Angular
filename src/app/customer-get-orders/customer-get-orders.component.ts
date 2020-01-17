import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-customer-get-orders',
  templateUrl: './customer-get-orders.component.html',
  styleUrls: ['./customer-get-orders.component.css']
})
export class UserOrdersComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, {static: false}) dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  show: boolean = false;

  data:any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
 
    this.httpClientService.getUserOrder().subscribe( response => {
      this.data=response
      this.showTable();
      this.dtTrigger.next();
    });
  }

  showTable() {
    this.show=true;
    setTimeout(() => {
      this.dtTrigger.next();
    });
}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
