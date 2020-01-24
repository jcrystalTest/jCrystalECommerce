import { Component, OnInit } from '@angular/core';
import { TempProduct } from '../list-products/list-products.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  products=[];

  constructor() { }

  ngOnInit() {
    this.products.push(new TempProduct(1,"Guangzhou sweater", 13 , null, "sweater", "assets/img/products/product-2.jpg"));
    for(let i = 0; i < 2; i++){
      this.products.push(new TempProduct(1,"Guangzhou sweater", 13 , 35, "sweater", "assets/img/products/product-2.jpg"));
    }
  }

}
