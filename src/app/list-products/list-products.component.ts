import { Component, OnInit } from '@angular/core';
import { NetworkBase, RequestError } from '../jcrystal/services/NetworkBase';
import { HttpClient } from '@angular/common/http';
import { ManagerProduct } from '../jcrystal/services/ManagerProduct';
import { ProductNormal } from '../jcrystal/entities/ProductNormal';
export class TempProduct {
  // No usar esto
  constructor(public id: number, public name: string, public price: number, public oldPrice: number, public category: string, public image: string) { }

}

export type Product = {};

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, NetworkBase {
  L = console.log;
  E = console.error;
  onError?: (error: RequestError) => void = (e) => this.E(e);

  products: TempProduct[] = [];
  iniProds = [];
  // categories = ["Men", "Women", "Kids"];
  categories = [];
  selectedCategory = null;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    //---Example-----
    // this.products.push(new TempProduct(1, "Guangzhou sweater", 13, null, "sweater", "assets/img/products/product-2.jpg"));
    // for (let i = 0; i < 50; i++) {
    //   this.products.push(new TempProduct(1, "Guangzhou sweater", 13, 35, "sweater", "assets/img/products/product-2.jpg"));
    // }
    //---------------

    (async () => {
      this.products = await this.getProducts();
      this.iniProds = this.products;
      this.categories = await this.getCategories();
    })();
  }

  selectCateg(categ) {
    this.products = this.iniProds;
    this.L(`Selected :: ${categ} category ..!`);
    categ = categ == 'Men' ? '1000' : categ == 'Women' ? '2000' : 'Kids';
    this.products = this.products.filter(item => item.category == categ);
  }

  addToCart(id: number) {
    //TODO
    alert("Prodcut add to your cart");
  }

  private getProducts(): Promise<Array<Partial<TempProduct> & any>> {
    return new Promise((resolve, reject) => {
      ManagerProduct.getProducts(
        this,
        (resp: ProductNormal[]) => {
          this.L(resp);
          resolve(resp.map(item => { return new TempProduct(item.id, item.name, item.price, item.oldPrice, (item.category).toString(), item.image); }));
        },
        (err) => {
          this.onError(err);
          reject(err);
        }
      );
    });
  }

  private getCategories(): Promise<Array<Partial<TempProduct> & any>> {
    return new Promise((resolve, reject) => {
      ManagerProduct.getCategories(
        this,
        (resp: string[]) => {
          this.L(resp);
          resolve(resp);
        },
        (err) => {
          this.onError(err);
          reject(err);
        }
      );
    });
  }

}
