import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerCart } from './jcrystal/services/ManagerCart';
import { CartNormal } from './jcrystal/entities/CartNormal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cart:CartNormal;
  constructor(public http: HttpClient){

  }
  ngOnInit(): void {
    if(!this.cart){
      ManagerCart.createCart(this,rsp=>{
        console.log(rsp.id);
        this.cart = rsp;
      }, error=>{
        alert("Error found: "+error.mensaje);
      });
    }
    
  }

  title = 'jCrystal E-Commerce Shoe Shop';
  logo = 'logo.png';
}
