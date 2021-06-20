import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee.model';
import { EmployeeAccount } from 'src/app/_models/employeeRole.model';
import { Role } from 'src/app/_models/role.model';
import { EmployeeService } from 'src/app/_services/employee.service';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-administration-create-edit',
  templateUrl: './administration-create-edit.component.html',
  styleUrls: ['./administration-create-edit.component.css']
})
export class AdministrationCreateEditComponent implements OnInit {
  availableEmployees!: Array<Employee>;
  roles!: Array<Role>;
  inEdit: Boolean = false;
  empAccForm!: FormGroup;
  
  constructor(private router: Router,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private roleService:  RoleService
    ) {
      this.employeeService.getAll().subscribe(res => {
        this.availableEmployees = res.Result.filter(e => !e.UserName || e.UserName == "");
      })
      this.roleService.getAll().subscribe(res => {
        this.roles = res.Result.filter(x => x.Active && !x.Deleted) as Array<Role>;

      })
      this.empAccForm = this.fb.group({
        EmployeeId: ['', Validators.required],
        Roles: [new FormControl([]), Validators.required],
        Active: [false],
        UserName: ['', Validators.required],
      })
      
  }
  get getEmpAccForm() {
    return this.empAccForm.controls;
  }

  ngOnInit(): void {
 

   
  }
  onSubmit() {
    let t = new EmployeeAccount();
    var e = new Employee();
    var emp = this.availableEmployees.find(e => e['Id'] == parseInt(this.empAccForm.get('EmployeeId')?.value));
    console.log(this.availableEmployees, parseInt(this.empAccForm.get('EmployeeId')?.value))
    e.active = this.empAccForm.get('Active')?.value;
    e.address = emp['Address'];
    e.birthDate = emp['BirthDate'];
    e.birthPlace = emp['BirthPlace'];
    e.birthTownship = emp['BirthTownship'];
    e.bloodType = emp['BloodType'];
    e.categoryDl = emp['CategoryDl'];
    e.citizenship = emp['Citizenship'];
    e.cityId = emp['CityId'];
    e.code = emp['Code'];
    e.county = emp['County'];
    e.created = emp['Created'];
    e.createdBy = emp['CreatedBy'];
    e.deleted = emp['Deleted'];
    e.disability = emp['Disability'];
    e.drivingLicence = emp['DrivingLicence'];
    e.eduInstitution = emp['EduInstitution'];
    e.educationCategoryId = emp['EducationCategoryId'];
    e.email = emp['Email'];
    e.entityOfResidence = emp['EntityOfResidence'];
    e.experienceCount = emp['ExperienceCount'];
    e.fatherName = emp['FatherName'];
    e.firstName = emp['FirstName'];
    e.id = emp['Id'];
    e.idCard = emp['IdCard'];
    e.jmbg = emp['Jmbg'];
    e.lastName = emp['LastName'];
    e.maidenName = emp['MaidenName'];
    e.marriageStatus = emp['MarriageStatus'];
    e.mobilePhone = emp['MobilePhone'];
    e.modfied = new Date();
    e.modifiedBy = "";
    e.motherLastName = emp['MotherLastName'];
    e.motherName = emp['MotherName'];
    e.municipality = emp['Municipality'];
    e.nationality = emp['Nationality'];
    e.password = emp['Password'];
    e.phoneNumber = emp['PhoneNumber'];
    e.place = emp['Place'];
    e.points = emp['Points'];
    e.profession = emp['Profession'];
    e.qualifications = emp['Qualifications'];
    e.sex = emp['Sex'];
    e.specialKnowledgeAndSkills = emp['SpecialKnowledgeAndSkills'];
    e.userName = this.empAccForm.get('UserName')?.value;
    e.workId = emp['WorkId'];

    t.employee = e;
    t.roleList = this.empAccForm.get('Roles')?.value;


    if (!this.inEdit) {
      this.employeeService.createAccount(t).subscribe((res) => {
        if (res) {
          this.employeeService.referesh();
          this.router.navigate(['/Administration']);
        }
      });
    } 
    // else {
    //   this.ets.edit(t, this.id).subscribe((res) => {
    //     if (res) {
    //       this.ets.referesh();
    //       this.router.navigate(['/ExpenseTypes']);
    //     }
    //   });
    // }
  }
}
