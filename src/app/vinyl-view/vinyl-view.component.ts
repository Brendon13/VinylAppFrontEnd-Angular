import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-vinyl-view',
  templateUrl: './vinyl-view.component.html',
  styleUrls: ['./vinyl-view.component.css']
})
export class VinylViewComponent implements OnInit, OnDestroy {
  message = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  data:any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getVinyls().subscribe( response => {
      this.data=response
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
