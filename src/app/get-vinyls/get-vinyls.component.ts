import { Component, OnInit } from '@angular/core';
import { HttpClientService, Item } from '../service/httpclient.service';

@Component({
  selector: 'app-get-vinyls',
  templateUrl: './get-vinyls.component.html',
  styleUrls: ['./get-vinyls.component.css']
})
export class GetVinylsComponent implements OnInit {
  data:Item[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getVinyls()
    .subscribe( response =>this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response)
{
    this.data=response;
    console.log(this.data);
}


}
