import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from './Demo.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getTitle(demo: Demo): Observable<any> {
    return this.http.post("http://localhost:8082/demo", JSON.stringify(demo), {
      headers: { "Content-Type": "application/json; charset = UTF-8" }
    })
  }
}
