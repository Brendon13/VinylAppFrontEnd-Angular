import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit, OnDestroy {
  message = '';
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
