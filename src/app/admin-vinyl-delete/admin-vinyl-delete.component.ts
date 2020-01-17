import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vinyl-delete',
  templateUrl: './admin-vinyl-delete.component.html',
  styleUrls: ['./admin-vinyl-delete.component.css']
})
export class VinylDeleteComponent implements OnInit, OnDestroy {
  data:any;
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<unknown> = new Subject();

  deleteVinylForm: FormGroup;
  invalidDeletion = false;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
 
    this.deleteVinylForm = this.formBuilder.group({
      ItemId: ['', [Validators.required]]});

    this.httpClientService.getVinyls().subscribe( response => {
      this.data=response;
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  deleteItem(ItemId): void {
    this.httpClientService.deleteVinyl(ItemId).subscribe( data => {
      alert("Vinyl deleted successfully.");
      this.router.navigate(['/vinylView']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

   onSubmit(ItemId) {
     this.deleteItem(ItemId);
   }

}
