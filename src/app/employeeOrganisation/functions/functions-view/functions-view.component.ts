import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FunctionService } from 'src/app/_services/function.service';
import { Function } from '../../../_models/function.model'

@Component({
  selector: 'app-functions-view',
  templateUrl: './functions-view.component.html',
  styleUrls: ['./functions-view.component.css']
})
export class FunctionsViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Level', 'YearsNeeded', 'Number', 'Actions'];
  dataSource!: MatTableDataSource<Function>;
  functions!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private functionsService: FunctionService,
) {}

ngOnInit(): void {
  this.functionsService.referesh();
  this.functions = this.functionsService.functionsSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.functionsService.delete(id).subscribe(
                res=>{
                  this.functionsService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
