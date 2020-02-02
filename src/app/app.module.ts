import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerCart } from "./jcrystal/services/ManagerCart";
import { ManagerContact } from "./jcrystal/services/ManagerContact";
import { ManagerProduct } from "./jcrystal/services/ManagerProduct";
import { DefaultOnError, NetworkBase, RequestError, TipoError, alertInfo, defaultOnError } from "./jcrystal/services/NetworkBase";
import { ErrorService } from "./jcrystal/services/error.services";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ListProductsComponent,
    ContactComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DefaultOnError,
    { provide: RequestError, useValue: RequestError }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
