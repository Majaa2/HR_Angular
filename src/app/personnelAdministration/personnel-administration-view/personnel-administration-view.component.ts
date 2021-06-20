import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/_models/employee.model';
import { Router } from "@angular/router";
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-personnel-administration-view',
  templateUrl: './personnel-administration-view.component.html',
  styleUrls: ['./personnel-administration-view.component.css']
})
export class PersonnelAdministrationViewComponent implements OnInit {
    displayedColumns: string[] = ['FullName', 'Activities', 'Branch', 'Department', 'Function','Work', 'Actions'];
    dataSource!: MatTableDataSource<Employee>;
    employees!: Subscription;

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
) {}

  ngOnInit(): void {
    this.employeeService.referesh();
    this.employees = this.employeeService.employeesSub.subscribe(
        data => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    ) }

    Delete(id: number){
      this.employeeService.delete(id).subscribe(
                  res=>{
                    this.employeeService.referesh()
                  }
                )
        // const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        //     data: {
        //       title: '',
        //       message: 'Da li ste sigurni da želite izbrisati odabranu stavku?',
        //       btnCancelText: 'Odustani',
        //       btnOkText: 'Izbriši',
        //     },
        //   });
      
          // dialogRef.afterClosed().subscribe((result) => {
          //   if (result) {
          //       this.employeeService.delete(id).subscribe(
          //           res=>{
          //             this.employeeService.referesh()
          //           }e pa 
          //         )
          //   }
          // });
        
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }


}
