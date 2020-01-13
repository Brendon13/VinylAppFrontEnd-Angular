import { Component, OnInit } from '@angular/core';
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
  data: any;

  errorMessage: String;

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
        this.updateVinylForm = this.formBuilder.group({
          ItemId: ['', [Validators.required]],
          description: ['', Validators.required],
          name: ['', Validators.required],
          price: ['', [Validators.required]],
          quantity: ['', [Validators.required]]});
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

  get f() { return this.updateVinylForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.updateVinylForm.invalid) {
          return;
      }

      this.updateVinyl();
    }
   
}
