import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiserveService } from '../service';
import { Router } from '@angular/router';
import { CurrentuseService } from '../currentuse.service';
import {Ifolder} from '../Ifolder';
import { HomepageComponent } from '../homepage/homepage.component';
import { Mail } from '../mail';
import { loadTranslations } from '@angular/localize';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 array1:string[]=[''];
 array2:string[][]=[['']];

//    contacts: Map<string, string[]> = new Map([
//  ['',['']]
//   ]);
contacts: Map<string, string[]> =new Map()
  
  constructor(private modalservice: NgbModal,private service:ApiserveService,private http:HttpClient,private router:Router,private userservice:CurrentuseService,private homepage:HomepageComponent) {
  
   }
   closeResult: string | undefined;
  ngOnInit(): void {
    this.loadcontacts();
  }

addcontact(contactname:any,email:string){
  var emails = email.split(',');
this.contacts.set(contactname,emails);
this.service.addcontact(this.userservice.currentuser,contactname,emails);
}
loadcontacts(){
this.service.loadcontact(this.userservice.currentuser).subscribe((res:any)=>{
  if(res!=null){
    console.log(res)
    this.array1=[''];
    this.array2=[['']];
    type myMap = Record<number, any>;
    const contactss: myMap = res;
    console.log(contactss)
    for (const key in contactss) {
      alert(key)
      alert(contactss[key])
      this.array1.push(key)
    this.array2.push(contactss[key]);
    }
  }

this.router.navigate(['/contact'])
})
}
editcontact(){

}


deletecontact(){
  
  if(this.userservice.currentaccount==''){
    alert('no account chosen');
  }
  else{

  const indexOfObject = this.array1.indexOf(this.userservice.currentaccount)
  const indexOfObject1 = this.array2.findIndex((object) => {
    return object === this.contacts.get(this.userservice.currentaccount);
  });
  this.array1.splice(indexOfObject,1)
  this.array2.splice(indexOfObject1,1)
  this.contacts.delete(this.userservice.currentaccount)

this.service.deletecontact(this.userservice.currentuser,this.userservice.currentaccount).subscribe(res=>{console.log(res)});
console.log(this.array1)
console.log(this.array2)
console.log(this.contacts)
this.userservice.currentaccount=''
this.router.navigate(['/contact'])
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
opena(content: any) {
  this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openr(content: any) {
  if(this.userservice.currfolder==""){
    alert("No Folder is selected!");
  }
  else if(this.userservice.currfolder=="All-mails"||this.userservice.currfolder=="Inbox"||this.userservice.currfolder=="Drafts"||this.userservice.currfolder=="Sent"||this.userservice.currfolder=="Trash"){
    alert("You Cannot Change Name of this Folder");
  }
  else{
  this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult =  `Closed with:${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
}
Selectaccount(fname:string){
this.userservice.currentaccount=fname
}
}