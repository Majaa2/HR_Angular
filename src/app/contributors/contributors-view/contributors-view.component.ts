import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contributor } from 'src/app/_models/contributor.model';
import { ContributorService } from 'src/app/_services/contributor.service';

@Component({
  selector: 'app-contributors-view',
  templateUrl: './contributors-view.component.html',
  styleUrls: ['./contributors-view.component.css']
})
export class ContributorsViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'IdNumber', 'Address', 'PhoneNumber', 'Fax', 'Actions'];
  dataSource!: MatTableDataSource<Contributor>;
  contributors!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private contributorService: ContributorService,
) {}

ngOnInit(): void {
  this.contributorService.referesh();
  this.contributors = this.contributorService.contributorsSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.contributorService.delete(id).subscribe(
                res=>{
                  this.contributorService.referesh()
                }
              )
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
