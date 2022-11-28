import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  constructor(private httpclient:HttpClient) { }
  getTheatre(movieId:number):Observable<any>{
    return this.httpclient.get(`http://localhost:9000/theatre/${movieId}`);
  }
  getMovie():Observable<any>{
    return this.httpclient.get(`http://localhost:9000/showmovie`);
  }
}