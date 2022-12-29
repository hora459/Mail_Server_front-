import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiserveService {
  
  path:String='';
  constructor(private http: HttpClient) { }
  

  sign_up(email2:String, password2:String){
    return this.http.get("http://localhost:8080/"+"signup/"+email2+"/"+password2,{responseType:'text'});
  }
  sign_in(email2:String, password2:String){
    return this.http.get("http://localhost:8080/"+"signin/"+email2+"/"+password2,{responseType:'text'});
  }
 
  send(list:any): Observable<any>{
    return this.http.post<any>(`${environment.api_url}attachment`,list);
  }
}