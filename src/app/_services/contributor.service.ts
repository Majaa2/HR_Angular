import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contributor } from '../_models/contributor.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {
  api = 'http://localhost:62952/api/Contributor';
  contributors: any = [];
  contributorsSub = new Subject<Array<Contributor>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.contributors = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Contributor>;
        this.contributorsSub.next(this.contributors);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Contributor>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let contributor = this.http.get<Response>(`${this.api}/${id}`)
    return contributor;
  }

  create(contributor: Contributor): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, contributor)
  }

  edit(contributor: Contributor, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, contributor)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }
}
