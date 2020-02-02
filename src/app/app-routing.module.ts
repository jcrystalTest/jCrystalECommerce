import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'list', component: ListProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
