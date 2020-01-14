import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemWithOutId, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vinyl-update',
  templateUrl: './vinyl-update.component.html',
  styleUrls: ['./vinyl-update.component.css']
})
export class VinylUpdateComponent implements OnInit {
  updateVinylForm: FormGroup;
  submitted = false;
  vinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  invalidDeletion = false;
  retrievedVinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  ItemId: any;
  data:any;

  errorMessage: String;

  quantityPattern = "^[0-9]*$";

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) {
    this.ItemId = this.router.getCurrentNavigation().extras.state.ItemId; }

  ngOnInit() {
    this.httpClientService.getVinyl(this.ItemId).subscribe( response => {
    this.data=response;
    this.retrievedVinyl.description = this.data.Description;
    this.retrievedVinyl.name = this.data.Name;
    this.retrievedVinyl.price = this.data.Price;
    this.retrievedVinyl.quantity = this.data.Quantity;
    });

    this.updateVinylForm = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(this.quantityPattern)]]});
  }

   updateVinyl(): void {
    this.vinyl.description = this.updateVinylForm.controls['description'].value;
    this.vinyl.name = this.updateVinylForm.controls['name'].value;
    this.vinyl.price = this.updateVinylForm.controls['price'].value;
    this.vinyl.quantity = this.updateVinylForm.controls['quantity'].value;

    this.httpClientService.updateVinyl(this.ItemId, this.vinyl).subscribe( data => {
      alert("Vinyl updated successfully.");
      this.router.navigate(['/vinylView']);
      this.invalidDeletion = false;
    },
    error => {
      this.invalidDeletion = true;
    }
  );
  }

  get f() { return this.updateVinylForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.updateVinylForm.controls['description'].value);
      if (this.updateVinylForm.invalid) {
          return;
      }

      this.updateVinyl();
    }
   
}
