import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/_models/competition.model';
import { Work } from 'src/app/_models/work.model';
import { CompetitionService } from 'src/app/_services/competition.service';
import { WorkService } from 'src/app/_services/work.service';

@Component({
  selector: 'app-competitions-create-edit',
  templateUrl: './competitions-create-edit.component.html',
  styleUrls: ['./competitions-create-edit.component.css']
})
export class CompetitionsCreateEditComponent implements OnInit {
  competitionForm!: FormGroup;
  inEdit: Boolean = false;
  works: Array<Work>;
  id: number = 0;
  
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ws: WorkService,
    private cs: CompetitionService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.inEdit = true;
        this.id = params.id;
        this.cs.getById(params.id).subscribe((res) => {
          console.log(res)
          this.competitionForm.setValue({
            Code: res.Result.Code,
            Title: res.Result.Title,
            MaxMember: res.Result.MaxMember,
            Text: res.Result.Text,
            StartDate: res.Result.StartDate,
            EndDate: res.Result.EndDate,
            WorkId: res.Result.WorkId,
          });
        });
      }
    });
    this.ws.getAll().subscribe(res=>{
      this.works = res.Result as Array<Work>
    })
   }

  ngOnInit(): void {
    this.competitionForm = this.fb.group({
      Code: ['', Validators.required],
      Title: ['', Validators.required],
      MaxMember: [''],      
      Text: [''],
      StartDate: ['', Validators.required],   
      EndDate: ['', Validators.required],
      WorkId: [''],
    })
  }
  get getCompetitionForm() {
    return this.competitionForm.controls;
  }
  onSubmit() {
    let t = new Competition();

    t.code = this.competitionForm.get('Code')?.value;
    t.title = this.competitionForm.get('Title')?.value;
    t.maxMember = this.competitionForm.get('MaxMember')?.value;
    t.text = this.competitionForm.get('Text')?.value;
    t.startDate = this.competitionForm.get('StartDate')?.value;
    t.endDate = this.competitionForm.get('EndDate')?.value;
    t.workId = this.competitionForm.get('WorkId')?.value;
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
          this.router.navigate(['/Competitions']);
        }
      });
    } else {
      t.modfied = new Date();
      t.modifiedBy = ""
      t.id = this.id
      this.cs.edit(t, this.id).subscribe((res) => {
        if (res) {
          this.cs.referesh();
          this.router.navigate(['/Competitions']);
        }
      });
    }
  }

}
