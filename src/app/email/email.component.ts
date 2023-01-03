import { Component, OnInit } from '@angular/core';
import { ComposeComponent } from '../compose/compose.component';
import { CurrentuseService } from '../currentuse.service';
import { Mail } from '../mail';
import { ApiserveService } from '../service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  currentemails:Mail[]=[];
  thatmail!:Mail
  constructor(private userservice:CurrentuseService) { 
    this.thatmail=this.userservice.currentmail
  }

  ngOnInit(): void {
  }





}