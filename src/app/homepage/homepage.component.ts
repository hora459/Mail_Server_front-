import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { CurrentuseService } from '../currentuse.service';
import {Ifolder} from '../Ifolder';
import { Mail } from '../mail';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
currentemails:Mail[]=[];
  constructor(private modalservice: NgbModal,private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService) {
    
   }

  ngOnInit(): void {

  }
  attachedFileName: String[] = []
  attachedFileUrl: any[] = []
  
  show(array:any){
    console.log(array)
    console.log(this.currentemails)
  this.currentemails=array
  console.log(this.currentemails)
  }

}
