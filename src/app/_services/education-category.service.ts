import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EducationCategory } from '../_models/educationCategory.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class EducationCategoryService {
  api = 'http://localhost:62952/api/EducationCategory';
  EducationCategories: any = [];
  EducationCategoriesSub = new Subject<Array<EducationCategory>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.EducationCategories = res?.Result as Array<EducationCategory>;
        this.EducationCategoriesSub.next(this.EducationCategories);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<EducationCategory> {
    let EducationCategory = this.http.get<EducationCategory>(`${this.api}/${id}`)
    return EducationCategory;
  }

  create(EducationCategory: EducationCategory): Observable<EducationCategory> {
    return this.http.post<EducationCategory>(`${this.api}/create`, EducationCategory)
  }

  edit(EducationCategory: EducationCategory, id: string): Observable<EducationCategory> {
    return this.http.put<EducationCategory>(`${this.api}`, EducationCategory)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }

}
