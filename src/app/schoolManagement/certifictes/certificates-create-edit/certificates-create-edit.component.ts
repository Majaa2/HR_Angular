import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee.model';
import { Vendor } from 'src/app/_models/vendor.model';
import { EmployeeService } from 'src/app/_services/employee.service';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-certificates-create-edit',
  templateUrl: './certificates-create-edit.component.html',
  styleUrls: ['./certificates-create-edit.component.css']
})
export class CertificatesCreateEditComponent implements OnInit {
  certificateForm!: FormGroup;
  inEdit: Boolean = false;
  vendors: Array<Vendor>;
  employees: Array<Employee>

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vs: VendorService,
    private es: EmployeeService,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
      }
    });
    this.vs.getAll().subscribe(res=>{
      this.vendors = res.Result as Array<Vendor>
    })
    this.es.getAll().subscribe(res=>{
      this.employees = res.Result as Array<Employee>
    })
  }

  ngOnInit(): void {
    this.certificateForm = this.fb.group({
      Code:[''],
      Name:[''],
      VendorId:[''],
      Type:[''],
      Category:[''],
      EmployeeId:[''],
      EmployeeCertificateDeadlinDate:[''],
  })
  }

}
