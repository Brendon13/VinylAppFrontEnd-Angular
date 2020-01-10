import { Component, OnInit } from '@angular/core';
import { ItemWithOutId, HttpClientService } from '../service/httpclient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vinyl-crud',
  templateUrl: './vinyl-crud.component.html',
  styleUrls: ['./vinyl-crud.component.css']
})
export class VinylCrudComponent implements OnInit {
  addVinylForm: FormGroup;
  deleteVinylForm: FormGroup;
  updateVinylForm: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  vinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  invalidDeletion = false;
  data: any;

  errorMessage: String;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addVinylForm = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]]});

      this.deleteVinylForm = this.formBuilder.group({
        ItemId: ['', [Validators.required]]});

        this.updateVinylForm = this.formBuilder.group({
          ItemId: ['', [Validators.required]],
          description: ['', Validators.required],
          name: ['', Validators.required],
          price: ['', [Validators.required]],
          quantity: ['', [Validators.required]]});
  }

  createVinyl(): void {
    this.vinyl.description = this.addVinylForm.controls['description'].value;
    this.vinyl.name = this.addVinylForm.controls['name'].value;
    this.vinyl.price = this.addVinylForm.controls['price'].value;
    this.vinyl.quantity = this.addVinylForm.controls['quantity'].value;

    this.httpClientService.addVinyl(this.vinyl)
        .subscribe( data => {
          alert("Vinyl created successfully.");
          this.router.navigate(['/getVinyls']);
        }); 
  };

   get f() { return this.addVinylForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.addVinylForm.invalid) {
           return;
       }

       this.createVinyl();
   }

   deleteItem(): void {
    this.httpClientService.deleteVinyl(this.deleteVinylForm.controls['ItemId'].value).subscribe( data => {
      alert("Vinyl deleted successfully.");
      this.router.navigate(['/getVinyls']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  get f2() { return this.deleteVinylForm.controls; }

  onSubmit2() {
      this.submitted2 = true;
      if (this.deleteVinylForm.invalid) {
          return;
      }

      this.deleteItem();
       
   }

   updateVinyl(): void {
    this.vinyl.description = this.updateVinylForm.controls['description'].value;
    this.vinyl.name = this.updateVinylForm.controls['name'].value;
    this.vinyl.price = this.updateVinylForm.controls['price'].value;
    this.vinyl.quantity = this.updateVinylForm.controls['quantity'].value;

    this.httpClientService.updateVinyl(this.updateVinylForm.controls['ItemId'].value, this.vinyl).subscribe( data => {
      alert("Vinyl updated successfully.");
      this.router.navigate(['/getVinyls']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  get f3() { return this.updateVinylForm.controls; }

  onSubmit3() {
      this.submitted3 = true;
      if (this.updateVinylForm.invalid) {
          return;
      }

      this.updateVinyl();
       
   }

}
