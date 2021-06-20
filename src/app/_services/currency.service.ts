import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Currency } from '../_models/currency.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  api = 'http://localhost:62952/api/Currency';
  currencies: any = [];
  currenciesSub = new Subject<Array<Currency>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.currencies = res?.Result as Array<Currency>;
        this.currenciesSub.next(this.currencies);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Currency> {
    let currency = this.http.get<Currency>(`${this.api}/${id}`)
    return currency;
  }

  create(currency: Currency): Observable<Currency> {
    return this.http.post<Currency>(`${this.api}/create`, currency)
  }

  edit(currency: Currency, id: string): Observable<Currency> {
    return this.http.put<Currency>(`${this.api}`, currency)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }
}
