import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Currency } from 'src/app/_models/currency.model';
import { CurrencyService } from 'src/app/_services/currency.service';

@Component({
  selector: 'app-seminars-create-edit',
  templateUrl: './seminars-create-edit.component.html',
  styleUrls: ['./seminars-create-edit.component.scss']
})
export class SeminarsCreateEditComponent implements OnInit {
  seminarForm!: FormGroup;
  expenses = [];
  inEdit: Boolean = false;
  expenseName: string ;
  expenseAmount: string;
  currencies: Array<Currency>;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cs: CurrencyService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
      }
    });
    this.cs.getAll().subscribe(res=>{
      this.currencies = res.Result as Array<Currency>
    })
   }

  ngOnInit(): void {
    this.seminarForm = this.fb.group({
        Code:[''],
        Name:[''],
        Type:[''],
        StartDate:[''],
        EndDate:[''],
        Price:[''],
        CurrencyId:[''],
        Address:[''],
        Description:[''],
    })
  }
  
  SaveExpense(){
    var expense = {
      id: !this.expenses?.length ? 0 : this.expenses?.length,
      expenseName: this.expenseName,
      expenseAmount: this.expenseAmount,
    } 
    this.expenses.push(expense)
    this.expenseName = ""
    this.expenseAmount = ""
  }
}
