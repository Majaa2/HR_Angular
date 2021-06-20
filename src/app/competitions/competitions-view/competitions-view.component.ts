import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from 'src/app/_models/competition.model';
import { CompetitionService } from 'src/app/_services/competition.service';

@Component({
  selector: 'app-competitions-view',
  templateUrl: './competitions-view.component.html',
  styleUrls: ['./competitions-view.component.css']
})
export class CompetitionsViewComponent implements OnInit {
  displayedColumns: string[] = ['Code', 'Title', 'StartDate', 'EndDate', 'Actions'];
  dataSource!: MatTableDataSource<Competition>;
  competitions!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private competitionService: CompetitionService,
) {}

ngOnInit(): void {
  this.competitionService.referesh();
  this.competitions = this.competitionService.competitionsSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.competitionService.delete(id).subscribe(
                res=>{
                  this.competitionService.referesh()
                }
              )
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
