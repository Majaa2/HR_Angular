import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Function } from 'src/app/_models/function.model';
import { FunctionService } from 'src/app/_services/function.service';

@Component({
  selector: 'app-functions-create-edit',
  templateUrl: './functions-create-edit.component.html',
  styleUrls: ['./functions-create-edit.component.css']
})
export class FunctionsCreateEditComponent implements OnInit {
  functionForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fs: FunctionService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.fs.getById(params.id).subscribe((res) => {
          this.functionForm.setValue({
            Name: res.Result.Name,
            YearsNeeded: res.Result.YearsNeeded,
            Complex: res.Result.Complex,
            Level: res.Result.Level,
          });
        });
      }
    });
   }
   get getFunctionForm() {
    return this.functionForm.controls;
  }

  ngOnInit(): void {
    this.functionForm = this.fb.group({
      Name: ['', Validators.required],
      YearsNeeded: [''],
      Complex: [''],
      Level: [''],
    })
  }
  onSubmit() {
    let f = new Function();

    f.name = this.functionForm.get('Name')?.value;
    f.yearsNeeded = this.functionForm.get('YearsNeeded')?.value;
    f.complex = this.functionForm.get('Complex')?.value;
    f.level = this.functionForm.get('Level')?.value;
    f.active = true;
    f.created= new Date();
    f.createdBy = "";
    f.modfied = new Date();
    f.modifiedBy = ""
    f.deleted = false


    if (!this.inEdit) {
      f.created= new Date();
      f.createdBy = "";

      this.fs.create(f).subscribe((res) => {
        if (res) {
          this.fs.referesh();
          this.router.navigate(['/Functions']);
        }
      });
    } else {
      f.modfied = new Date();
      f.modifiedBy = ""
      f.id = this.id
      this.fs.edit(f, this.id).subscribe((res) => {
        if (res) {
          this.fs.referesh();
          this.router.navigate(['/Functions']);
        }
      });
    }
  }
}
