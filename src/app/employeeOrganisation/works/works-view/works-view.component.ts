import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Work } from 'src/app/_models/work.model';
import { WorkService } from 'src/app/_services/work.service';

@Component({
  selector: 'app-works-view',
  templateUrl: './works-view.component.html',
  styleUrls: ['./works-view.component.css']
})
export class WorksViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'YearsNeeded', 'Qualifications', 'Number', 'Actions'];
  dataSource!: MatTableDataSource<Work>;
  works!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private worksService: WorkService,
) {}

ngOnInit(): void {
  this.worksService.referesh();
  this.works = this.worksService.worksSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.worksService.delete(id).subscribe(
                res=>{
                  this.worksService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}
