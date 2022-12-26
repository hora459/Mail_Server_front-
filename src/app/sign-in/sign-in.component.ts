import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
valid=true
constructor(private service:ApiserveService,private http:HttpClient,private router:Router) { }
 
  ngOnInit(): void {
  }
  sign_in(mail:any,pass:any){
    if(this.checkEmail(mail)==false){
    alert('email cannot contain /')
    }
    else{
      // this.service.sign_in(mail,pass).subscribe(res=>{
      //   if(res=='found'){
      //     alert('email is taken choose another email')
      //   }
      //   else{
      //     this.router.navigate(['/compose']);
      //   }
      // })
      this.router.navigate(['/compose']);
    }
  }
 
  checkEmail(mail2:any){
    for (let i = 0; i < mail2.length; i++) {
      if(mail2[i]=='/'){
    this.valid=false
      }
      }
      var valid1=this.valid;
      this.valid=true;
      return valid1
  }
}
