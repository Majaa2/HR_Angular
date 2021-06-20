import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseType } from 'src/app/_models/expenseType.model';
import { ExpenseTypeService } from 'src/app/_services/expense-type.service';

@Component({
  selector: 'app-expense-types-create-edit',
  templateUrl: './expense-types-create-edit.component.html',
  styleUrls: ['./expense-types-create-edit.component.css']
})
export class ExpenseTypesCreateEditComponent implements OnInit {
  expenseTypeForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ets: ExpenseTypeService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.ets.getById(params.id).subscribe((res) => {
          this.expenseTypeForm.setValue({
            Name: res.Result.Name,
            EntryDate: res.Result.EntryDate,
          });
        });
      }
    });
  }
  get getExpenseTypeForm() {
    return this.expenseTypeForm.controls;
  }

  ngOnInit(): void {
    this.expenseTypeForm = this.fb.group({
      Name: ['', Validators.required],
      EntryDate: [''],
    })
  }

  onSubmit() {
    let t = new ExpenseType();

    t.name = this.expenseTypeForm.get('Name')?.value;
    t.entryDate = this.expenseTypeForm.get('EntryDate')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.ets.create(t).subscribe((res) => {
        if (res) {
          this.ets.referesh();
          this.router.navigate(['/ExpenseTypes']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.ets.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.ets.referesh();
          this.router.navigate(['/ExpenseTypes']);
        }
      });
    }
  }

}
