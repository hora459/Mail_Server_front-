import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';
import { Mail } from "./mail"
import { from } from 'rxjs';
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
 
    send(list:any,to:any,from:any): Observable<any>{
    return this.http.post<any>(`${environment.api_url}attachments/${to}/${from}`,list);                       
  }
   send_mail(mail:any): Observable<any>{
    return  this.http.post<any>(`${environment.api_url}mailing`,mail);
  }
  getfile(filename:any,to:any):Observable<any>
  {
    return this.http.get("http://localhost:8080/"+"getfiles/"+filename+"/"+to,{responseType:'blob'});
  }
   show(filename:string,email:string): Observable<any>{
    return this.http.get("http://localhost:8080/"+"load/"+email+"/"+filename);
  }
  search(name:any,type:any,currentuser:any,currentfolder:any):Observable<any>{
    return this.http.get("http://localhost:8080/"+"filter/"+currentuser+"/"+currentfolder+"/"+type+"/"+name);
  }
  deletemail(mail:Mail,email:string,filename:string){
    return this.http.request('delete', `${environment.api_url}deletemail/${email}/${filename}`, {body: mail})
  }
  deletefolder(email:string,filename:string){
    return this.http.request('delete', `${environment.api_url}deletemail/${email}/${filename}`)
  }

  addfile(email:string,filename:string){
    return this.http.get("http://localhost:8080/"+"addfolder/"+email+"/"+filename,{responseType:'text'});
  }
  renamefile(email:string,filename1:string,filename2:string){
    return this.http.get("http://localhost:8080/"+"renamefile/"+email+"/"+filename1+"/"+filename2,{responseType:'text'});
  }
  addcontact(email:string,name:string,email1:string[]){
    return this.http.post("http://localhost:8080/"+"addcontact/"+email+"/"+name,email1);
  }
  deletecontact(email:string,name:string){
    return this.http.request('delete', `${environment.api_url}deletecontact/${email}/${name}`)}
  loadcontact(email:string):Observable<any>{
    return this.http.get("http://localhost:8080/"+"loadcontact/"+email);
  }
  renamecontact(email:string,name:string,email1:string){
    return this.http.get("http://localhost:8080/"+"renamecontact/"+email+"/"+name+"/"+email1,{responseType:'text'});
  }
  sort(email:string,filename:string,type:any): Observable<any>{
    return this.http.get("http://localhost:8080/"+"sort/"+email+"/"+filename+"/"+type);
  }
  SendToDraft(email:string,mail:string): Observable<any> {
    return this.http.post("http://localhost:8080/"+"addcontact/"+email,mail);
  }
}