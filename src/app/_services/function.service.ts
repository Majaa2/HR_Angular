import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Response } from '../_models/HRResponse.model';
import { Function } from '../_models/function.model'

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  api = 'http://localhost:62952/api/Function';
  functions: any = [];
  functionsSub = new Subject<Array<Function>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.functions = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Function>;
        this.functionsSub.next(this.functions);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Function>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let f = this.http.get<Response>(`${this.api}/${id}`)
    return f;
  }

  create(f: Function): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, f)
  }

  edit(f: Function, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, f)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }

}
