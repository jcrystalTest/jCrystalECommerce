import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempCart, TempCartItem } from '../cart/cart.component';
import { TempProduct } from '../list-products/list-products.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  payMetod = false;
  cart:TempCart;
  constructor(public router: Router) { }

  ngOnInit() {
    let items:TempCartItem[] = [];
    items.push(new TempCartItem (1, new TempProduct(1,"Guangzhou sweater", 13 , null, "sweater", "assets/img/products/product-2.jpg"),1));
    items.push(new TempCartItem (1, new TempProduct(1,"Seet sweater", 14 , 20, "sweater", "assets/img/products/product-1.jpg"),1));
    this.cart = new TempCart(1, 13+14, 13+14*(1.19),items);
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
