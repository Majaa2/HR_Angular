import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Competition } from '../_models/competition.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  api = 'http://localhost:62952/api/Competition';
  competitions: any = [];
  competitionsSub = new Subject<Array<Competition>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.competitions = res?.Result.filter(x => x.Active && !x.Deleted) as Array<Competition>;
        this.competitionsSub.next(this.competitions);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<Competition>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let competition = this.http.get<Response>(`${this.api}/${id}`)
    return competition;
  }

  create(competition: Competition): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, competition)
  }

  edit(competition: Competition, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, competition)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }
}
