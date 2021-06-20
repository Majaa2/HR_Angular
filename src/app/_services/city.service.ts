import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { City } from '../_models/city.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  api = 'http://localhost:62952/api/City';
  cities: any = [];
  citiesSub = new Subject<Array<City>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.cities = res?.Result.filter(x => x.Active && !x.Deleted) as Array<City>;
        this.citiesSub.next(this.cities);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`).pipe(res =>{
      res.subscribe(r =>{
        r.Result = r?.Result.filter(x => x.Active && !x.Deleted) as Array<City>
        return r
      })
      return res
    })
  }

  getById(id: number): Observable<Response> {
    let city = this.http.get<Response>(`${this.api}/${id}`)
    return city;
  }

  create(city: City): Observable<Response> {
    return this.http.post<Response>(`${this.api}`, city)
  }

  edit(city: City, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.api}/${id}`, city)
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.api}/${id}`)
  }

}
