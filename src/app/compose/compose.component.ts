import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { Mail } from '../mail';
import { FormBuilder } from '@angular/forms';
import { MailBuilder } from '../mail-builder';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private service:ApiserveService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  mail:any
  buildmail= new MailBuilder()
send(from:any,to:any,subject:any,body:any,priority:any){
 this.mail=this.buildmail.build_mail(from,to,subject,body,priority)
this.service.send(this.mail).subscribe(res=>{
  console.log(res)
})
}
}
