import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {
  shortURLApi = 'https://spoo.me/api/v1/shorten';
  
  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
    const body ={
      "long_url" : nombreUrl
    }
    return this.http.post(this.shortURLApi, body)
  }
}
