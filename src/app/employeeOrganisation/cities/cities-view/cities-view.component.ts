import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/_models/city.model';
import { CityService } from 'src/app/_services/city.service';

@Component({
  selector: 'app-cities-view',
  templateUrl: './cities-view.component.html',
  styleUrls: ['./cities-view.component.css']
})
export class CitiesViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'PostCode', 'State', 'Actions'];
  dataSource!: MatTableDataSource<City>;
  cities!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(
  private router: Router,
  private citiesService: CityService,
) {}

ngOnInit(): void {
  this.citiesService.referesh();
  this.cities = this.citiesService.citiesSub.subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
  ) }

  Delete(id: number){
    this.citiesService.delete(id).subscribe(
                res=>{
                  this.citiesService.referesh()
                }
              )
      
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
