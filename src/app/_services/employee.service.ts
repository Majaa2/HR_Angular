import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../_models/employee.model';
import { EmployeeAccount } from '../_models/employeeRole.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = 'http://localhost:62952/api/Employee';
  employees: any = [];
  employeeAccounts: any = [];
  employeesSub = new Subject<Array<Employee>>();
  employeeAccountsSub = new Subject<Array<Employee>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.employees = res?.Result as Array<Employee>;
        this.employeeAccounts = res?.Result.filter(e => e.UserName) as Array<Employee>;
        this.employeesSub.next(this.employees);
        this.employeeAccountsSub.next(this.employeeAccounts);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Response> {
    let user = this.http.get<Response>(`${this.api}/${id}`)
    return user;
  }

  create(user: Employee): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, user)
  }

  edit(user: Employee, id: string): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, user)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }
  createAccount(empAcc: EmployeeAccount): Observable<Response>{
    return this.http.post<Response>(`${this.api}/account`, empAcc)
  }
}
