import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { Mail } from '../mail';
import { FormBuilder } from '@angular/forms';
import { MailBuilder } from '../mail-builder';
import { CurrentuseService } from '../currentuse.service';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService) { }
currentuser= this.userservice.currentuser
  ngOnInit(): void {
  }
  list:any[]=[]
  formData =new FormData();
  mail:any
  buildmail= new MailBuilder()
send(to:any,subject:any,body:any,priority:any,attachment:any){
//  this.mail=this.buildmail.build_mail(this.currentuser,to,subject,body,priority,this.userservice.id)
//  console.log(this.mail.get_to())
//  console.log(this.mail.get_from())
//  console.log(this.mail.get_subject())
//  console.log(this.mail.get_body())
//  console.log(this.mail.get_priority())
//  console.log(this.mail.get_id())
// this.service.send(this.mail).subscribe(res=>{
//   console.log(res)
//   // if successful
//   this.userservice.id++;
// })
console.log(attachment)
for(const w of attachment){
  this.formData.append('attachment',w);
  console.log(w)
  this.list.push(w)
}
console.log(this.list)
this.service.send(this.list).subscribe(res=>{
  
  console.log(res)
})
}
}
