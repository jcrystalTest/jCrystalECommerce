import { Component, OnInit } from '@angular/core';
import { TempProduct } from '../list-products/list-products.component';//No usar esto!
import { NetworkBase, RequestError } from 'src/app/jcrystal/services/NetworkBase';
import { HttpClient } from '@angular/common/http';
import { ManagerCart } from 'src/app/jcrystal/services/ManagerCart';
import { CartNormal } from 'src/app/jcrystal/entities/CartNormal';

export type TCart = { id?: number | string | void; total?: number | void, subtotal?: number | void, favorites?: any | any[] | null, items?: any | any[] | null } & {};

export class TempCartItem {
  // No usar esto
  constructor(public id: number, public product: TempProduct, public quantity: number) { }

}
export class TempCart {
  // No usar esto
  constructor(public id: number, public subtotal: number, public total: number, public items: TempCartItem[]) { }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, NetworkBase {
  // http: HttpClient;
  L = console.log;
  E = console.error;
  onError?: (error: RequestError) => void = (e) => this.E(e);

  items = [];
  cart: TCart = null;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    (async () => {
      this.cart = await this.createNewCart()
    })();
    this.items.push(new TempCartItem(1, new TempProduct(1, "Guangzhou sweater", 13, null, "sweater", "assets/img/products/product-2.jpg"), 1));
    this.items.push(new TempCartItem(1, new TempProduct(1, "Seet sweater", 14, 20, "sweater", "assets/img/products/product-1.jpg"), 1));
    // this.cart = new TempCart(1, 13 + 14, 13 + 14 * (1.19), null);

  }


  
  deleteItem () {
    this.L('To be implemeneted')
    return;
  }

  updateCart () {
    this.L('To be implemeneted')
    return;
  }

  private createNewCart(): Promise<TCart> {
    return new Promise((resolve, reject) => {
      ManagerCart.createCart(
        this,
        (resp: CartNormal) => {
          this.L(resp);
          resolve({
            ...resp,
            total: resp.total,
            subtotal: resp.subtotal,
            id: resp.id || '00000001',
            favorites: resp.favorites,
            items: resp.items || []
          });
        },
        (err) => {
          this.onError(err);
          reject(err);
        }
      );
    })
  }

}
