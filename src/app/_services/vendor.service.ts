import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vendor } from '../_models/vendor.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  api = 'http://localhost:62952/api/Vendor';
  vendors: any = [];
  vendorsSub = new Subject<Array<Vendor>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.vendors = res?.Result as Array<Vendor>;
        this.vendorsSub.next(this.vendors);
      });
      
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Vendor> {
    let vendor = this.http.get<Vendor>(`${this.api}/${id}`)
    return vendor;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(`${this.api}/create`, vendor)
  }

  edit(vendor: Vendor, id: number): Observable<Vendor> {
    return this.http.put<Vendor>(`${this.api}`,vendor)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }

}
