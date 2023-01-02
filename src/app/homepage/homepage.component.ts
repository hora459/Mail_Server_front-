
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { CurrentuseService } from '../currentuse.service';
import {Ifolder} from '../Ifolder';
import { Mail } from '../mail';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private modalservice: NgbModal,private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService) {
   }
currentemails:Mail[]=[];
search=''
option:string="";
   ngOnInit(): void {

  }
  attachedFileName: String[] = []
  attachedFileUrl: any[] = []



search1(inbox:any){
  
if(this.userservice.currfolder=='')
alert('you have to select a folder')
else {
  this.service.search(inbox,this.search,this.userservice.currentuser,this.userservice.currfolder).subscribe((res:Mail[])=>{
    alert(res);
    console.log(res);
    this.show(res);
  })
}
  }
  
  show(array:any){
  this.currentemails=array
  console.log(this.currentemails)
  this.checkes=[]
  for(var i=0;i<this.currentemails.length;i++){
    this.checkes[i]=false;
  }
  }

selectoption(event:any){
this.option= event.target.value;
console.log(this.option);

if(this.option=="Search"){
  document.getElementById("dropdownopt")!.style.display="block";
  document.getElementById("search")!.style.display="block";
}
else if(this.option=="Sort"){
  document.getElementById("dropdownopt")!.style.display="block";
  document.getElementById("search")!.style.display="none";
}else{
  document.getElementById("dropdownopt")!.style.display="none";
  document.getElementById("search")!.style.display="none";
}

}


checkes:boolean[]=[]

getValuesChecked()
{
  this.currentemails.filter((x,index)=>this.checkes[index])
  .map(x=>x.from).join(",")
  console.log(this.checkes) 
}






}