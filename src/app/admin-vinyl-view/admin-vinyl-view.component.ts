import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vinyl-view',
  templateUrl: './admin-vinyl-view.component.html',
  styleUrls: ['./admin-vinyl-view.component.css']
})
export class VinylViewComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();
  
  data:any;

  updateVinylForm: FormGroup;
  invalidDeletion = false;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.updateVinylForm = this.formBuilder.group({
      ItemId: ['', [Validators.required]]});

    this.httpClientService.getVinyls().subscribe( response => {
      this.data=response
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onSubmit(ItemId) {
    this.router.navigate(['/vinylUpdate'], { state: { ItemId: ItemId } });
  }
}
