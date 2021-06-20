import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { EmployeeLanguage } from "src/app/_models/employeeLanguage.model";

@Component({
  selector: "app-skills-and-knowledge",
  templateUrl: "./skills-and-knowledge.component.html",
  styleUrls: ['./skills-and-knowledge.component.scss']
})
export class SkillsAndKnowledgeComponent implements OnInit {
  @Input() formGroupName: string;
  @Input() languages: [];
  @Output() submit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<number>();
  form: FormGroup;
  languageName: string ;
  languageLevel: string ;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  SaveLanguage(){
    var language = {
      id: !this.languages?.length ? 0 : this.languages?.length,
      languageName: this.languageName,
      languageLevel: this.languageLevel
    }
    this.submit.emit(language);

    this.languageName = ""
    this.languageLevel = ""
  }

  RemoveLanguage(id: number){
    this.remove.emit(id);
  }
}