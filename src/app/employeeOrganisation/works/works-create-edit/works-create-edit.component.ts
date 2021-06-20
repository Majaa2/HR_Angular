import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Work } from 'src/app/_models/work.model';
import { WorkService } from 'src/app/_services/work.service';

@Component({
  selector: 'app-works-create-edit',
  templateUrl: './works-create-edit.component.html',
  styleUrls: ['./works-create-edit.component.css']
})
export class WorksCreateEditComponent implements OnInit {
  workForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ws: WorkService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.ws.getById(params.id).subscribe((res) => {
          this.workForm.setValue({
            Name: res.Result.Name,
            YearsNeeded: res.Result.YearsNeeded,
            Quotient: res.Result.Quotientint,
            Qualifications: res.Result.Qualifications,
            Conditions: res.Result.Conditions,
          });
        });
      }
    });
   }
   get getWorkForm() {
    return this.workForm.controls;
  }
  ngOnInit(): void {
    this.workForm = this.fb.group({
      Name: [''],
      YearsNeeded: [''],
      Quotient: [''],
      Qualifications: [''],
      Conditions: ['']
    })
  }
  onSubmit() {
    let t = new Work();

    t.name = this.workForm.get('Name')?.value;
    t.yearsNeeded = this.workForm.get('YearsNeeded')?.value;
    t.quotientint = this.workForm.get('Quotient')?.value;
    t.qualifications = this.workForm.get('Qualifications')?.value;
    t.conditions = this.workForm.get('Conditions')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.ws.create(t).subscribe((res) => {
        if (res) {
          this.ws.referesh();
          this.router.navigate(['/Works']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.ws.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.ws.referesh();
          this.router.navigate(['/Works']);
        }
      });
    }
  }
}
