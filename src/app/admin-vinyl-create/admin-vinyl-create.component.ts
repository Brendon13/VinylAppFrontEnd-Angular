import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemWithOutId, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vinyl-create',
  templateUrl: './admin-vinyl-create.component.html',
  styleUrls: ['./admin-vinyl-create.component.css']
})
export class VinylCreateComponent implements OnInit {

  addVinylForm: FormGroup;
  submitted = false;
  vinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  invalidDeletion = false;

  data: any;

  quantityPattern = "^[0-9]*$";

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addVinylForm = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.pattern(this.quantityPattern)]]});
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

   get formControls() { return this.addVinylForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.addVinylForm.invalid) {
           return;
       }

       this.createVinyl();
   }
}
