import { Component, OnInit } from '@angular/core';
import { ComposeComponent } from '../compose/compose.component';
import { CurrentuseService } from '../currentuse.service';
import { Mail } from '../mail';
import { ApiserveService } from '../service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  currentemails:Mail[]=[];
  thatmail!:Mail
list:any
  x2:any
  attachedFile: File[] = []
  attachedFileName: String[] = []
  attachedFileUrl: any[] = []
  constructor(private service: ApiserveService, private http: HttpClient, private router: Router, private userservice: CurrentuseService, public sanitizer: DomSanitizer) { 
    this.thatmail=this.userservice.currentmail
      this.list=this.thatmail.attachment
      this.show()
  }

  ngOnInit(): void {
  }
  show() {
    
    console.log(this.list)
    for (let i = 0; i < this.list.length; i++) {
      this.service.getfile(this.list[i], this.thatmail.from).subscribe(response => {
        console.log(response)
        var binaryData = [];
        binaryData.push(response);
        window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }))
        this.attachedFileName.push(this.list[i])
        this.x2 = URL.createObjectURL(response)
        this.x2 = <string>this.sanitizer.bypassSecurityTrustUrl(this.x2)
        this.attachedFileUrl.push(this.x2)
        console.log(this.x2)
        console.log(this.attachedFileUrl)
      })
    }
  }




}