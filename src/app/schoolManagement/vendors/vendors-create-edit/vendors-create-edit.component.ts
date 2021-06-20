import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/_models/vendor.model';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-vendors-create-edit',
  templateUrl: './vendors-create-edit.component.html',
  styleUrls: ['./vendors-create-edit.component.css']
})
export class VendorsCreateEditComponent implements OnInit {

  vendorForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private vendorService: VendorService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.vendorService.getById(params.id).subscribe((res) => {
          this.vendorForm.setValue({
            Name: res.name,
          });
        });
      }
    });
  }

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      Name: ['', Validators.required],
    });
  }

  get getVendorForm() {
    return this.vendorForm.controls;
  }

  onSubmit() {
    let f = new Vendor();

    f.name = this.vendorForm.get('Name')?.value;
   

    if (!this.inEdit) {
      // this.vendorService.create(f).subscribe((res) => {
      //   let msg = '';
      //   if (res) {
      //     msg = 'Funkcija imenovanja je uspješno dodana';
      //     this.vendorService.referesh();
      //     this.router.navigate(['/NomineeFunction']);
      //   } else {
      //     msg = 'Dogodila se greška. Pokušajte ponovno za par trenutaka!';
      //   }
      //   this.snackbar.openFromComponent(SnackBarComponent, {
      //     data: {
      //       msg: msg,
      //       type: res['succeeded'] ? 'success' : 'error',
      //     },
      //     duration: 5000,
      //   });
      // });
       this.vendorService.create(f).subscribe((res) => {
        if (res) {
             let msg = 'Vendor je uspješno dodan';
             this.vendorService.referesh();
             this.router.navigate(['/Vendors']);
            }
          })
        }
      }
}

