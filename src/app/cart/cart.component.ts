import { Component, OnInit } from '@angular/core';
import { TempProduct } from '../list-products/list-products.component';//No usar esto!
export class TempCartItem{
  // No usar esto
  constructor(public id:number,public product:TempProduct, public quantity:number) { }

}
export class TempCart{
  // No usar esto
  constructor(public id:number, public subtotal:number, public total:number, public items:TempCartItem[]) { }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items=[];
  cart:TempCart;

  constructor() { }

  ngOnInit() {
    this.items.push(new TempCartItem (1, new TempProduct(1,"Guangzhou sweater", 13 , null, "sweater", "assets/img/products/product-2.jpg"),1));
    this.items.push(new TempCartItem (1, new TempProduct(1,"Seet sweater", 14 , 20, "sweater", "assets/img/products/product-1.jpg"),1));
    this.cart = new TempCart(1, 13+14, 13+14*(1.19),null);
  }

}
