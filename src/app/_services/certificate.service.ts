import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Certificate } from '../_models/certificate.model';
import { Response } from '../_models/HRResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  api = 'http://localhost:62952/api/Certificate';
  certificates: any = [];
  certificatesSub = new Subject<Array<Certificate>>();


  constructor(private http: HttpClient) { }

  referesh() {
    this.http.get<Response>(`${this.api}`)
      .toPromise()
      .then(res => {
        this.certificates = res?.Result as Array<Certificate>;
        this.certificatesSub.next(this.certificates);
      });

  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.api}`)
  }

  getById(id: number): Observable<Certificate> {
    let user = this.http.get<Certificate>(`${this.api}/${id}`)
    return user;
  }

  create(user: Certificate): Observable<Certificate> {
    return this.http.post<Certificate>(`${this.api}/create`, user)
  }

  edit(user: Certificate, id: string): Observable<Certificate> {
    return this.http.put<Certificate>(`${this.api}`, user)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`)
  }

}
