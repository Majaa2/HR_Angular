import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { City } from "src/app/_models/city.model";
import { CityService } from "src/app/_services/city.service";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html"
})
export class PersonalInfoComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;
  cities: Array<City>;

  constructor(private rootFormGroup: FormGroupDirective, private cs: CityService) {
    this.cs.getAll().subscribe(res=>{
      this.cities = res.Result as Array<City>
    })
  }
  get getPersonalForm() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }
}