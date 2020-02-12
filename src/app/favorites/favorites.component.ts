import { Component, OnInit } from '@angular/core';
import { ProductNormal } from '../jcrystal/entities/ProductNormal';
import { HttpClient } from '@angular/common/http';
import { ManagerCart } from '../jcrystal/services/ManagerCart';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  cartId:number;
  products:ProductNormal[]=[];

  constructor(public http: HttpClient,) { }

  ngOnInit() {
    if(this.cartId){
      ManagerCart.listFavorites(this,this.cartId,resp=>{

      },error=>{
        alert(error.mensaje);
      });
    }
  }

}
