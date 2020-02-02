import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestError, NetworkBase } from '../jcrystal/services/NetworkBase';
import { HttpClient } from '@angular/common/http';
import { ManagerProduct } from '../jcrystal/services/ManagerProduct';
import { TempProduct } from '../list-products/list-products.component';
import { ProductNormal } from '../jcrystal/entities/ProductNormal';

import { concatMap } from 'rxjs/operators';
import { from } from 'rxjs';

export type TProduct = { name: string, image: string; price: string; description?: string; } & {};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, NetworkBase {
  L = console.log;
  E = console.error;
  onError?: (error: RequestError) => void = (e) => this.E(e);
  product: TProduct = null;


  constructor(private accRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.accRoute.params.pipe(
      concatMap(({ id, ...rest }) => {
        return from(this.getProduct({ id }));
      })
    )
      .subscribe(
        (prod: TProduct) => {
          this.product = prod;
        },
        (err) => {
          this.E(err);
        }
      );
  }

  private getProduct({ id }): Promise<Partial<TProduct>> {
    return new Promise((resolve, reject) => {
      ManagerProduct.getProductById(
        this,
        id,
        (resp: ProductNormal) => {
          this.L(resp);
          resolve({
            ...resp,
            name: resp.name,
            image: resp.image,
            price: resp.price.toString(),
            description: resp.description
          } as Partial<TProduct>);
        },
        (err) => {
          this.onError(err);
          reject(err);
        }
      );
    });
  }

}
