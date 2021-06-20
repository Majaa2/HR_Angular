import { BranchService } from './../../../../_services/branch.service';
import { EducationCategoryService } from 'src/app/_services/education-category.service';
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { EducationCategory } from "src/app/_models/educationCategory.model";
import { Department } from 'src/app/_models/department.model';
import { DepartmentService } from 'src/app/_services/department.service';
import { WorkService } from 'src/app/_services/work.service';
import { Work } from 'src/app/_models/work.model';
import { Branch } from 'src/app/_models/branch.model';
import { Function } from 'src/app/_models/function.model';
import { FunctionService } from 'src/app/_services/function.service';

@Component({
  selector: "app-business-info",
  templateUrl: "./business-info.component.html",
  styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  educationCategories: Array<EducationCategory>;
  departments: Array<Department>;
  works: Array<Work>;
  branches: Array<Branch>
  functions: Array<Function>

  constructor(
    private rootFormGroup: FormGroupDirective, 
    private ecs: EducationCategoryService, 
    private ds: DepartmentService,
    private ws: WorkService,
    private bs: BranchService,
    private fs: FunctionService,
    ) {
    this.ecs.getAll().subscribe(res => {
      this.educationCategories = res.Result as Array<EducationCategory>;
    })
    this.ds.getAll().subscribe(res => {
      this.departments = res.Result as Array<Department>
    })
    this.ws.getAll().subscribe(res => {
      this.works = res.Result as Array<Work>
    })
    this.bs.getAll().subscribe(res => {
      this.branches = res.Result as Array<Branch>
    })
    this.fs.getAll().subscribe(res => {
      this.functions = res.Result as Array<Function>
    })
  }
  
  get getBusinessForm() {
    return this.form.controls;
  }
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}