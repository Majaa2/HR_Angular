import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Response } from '../_models/HRResponse.model';
import { Work } from '../_models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  api = 'http://localhost:62952/api/Work';
  works: any = [];
  worksSub = new Subject<Array<Work>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.works = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Work>;
        this.worksSub.next(this.works);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Work>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let work = this.http.get<Response>(`${this.api}/${id}`)
    return work;
  }

  create(work: Work): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, work)
  }

  edit(work: Work, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, work)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }

}
