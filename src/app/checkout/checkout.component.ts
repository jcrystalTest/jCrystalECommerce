import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartNormal } from '../jcrystal/entities/CartNormal';
import { HttpClient } from '@angular/common/http';
import { ManagerCart } from '../jcrystal/services/ManagerCart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  payMetod = false;
  cart:CartNormal;
  idCart:number;
  constructor(public http: HttpClient,public router: Router) { }

  ngOnInit() {
    //TODO idCart
    if(this.idCart){
      ManagerCart.getCart(this,this.idCart,resp=>{
        this.cart = resp;
      }, error=>{
        alert(error.mensaje);
      });
    }
  }

  checkout(){
    if(this.payMetod){
      alert("Thank you!!!");
      this.router.navigate(['']);
    }else{
      alert("You haven't select a payment method");
    }
  }

}
