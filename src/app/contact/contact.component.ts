import { Component, OnInit } from '@angular/core';
import { ManagerContact } from '../jcrystal/services/ManagerContact';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  sendContact(){
    console.log(this.message);
    ManagerContact.contact(this,this.name,this.email,this.message, ()=>{
      console.log("Message send");
      this.router.navigate(['']);
    },error=>{
      alert("Error while sendind data: "+ error.mensaje);
    });
  }

}
