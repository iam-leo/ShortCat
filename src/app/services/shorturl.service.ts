import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {
  shortURLBase = 'https://gotiny.cc/';
  shortURLApi = 'https://gotiny.cc/api';
  
  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
    const body ={
      "input" : nombreUrl
    }
    return this.http.post(this.shortURLApi, body)
  }
}
