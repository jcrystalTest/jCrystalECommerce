import { Component, OnInit } from '@angular/core';
export class TempProduct {
  // No usar esto
  constructor(public id:number,public name:string, public price:number, public oldPrice:number, public category:string, public image:string) { }

}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products = [];
  categories =["Men", "Women", "Kids"];

  constructor() { }

  ngOnInit() {
    //---Example-----
    this.products.push(new TempProduct(1,"Guangzhou sweater", 13 , null, "sweater", "assets/img/products/product-2.jpg"));
    for(let i = 0; i < 50; i++){
      this.products.push(new TempProduct(1,"Guangzhou sweater", 13 , 35, "sweater", "assets/img/products/product-2.jpg"));
    }
    //---------------
  }

  addToCart (id:number){
    //TODO
    alert("Prodcut add to your cart")
  }

}
