import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Department } from '../_models/department.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  api = 'http://localhost:62952/api/Department';
  departments: any = [];
  departmentsSub = new Subject<Array<Department>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.departments = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Department>;
        this.departmentsSub.next(this.departments);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Department>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let department = this.http.get<Response>(`${this.api}/${id}`)
    return department;
  }

  create(department: Department): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, department)
  }

  edit(department: Department, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, department)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }

}
