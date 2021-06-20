import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Response } from '../_models/HRResponse.model';
import { Role } from '../_models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  api = 'http://localhost:62952/api/Role';


  constructor(private http: HttpClient) { }


  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result as Array<Role>
        return r
      })
      return res
    })
  }
}
