import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemWithOutId, HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vinyl-update',
  templateUrl: './admin-vinyl-update.component.html',
  styleUrls: ['./admin-vinyl-update.component.css']
})
export class VinylUpdateComponent implements OnInit {
  updateVinylForm: FormGroup;
  submitted = false;

  vinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  invalidUpdate = false;

  retrievedVinyl: ItemWithOutId = new ItemWithOutId("", "", 0, 0);
  ItemId: any;
  data:any;

  quantityPattern = "^[0-9]*$";

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) {
    this.ItemId = this.router.getCurrentNavigation().extras.state.ItemId; }

  ngOnInit() {
    this.httpClientService.getVinyl(this.ItemId).subscribe( response => {
    this.data=response;
    this.retrievedVinyl.description = this.data.description;
    this.retrievedVinyl.name = this.data.name;
    this.retrievedVinyl.price = this.data.price;
    this.retrievedVinyl.quantity = this.data.quantity;

    this.updateVinylForm = this.formBuilder.group({
      description: [this.retrievedVinyl.description, Validators.required],
      name: [this.retrievedVinyl.name, Validators.required],
      price: [this.retrievedVinyl.price, Validators.required],
      quantity: [this.retrievedVinyl.quantity, [Validators.required, Validators.pattern(this.quantityPattern)]]});

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
      this.invalidUpdate = false;
    },
    error => {
      this.invalidUpdate = true;
    });
  }

  get formControls() { return this.updateVinylForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.updateVinylForm.invalid) {
          return;
      }

      this.updateVinyl();
    }
   
}
