import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vendor } from 'src/app/_models/vendor.model';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-vendors-view',
  templateUrl: './vendors-view.component.html',
  styleUrls: ['./vendors-view.component.css']
})
export class VendorsViewComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Actions'];
  dataSource!: MatTableDataSource<Vendor>;
  vendors!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    private vendorService: VendorService,
  ) { }

  ngOnInit(): void {
    this.vendorService.referesh();
    this.vendors = this.vendorService.vendorsSub.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  Delete(id: number) {
    this.vendorService.delete(id).subscribe(
      res => {
        this.vendorService.referesh()
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
