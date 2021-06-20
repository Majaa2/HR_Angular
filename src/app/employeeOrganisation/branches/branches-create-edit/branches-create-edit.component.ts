import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/_models/branch.model';
import { City } from 'src/app/_models/city.model';
import { BranchService } from 'src/app/_services/branch.service';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-branches-create-edit',
  templateUrl: './branches-create-edit.component.html',
  styleUrls: ['./branches-create-edit.component.css']
})
export class BranchesCreateEditComponent implements OnInit {
  branchForm!: FormGroup;
  inEdit: Boolean = false;
  cities: Array<City>;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bs: BranchService,
    private cs: CityService
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.bs.getById(params.id).subscribe((res) => {
          this.branchForm.setValue({
            Name: res.Result.Name,
            CityId: res.Result.CityId,
            Address: res.Result.Address,
          });
        });
      }
    });
    this.cs.getAll().subscribe(res=>{
      this.cities = res.Result as Array<City>
    })
  }
  get getBranchForm() {
    return this.branchForm.controls;
  }

  ngOnInit(): void {
    this.branchForm = this.fb.group({
      Name: ['', Validators.required],
      CityId: [''],
      Address: [''],
    })
  }

  onSubmit() {
    let t = new Branch();

    t.name = this.branchForm.get('Name')?.value;
    t.cityId = this.branchForm.get('CityId')?.value;
    t.address = this.branchForm.get('Address')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.bs.create(t).subscribe((res) => {
        if (res) {
          this.bs.referesh();
          this.router.navigate(['/Branches']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.bs.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.bs.referesh();
          this.router.navigate(['/Branches']);
        }
      });
    }
  }
}
