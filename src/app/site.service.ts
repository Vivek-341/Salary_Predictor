import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post('http://127.0.0.1:5000/predict_salary', data);
  }
}
