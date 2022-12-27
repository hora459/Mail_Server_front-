import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private service:ApiserveService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
send(from:any,to:any,subject:any,body:any){
this.service.send(from,to,subject,body).subscribe(res=>{console.log(res)});
}
}
