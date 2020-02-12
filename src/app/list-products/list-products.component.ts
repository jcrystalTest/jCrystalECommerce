import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductNormal } from '../jcrystal/entities/ProductNormal';
import { ManagerProduct } from '../jcrystal/services/ManagerProduct';
import { ManagerCart } from '../jcrystal/services/ManagerCart';
import { Categories } from '../jcrystal/entities/enums/Categories';
import { Size } from '../jcrystal/entities/enums/Size';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products:ProductNormal[] = [];
  categories:string[];
  idCart:number;

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
    ManagerProduct.getProducts(this,rep=>{
      console.log(rep.length);
      this.products = rep;
    },error=>{
      alert("Error found: "+error.mensaje);
    });
    ManagerProduct.getCategories(this,rsp=>{
      this.categories = rsp;
    },error=>{
      alert(error.mensaje);
    });
  }

  addToCart (id:number){
    ManagerCart.addToCart(this,this.idCart,id,1,rsp=>{
      alert("Prodcut add to your cart");
    },error=>{
      alert(error.mensaje);
    });
  }

  getCategoryName(id:number):string{
    return Categories.getFromId(id).name
  }

  quickView(id:number){
    this.router.navigate(['/product'], { queryParams: { id: id }});
  }
  addToFavorites(id:number){
    let cartId:number =0;
    ManagerCart.addToFavorites(this,cartId,id,()=>{
      this.router.navigate(['']);
    },error=>{
      alert(error.mensaje);
    });
  }

  filterBySize(size:string){
    let s:Size = Size.XS;
    if(size==='s'){
      s= Size.S;
    }else if(size==='m'){
      s= Size.M;
    }else if(size==='l'){
      s= Size.L;
    }
    /**ManagerProduct.filterProductsBySize(this,s,resp=>{
      this.products = resp;
    },error=>{
      alert(error.mensaje);
    });**/
  }

  filterByCategory(category:string){
    let c:Categories= Categories.MEN;
    if(category===Categories.WOMEN.name){
      c= Categories.WOMEN;
    }else if(category===Categories.KIDS.name){
      c= Categories.KIDS;
    }
    ManagerProduct.filterProductsByCategory(this,c,rsp=>{
      this.products = rsp;
    },error=>{
      alert(error.mensaje);
    });
  }

}
