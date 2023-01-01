import { Injectable } from '@angular/core';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class CurrentuseService {
  currentuser=''
  id=0
  currentmails:Mail[]=[]
  constructor() { }
}
