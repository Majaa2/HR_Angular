import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Certificate } from 'src/app/_models/certificate.model';
import { CertificateService } from 'src/app/_services/certificate.service';


@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {

  displayedColumns: string[] = ['Code', 'Name', 'Employee', 'Vendor', 'Type', 'Category', 'PriceTotal', 'Actions'];
  dataSource!: MatTableDataSource<Certificate>;
  certificates!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    private certificateService: CertificateService,
  ) { }

  ngOnInit(): void {
    this.certificateService.referesh();
    this.certificates = this.certificateService.certificatesSub.subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  Delete(id: number) {
    this.certificateService.delete(id).subscribe(
      res => {
        this.certificateService.referesh()
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
