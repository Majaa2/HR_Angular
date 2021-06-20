import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department.model';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-departments-view',
  templateUrl: './departments-view.component.html',
  styleUrls: ['./departments-view.component.css']
})
export class DepartmentsViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Max', 'Profession', 'Number', 'Actions'];
  dataSource!: MatTableDataSource<Department>;
  departments!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private departmentsService: DepartmentService,
) {}

ngOnInit(): void {
  this.departmentsService.referesh();
  this.departments = this.departmentsService.departmentsSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.departmentsService.delete(id).subscribe(
                res=>{
                  this.departmentsService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
