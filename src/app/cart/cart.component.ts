import { Component, OnInit } from '@angular/core';
import { CartNormal } from '../jcrystal/entities/CartNormal';
import { HttpClient } from '@angular/common/http';
import { ManagerCart } from '../jcrystal/services/ManagerCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items=[];
  cart:CartNormal;
  id:number;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    //TODO get id
    if(this.id){
      ManagerCart.getCart(this,this.id,resp=>{
        this.cart = resp;
        this.items = this.cart.items;
      }, error=>{
        alert(error.mensaje);
      });
    }else{
      ManagerCart.createCart(this,rsp=>{
        this.id = rsp.id;
      }, error=>{
        alert(error.mensaje);
      });
    }
    
  }

}
