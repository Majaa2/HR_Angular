import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OverTime } from '../_models/overTime.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class OvertimeService {
  api = 'http://localhost:62952/api/OverTime';
  overtimes: any = [];
  overtimesSub = new Subject<Array<OverTime>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.overtimes = res?.Result as Array<OverTime>;
        this.overtimesSub.next(this.overtimes);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<OverTime> {
    let overtime = this.http.get<OverTime>(`${this.api}/${id}`)
    return overtime;
  }

  create(overtime: OverTime): Observable<OverTime> {
    return this.http.post<OverTime>(`${this.api}/create`, overtime)
  }

  edit(overtime: OverTime, id: string): Observable<OverTime> {
    return this.http.put<OverTime>(`${this.api}`, overtime)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }
}
