import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_SERVER = "http://localhost:8080/customer";

  constructor(
    private http: HttpClient
  ) { }

  public getAllCustomer(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }

  public saveCustomer(customer:any): Observable<any>{
    return this.http.post(this.API_SERVER, customer)
  }
}