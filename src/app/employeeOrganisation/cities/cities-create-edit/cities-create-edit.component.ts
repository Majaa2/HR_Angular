import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/_models/city.model';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-cities-create-edit',
  templateUrl: './cities-create-edit.component.html',
  styleUrls: ['./cities-create-edit.component.css']
})
export class CitiesCreateEditComponent implements OnInit {
  cityForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cs: CityService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.cs.getById(params.id).subscribe((res) => {
          this.cityForm.setValue({
            Name: res.Result.Name,
            PostCode: res.Result.PostCode,
            State: res.Result.State,
          });
        });
      }
    });
   }
   get getCityForm() {
    return this.cityForm.controls;
  }
  ngOnInit(): void {
    this.cityForm = this.fb.group({
      Name: ['', Validators.required],
      PostCode: ['', [Validators.required, Validators.minLength(5)]],
      State: [''],
    })
  }
  onSubmit() {
    let t = new City();

    t.name = this.cityForm.get('Name')?.value;
    t.postCode = parseInt(this.cityForm.get('PostCode')?.value);
    t.state = this.cityForm.get('State')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.cs.create(t).subscribe((res) => {
        if (res) {
          this.cs.referesh();
          this.router.navigate(['/Cities']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.cs.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.cs.referesh();
          this.router.navigate(['/Cities']);
        }
      });
    }
  }
}
