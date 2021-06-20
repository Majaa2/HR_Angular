import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { ExpenseType } from 'src/app/_models/expenseType.model';
import { ExpenseTypeService } from 'src/app/_services/expense-type.service';

@Component({
  selector: 'app-expense-types-view',
  templateUrl: './expense-types-view.component.html',
  styleUrls: ['./expense-types-view.component.css']
})
export class ExpenseTypesViewComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'EntryDate', 'Actions'];
  dataSource!: MatTableDataSource<ExpenseType>;
  expenseTypes!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private expenseTypeService: ExpenseTypeService,
) {}

ngOnInit(): void {
  this.expenseTypeService.referesh();
  this.expenseTypes = this.expenseTypeService.expenseTypesSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.expenseTypeService.delete(id).subscribe(
                res=>{
                  this.expenseTypeService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
