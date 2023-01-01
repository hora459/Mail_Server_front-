import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { Mail } from '../mail';
import { FormBuilder } from '@angular/forms';
import { MailBuilder } from '../mail-builder';
import { CurrentuseService } from '../currentuse.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService,public sanitizer:DomSanitizer) { }
currentuser= this.userservice.currentuser
  ngOnInit(): void {
  }
  attachedFile:File[]=[]
attachedFileName:String[]=[]
attachedFileUrl:any[]=[]
c=0
x1:any
x2:any
list:any
file64:string=""
formData =new FormData();
mail:any
buildmail= new MailBuilder()


select(event: any){
  this.attachedFile.push(<File>event.target.files[0] )
  this.attachedFileName.push(event.target.files[0].name)
  this.x1=URL.createObjectURL(<File>event.target.files[0])
  this.c++;
  this.x1= <string>this.sanitizer.bypassSecurityTrustUrl(this.x1)
  this.attachedFileUrl.push(this.x1)
  console.log(this.attachedFileUrl)
  console.log(this.attachedFile)
  console.log(this.attachedFileName)
  console.log(this.x1)
  console.log(this.c)
  
}
remove(i:number){
  this.attachedFile.splice(i,1)
  this.attachedFileName.splice(i,1)
  this.attachedFileUrl.splice(i,1)
  this.x1=""
}

send(to:any,subject:any,body:any,priority:any,attachment:any){

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
}
 
console.log(this.formData)
this.service.send(this.formData,to,this.currentuser).subscribe(res=>{
  this.formData =new FormData();
  console.log(res)
  // this.mail.set_attachment(res)
  this.list=res
  this.mail=this.buildmail.build_mail(this.currentuser,to,subject,body,priority,this.list)
  console.log(this.mail)
  this.service.send1(this.mail).subscribe(res=>{
  console.log(res)
})
})
           this.router.navigate(['/homepage']);



}

show(){
  console.log(this.list)
 for(let i=0;i<this.list.length;i++)
   {
  this.service.getfile(this.list[i],this.currentuser).subscribe(response =>{
    console.log(response)
    var binaryData = [];
binaryData.push(response);
window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}))
this.attachedFileName.push(this.list[i])
 this.x2=URL.createObjectURL(response)
    this.x2= <string>this.sanitizer.bypassSecurityTrustUrl(this.x2)
    this.attachedFileUrl.push(this.x2)
    console.log(this.x2)
    console.log(this.attachedFileUrl)
   
  })
}
}
}