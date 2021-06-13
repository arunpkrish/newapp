import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getData(): any{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/');
  }

  getSiteData(urlStr: any): any{
    alert(urlStr);
    return this.http.get<any>(urlStr);
  }
}
