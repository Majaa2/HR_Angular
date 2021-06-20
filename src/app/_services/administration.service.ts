import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Response } from '../_models/HRResponse.model';
import { Role } from '../_models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  api = 'http://localhost:62952/api/Role';
  roles: any = [];
  rolesSub = new Subject<Array<Role>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.roles = res?.Result as Array<Role>;
        this.rolesSub.next(this.roles);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Role> {
    let role = this.http.get<Role>(`${this.api}/${id}`)
    return role;
  }

  create(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.api}/create`, role)
  }

  edit(role: Role, id: string): Observable<Role> {
    return this.http.put<Role>(`${this.api}`, role)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }
}
