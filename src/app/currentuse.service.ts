import { Injectable } from '@angular/core';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class CurrentuseService {
  currentuser=''
  id=0
  currentaccount:string=''
  currentmails:Mail[]=[]
  currfolder:string="";
  constructor() { }
}