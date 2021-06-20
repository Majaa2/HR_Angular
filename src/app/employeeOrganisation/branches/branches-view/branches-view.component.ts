import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Branch } from 'src/app/_models/branch.model';
import { BranchService } from 'src/app/_services/branch.service';

@Component({
  selector: 'app-branches-view',
  templateUrl: './branches-view.component.html',
  styleUrls: ['./branches-view.component.css']
})
export class BranchesViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Address', 'City', 'Number', 'Actions'];
  dataSource!: MatTableDataSource<Branch>;
  branches!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private branchesService: BranchService,
) {}

ngOnInit(): void {
  this.branchesService.referesh();
  this.branches = this.branchesService.branchesSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.branchesService.delete(id).subscribe(
                res=>{
                  this.branchesService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}
