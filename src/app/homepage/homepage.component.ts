
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
sortoption:string="";
searchoption:string=""
checkes:boolean[]=[]

   ngOnInit(): void {

  }
  attachedFileName: String[] = []
  attachedFileUrl: any[] = []
  selectsearchorsortoption(event:any){
    if(this.option=='Search'){
      this.searchoption=event.target.value
      alert(this.searchoption)
    }
    else{
      this.sortoption=event.target.value
      alert(this.sortoption)
    }

  }


search1(inbox:any){

if(this.userservice.currfolder=='')
alert('you have to select a folder')
else {
  // currentuser:any,currentfolder:any,type:any,name:any
  alert(this.searchoption)
  this.service.search(this.userservice.currentuser,this.userservice.currfolder,this.searchoption,inbox).subscribe((res:Mail[])=>{
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



getValuesChecked()
{
  this.currentemails.filter((x,index)=>this.checkes[index])
  .map(x=>x.from).join(",")
  console.log(this.checkes) 
}
sort(){

if(this.sortoption!=''){
  alert(this.sortoption);
  if(this.userservice.currfolder=='')
  alert('you have to select a folder')
  else {
    this.service.sort(this.userservice.currentuser,this.userservice.currfolder,this.sortoption).subscribe((res:Mail[])=>{
      
      this.show(res);
      console.log(res);
      alert(res)
    })
  }
}
  }


}