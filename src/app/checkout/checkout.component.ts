import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempCart, TempCartItem } from '../cart/cart.component';
import { TempProduct } from '../list-products/list-products.component';
import { ManagerContact } from '../jcrystal/services/ManagerContact';
import { NetworkBase, RequestError } from '../jcrystal/services/NetworkBase';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, NetworkBase {
  L = console.log;
  E = console.error;
  onError?: (error: RequestError) => void = (e) => this.E(e);

  payMetod = false;
  cart: TempCart;

  contactForm: FormGroup;

  constructor(public router: Router, public http: HttpClient, private fb: FormBuilder) { }



  ngOnInit() {
    this.contactForm = this.fb.group({
      'firstname': ['', [Validators.required, Validators.minLength(1)]],
      'lastname': ['', [Validators.required, Validators.minLength(1)]],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', []],
      'company': ['', []],
      'country': ['', []]
    });

    let items: TempCartItem[] = [];
    items.push(new TempCartItem(1, new TempProduct(1, "Guangzhou sweater", 13, null, "sweater", "assets/img/products/product-2.jpg"), 1));
    items.push(new TempCartItem(1, new TempProduct(1, "Seet sweater", 14, 20, "sweater", "assets/img/products/product-1.jpg"), 1));
    this.cart = new TempCart(1, 13 + 14, 13 + 14 * (1.19), items);
  }

  async checkout() {
    if (this.payMetod) {
      alert("Thank you!!!");
      let userData = {
        name: `${this.contactForm.get('firstname')} ${this.contactForm.get('lastname')}`,
        email: this.contactForm.get('email'),
        message: `${this.cart}`
      };
      await this.createContact({ ...userData });
      this.router.navigate(['']);
    } else {
      alert("You haven't select a payment method");
    }
  }

  private createContact({ name, email, message }): Promise<{}> {
    return new Promise((resolve, reject) => {
      ManagerContact.contact(
        this,
        name,
        email,
        message,
        () => {
          this.L('Done..!');
          resolve();
        },
        (err) => {
          this.onError(err);
          reject(err);
        }
      );
    });
  }

}
