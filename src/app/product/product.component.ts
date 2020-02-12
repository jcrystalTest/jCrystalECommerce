import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ManagerProduct } from '../jcrystal/services/ManagerProduct';
import { ProductNormal } from '../jcrystal/entities/ProductNormal';
import { Categories } from '../jcrystal/entities/enums/Categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId:number;
  product:ProductNormal;
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log(params);
        this.productId = +params['id'] || 0;
        if(this.productId!=0){
          ManagerProduct.getProductById(this,this.productId,rsp=>{
            this.product = rsp;
            console.log("found "+rsp.name);
          },error=>{
            alert(error.mensaje);
          })
        }
    });
  }

  getCategoryName(categoryId:number):String{
    return Categories.getFromId(categoryId).name;
  }
}
