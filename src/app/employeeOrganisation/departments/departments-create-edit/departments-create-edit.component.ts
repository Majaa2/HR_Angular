import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_models/department.model';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-departments-create-edit',
  templateUrl: './departments-create-edit.component.html',
  styleUrls: ['./departments-create-edit.component.css']
})
export class DepartmentsCreateEditComponent implements OnInit {
  departmentForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ds: DepartmentService,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.ds.getById(params.id).subscribe((res) => {
          this.departmentForm.setValue({
            Name: res.Result.Name,
            Max: res.Result.Max,
            Profession: res.Result.Profession
          });
        });
      }
    });
  }
  get getDepartmentForm() {
    return this.departmentForm.controls;
  }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      Name: ['', Validators.required],
      Max: [''],
      Profession: [''],
    })
  
  }

  onSubmit() {
    let t = new Department();

    t.name = this.departmentForm.get('Name')?.value;
    t.max = this.departmentForm.get('Max')?.value;
    t.profession = this.departmentForm.get('Profession')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.ds.create(t).subscribe((res) => {
        if (res) {
          this.ds.referesh();
          this.router.navigate(['/Departments']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.ds.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.ds.referesh();
          this.router.navigate(['/Departments']);
        }
      });
    }
  }
}
