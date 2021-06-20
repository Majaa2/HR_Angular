import { EmployeeService } from './../../_services/employee.service';
import { Employee } from './../../_models/employee.model';
import { Branch } from './../../_models/branch.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personnel-administration-create-edit',
  templateUrl: './personnel-administration-create-edit.component.html',
  styleUrls: ['./personnel-administration-create-edit.component.scss']
})
export class PersonnelAdministrationCreateEditComponent implements OnInit {
  userForm!: FormGroup;
  languages: Array<any>[] = [];
  inEdit: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private es: EmployeeService
    ) { 
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
      }
    });
  }
  get getPersonnelAdministrationForm() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      personal: this.fb.group({
        Code:[''],
        FirstName:['', Validators.required],
        LastName:['', Validators.required],
        MaidenName:[''],
        JMBG:['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
        IdNumber:['', Validators.required],
        Sex:['M', Validators.required],
        DriversLicence:[false, Validators.required],
        DLCategory:[''],
        MarriageStatus:['', Validators.required],
        DateOfBirth:['', Validators.required],
        PlaceOfBirth:['', Validators.required],
        FathersName:['', Validators.required],
        Nacionality:['', Validators.required],
        Citizenship:['',Validators.required],
      }),
      contact: this.fb.group({
        PhoneNumber: ['', Validators.required],
        MobilePhone: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        EntityOfResidence:[''],
        County: [''],
        Municipality: [''],
        CityId: ['', Validators.required],
        Place: ['', Validators.required],
        Address: ['', Validators.required]
      }),
      business: this.fb.group({
        Qualifications:['',  Validators.required],
        Profession:['', Validators.required],
        EduInstitution:['', Validators.required],
        EducationCategoryId:['', Validators.required],
        Department:[''],
        WorkId:['', Validators.required],
        Branch:[''],
        Function:[''],
        Active:['']
      }),
      skillsAndKnowledge:this.fb.group({
        SpecialKnowledgeAndSkills: [''],
        Disability: [''],
        BloodType: ['']
      })
    })
  }

  onSaveLanguage(language: any){
    this.languages.push(language);
    console.log(this.languages, 'hey')
  }
  removeLanguage(id: number) {
    this.languages = this.languages.filter(l => l['id'] != id);
  }
  saveEmployee(){
    var emp = new Employee();
    // Personal data 
    // this.nekaforma.get('propForme')?.value;
    emp.code = this.userForm.get(["personal", 'Code'])?.value;
    emp.firstName = this.userForm.get(["personal", 'FirstName'])?.value;
    emp.lastName = this.userForm.get(["personal", 'LastName'])?.value;
    emp.maidenName = this.userForm.get(["personal", 'MaidenName'])?.value;
    emp.jmbg = this.userForm.get(["personal", 'JMBG'])?.value;
    emp.idCard = this.userForm.get(["personal", 'IdNumber'])?.value;
    emp.sex = this.userForm.get(["personal", 'Sex'])?.value;
    emp.drivingLicence = this.userForm.get(["personal", 'DriversLicence'])?.value;
    emp.categoryDl = this.userForm.get(["personal", 'DLCategory'])?.value;
    emp.marriageStatus = this.userForm.get(["personal", 'MarriageStatus'])?.value;
    emp.birthDate = this.userForm.get(["personal", 'DateOfBirth'])?.value;
    emp.birthPlace = this.userForm.get(["personal", 'PlaceOfBirth'])?.value;
    emp.fatherName = this.userForm.get(["personal", 'FathersName'])?.value;
    emp.nationality = this.userForm.get(["personal", 'Nacionality'])?.value;
    emp.citizenship = this.userForm.get(["personal", 'Citizenship'])?.value;

    //Contact info
    emp.phoneNumber = this.userForm.get(["contact", 'PhoneNumber'])?.value
    emp.mobilePhone = this.userForm.get(["contact", 'MobilePhone'])?.value
    emp.email = this.userForm.get(["contact", 'Email'])?.value
    emp.entityOfResidence = this.userForm.get(["contact", 'EntityOfResidence'])?.value
    emp.county = this.userForm.get(["contact", 'County'])?.value
    emp.municipality = this.userForm.get(["contact", 'Municipality'])?.value
    emp.cityId = this.userForm.get(["contact", 'CityId'])?.value
    emp.place = this.userForm.get(["contact", 'Place'])?.value
    emp.address = this.userForm.get(["contact", 'Address'])?.value

    //business info
    emp.qualifications = this.userForm.get(["business", 'Qualifications'])?.value
    emp.profession = this.userForm.get(["business", 'Profession'])?.value
    emp.eduInstitution = this.userForm.get(["business", 'EduInstitution'])?.value
    emp.educationCategoryId = this.userForm.get(["business", 'EducationCategoryId'])?.value
    // emp.Department = this.userForm.get(["business", 'Department'])?.value
    emp.workId = this.userForm.get(["business", 'WorkId'])?.value
    // emp.Branch = this.userForm.get(["business", 'Branch'])?.value
    // emp.Function = this.userForm.get(["business", 'Function'])?.value
    // emp.Active = this.userForm.get(["business", 'Active'])?.value

    // skills and knowledge
    emp.specialKnowledgeAndSkills = this.userForm.get(["skillsAndKnowledge", 'SpecialKnowledgeAndSkills'])?.value
    emp.disability = this.userForm.get(["skillsAndKnowledge", 'Disability'])?.value
    emp.bloodType = this.userForm.get(["skillsAndKnowledge", 'BloodType'])?.value

    this.es.create(emp).subscribe(res => {
      console.log(res)
      this.es.referesh()
      this.router.navigate(['/Employee'])
    })
  }
}
