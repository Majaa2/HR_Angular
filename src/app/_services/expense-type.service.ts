import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExpenseType } from '../_models/expenseType.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {
  api = 'http://localhost:62952/api/ExpenseType';
  expenseTypes: any = [];
  expenseTypesSub = new Subject<Array<ExpenseType>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.expenseTypes = res?.Result.filter(x => x.Active && !x.Deleted) as Array<ExpenseType>;
        this.expenseTypesSub.next(this.expenseTypes);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<ExpenseType>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let expenseType = this.http.get<Response>(`${this.api}/${id}`)
    return expenseType;
  }

  create(expenseType: ExpenseType): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, expenseType)
  }

  edit(expenseType: ExpenseType, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, expenseType)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }
}
