import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationService {
  private API_SERVER = "http://localhost:8080/typeOperation";

  constructor(
    private http: HttpClient
  ) { }

  public getAllTypeOperation(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }
}
