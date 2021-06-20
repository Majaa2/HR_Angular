import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Seminar } from 'src/app/_models/seminar.model';
import { SeminarService } from 'src/app/_services/seminar.service';

@Component({
  selector: 'app-seminars-view',
  templateUrl: './seminars-view.component.html',
  styleUrls: ['./seminars-view.component.css']
})
export class SeminarsViewComponent implements OnInit {
  displayedColumns: string[] = ['Code', 'Name', 'StartDate', 'EndDate', 'Price', 'TotalPrice', 'Actions'];
  dataSource!: MatTableDataSource<Seminar>;
  seminars!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    private seminarService: SeminarService,
  ) { }

  ngOnInit(): void {
    this.seminarService.referesh();
    this.seminars = this.seminarService.seminarsSub.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  Delete(id: number) {
    this.seminarService.delete(id).subscribe(
      res => {
        this.seminarService.referesh()
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
