import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { CurrentuseService } from '../currentuse.service';
import {Ifolder} from '../Ifolder';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  folders!: Ifolder[];
  currentmails!:any[];
  newFolderName:String="";
  closeResult: string | undefined;
  currfolder:string="";
  constructor(private modalservice: NgbModal,private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService) { 
    this.folders= [{"name":"Inbox" ,"mailIds":[0,1,8]},
    {"name": "Sent" ,"mailIds":[3,4] },
    {"name": "Drafts" ,"mailIds":[4,6] },
    {"name": "Trash" ,"mailIds":[7] },
    {"name": "All-mails" ,"mailIds":[0,1,2,3,4,5,6,7,8]
  }];
  }
  ngOnInit(): void {
  
  }
  showA(){
    if (document.getElementById("addn")!.style.display=="block"){
      document.getElementById("addn")!.style.display="none";
      document.getElementById("addin")!.style.display="none";
    }
    else{
      document.getElementById("addn")!.style.display="block";
      document.getElementById("addin")!.style.display="block";
  
    }
  }
  showB(){
    if (document.getElementById("rename")!.style.display=="block"){
      document.getElementById("rename")!.style.display="none";
      document.getElementById("renamein")!.style.display="none";
    }
    else{
      document.getElementById("rename")!.style.display="block";
      document.getElementById("renamein")!.style.display="block";
  
    }
  }

  addfile(filename:string){

    var flag=true;


    for(const w of this.folders){
      if(filename==w.name){
        flag=false;
      }
    }
    if(flag==false){
      alert('there is a file with the same name');
    }
    else{
      for(const l of filename){
        if(!this.charIsLetter(l)&&!this.charIsNumber(l)){
          flag=false;
          break;
        }
      }
      if(flag==false){
        alert('file name can only contain letters and numbers');
      }
      else{
        this.folders.push({"name":filename ,"mailIds":[]})
    this.service.addfile(filename,this.userservice.currentuser).subscribe(res=>{
      console.log(res);
    });
  }
  }

  }

  
Selectfolder(fname:string){
    this.service.show(fname,this.userservice.currentuser).subscribe(res=>{
      this.currentmails=res;
    });
    this.currfolder=fname;

  }
Deletefolder(){
  console.log(this.currfolder);
  if(this.currfolder==""){
    alert("No Folder is selected!");
  }
  else if(this.currfolder=="All-mails"||this.currfolder=="Inbox"||this.currfolder=="Drafts"||this.currfolder=="Sent"||this.currfolder=="Trash"){
    alert("The Selected Folder Cannot Be Deleted");
  }
  else{
    const indexOfObject = this.folders.findIndex((object) => {
      return object.name === this.currfolder;
    });
    this.folders.splice(indexOfObject,1);
    this.currfolder="";
    alert("Folder Deleted Successfully");
  }
}
Renamefolder(fname:string){
  console.log(this.currfolder);
    const indexOfObject = this.folders.findIndex((object) => {
      return object.name === this.currfolder;
    });
    this.folders[indexOfObject].name=fname;
    this.currfolder="";
  
}

opena(content: any) {
  this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openr(content: any) {
  if(this.currfolder==""){
    alert("No Folder is selected!");
  }
  else if(this.currfolder=="All-mails"||this.currfolder=="Inbox"||this.currfolder=="Drafts"||this.currfolder=="Sent"||this.currfolder=="Trash"){
    alert("You Cannot Change Name of this Folder");
  }
  else{
  this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  charIsNumber(char:any) {
    return /^\d$/.test(char);
  }
  charIsLetter(char:any) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return /^[a-zA-Z]+$/.test(char);
  }

}
