import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientService, Item } from '../service/httpclient.service';
declare var $;

@Component({
  selector: 'app-get-vinyls',
  templateUrl: './get-vinyls.component.html',
  styleUrls: ['./get-vinyls.component.css']
})
export class GetVinylsComponent implements OnInit {
  data:Item[];
  
  @ViewChild('itemTable', {static: true}) itemTable: ElementRef;
  dataTable: any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
 
    this.httpClientService.getVinyls().subscribe( response => this.data=response);

    this.dataTable = $(this.itemTable.nativeElement);
    this.dataTable.DataTable();
  }

}
