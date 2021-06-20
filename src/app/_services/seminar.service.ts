import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Seminar } from '../_models/seminar.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SeminarService {

  api = 'http://localhost:62952/api/Seminar';
  seminars: any = [];
  seminarsSub = new Subject<Array<Seminar>>();
  
  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.seminars = res?.Result as Array<Seminar>;
        this.seminarsSub.next(this.seminars);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Seminar> {
    let user = this.http.get<Seminar>(`${this.api}/${id}`)
    return user;
  }

  create(user: Seminar): Observable<Seminar> {
    return this.http.post<Seminar>(`${this.api}/create`, user)
  }

  edit(user: Seminar, id: string): Observable<Seminar> {
    return this.http.put<Seminar>(`${this.api}`, user)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }
}
