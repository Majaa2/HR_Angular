import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contributor } from 'src/app/_models/contributor.model';
import { ContributorService } from 'src/app/_services/contributor.service';

@Component({
  selector: 'app-contributors-create-edit',
  templateUrl: './contributors-create-edit.component.html',
  styleUrls: ['./contributors-create-edit.component.css']
})
export class ContributorsCreateEditComponent implements OnInit {
  contributorForm!: FormGroup;
  inEdit: Boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cs: ContributorService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.cs.getById(params.id).subscribe((res) => {
          this.contributorForm.setValue({
            Name: res.Result.Name,
            IdNumber: res.Result.IdNumber,
            Address: res.Result.Address,
            PhoneNumber: res.Result.PhoneNumber,
            Fax: res.Result.Fax
          });
        });
      }
    });
  }
  get getContributorsForm() {
    return this.contributorForm.controls;
  }


  ngOnInit(): void {
    this.contributorForm = this.fb.group({
      Name: ['', Validators.required],
      IdNumber: ['', Validators.required],
      Address: [''],
      PhoneNumber: [''],
      Fax: [''],
    })
  }
  onSubmit() {
    let t = new Contributor();

    t.name = this.contributorForm.get('Name')?.value;
    t.idNumber = this.contributorForm.get('IdNumber')?.value;
    t.address = this.contributorForm.get('Address')?.value;
    t.phoneNumber = this.contributorForm.get('PhoneNumber')?.value;
    t.fax = this.contributorForm.get('Fax')?.value;
    t.active = true;
    t.created= new Date();
    t.createdBy = "";
    t.modfied = new Date();
    t.modifiedBy = ""
    t.deleted = false


    if (!this.inEdit) {
      t.created= new Date();
      t.createdBy = "";

      this.cs.create(t).subscribe((res) => {
        if (res) {
          this.cs.referesh();
          this.router.navigate(['/Contributors']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.cs.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.cs.referesh();
          this.router.navigate(['/Contributors']);
        }
      });
    }
  }

}
