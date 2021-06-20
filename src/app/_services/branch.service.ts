import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Branch } from '../_models/branch.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  api = 'http://localhost:62952/api/Branch';
  branches: any = [];
  branchesSub = new Subject<Array<Branch>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.branches = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Branch>;
        this.branchesSub.next(this.branches);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Branch>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let branch = this.http.get<Response>(`${this.api}/${id}`)
    return branch;
  }

  create(branch: Branch): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, branch)
  }

  edit(branch: Branch, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, branch)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }

}
