import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/_models/employee.model';
import { Role } from 'src/app/_models/role.model';
import { AdministrationService } from 'src/app/_services/administration.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-administration-view',
  templateUrl: './administration-view.component.html',
  styleUrls: ['./administration-view.component.css']
})
export class AdministrationViewComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Roles', 'Start', 'Active', 'Username', 'Actions'];
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
  this.employees = this.employeeService.employeeAccountsSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) 
}


  Delete(id: number){
    // this.rolesService.delete(id).subscribe(
    //             res=>{
    //               this.rolesService.referesh()
    //             }
    //           )
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
