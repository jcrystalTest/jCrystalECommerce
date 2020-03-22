import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ManagerUser } from '../jcrystal/services/ManagerUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {

  recaptchaVerifier: auth.ApplicationVerifier;
  confirmationResult: auth.ConfirmationResult;
  code: string;
  constructor( public http : HttpClient, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Recaptcha solved?");
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.login();
      }
    });
  }

  login() {
    console.log("Here");
    console.log("recaptcha", this.recaptchaVerifier);
    this.afAuth.auth.signInWithPhoneNumber("+573002213220", this.recaptchaVerifier)
      .then((confirmationResult) => {
      
      this.confirmationResult = confirmationResult;
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("Confirmed!!", confirmationResult);
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });

  }
  testCode(){
    this.confirmationResult.confirm(this.code)
    .then((res) => {
      res.user.getIdToken().then(tokenId => {
        console.log("Tokenid", tokenId);
        ManagerUser.login(this, tokenId, (token)=> {

        }, error => {

        });
      });
    }).catch((error)=> {

    });
  }

    logout() {
      this.afAuth.auth.signOut();
    }
}
