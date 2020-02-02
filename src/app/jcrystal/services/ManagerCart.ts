import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs';
import {AppConfiguration} from "../../utils/app-configuration";
import { NetworkBase, defaultOnError, TipoError, RequestError } from '../services/NetworkBase';
export class ManagerCart{
	/**
	* /api/cart/addToCart
	**/
	static addToCart(base : NetworkBase,idCart:number,idProduct:number,quantity:number,onSuccess: (r:CartNormal)=> void ,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/cart/addToCart";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		if (idCart !== null && typeof(idCart) !== 'undefined') {
				params = (params===null?"?":(params + "&")) + "idCart=" +idCart;
		}
		if (idProduct !== null && typeof(idProduct) !== 'undefined') {
				params = (params===null?"?":(params + "&")) + "idProduct=" +idProduct;
		}
		params = (params===null?"?":(params + "&")) + "quantity=" + String(quantity);
		if (params) {
			ruta+=params;
		}
		if (!onSuccess) {
			return {open : function(){
				window.open(ruta);
			}};
		}
		base.http.get(ruta, {responseType : 'json', headers : headers}).subscribe((js:any) =>{
			if (js.success === 1) {
				onSuccess(Cart.fromJsonNormal(js.r as any));
			}
			else if (js.success === 2) {
				onError(new RequestError(js.code, js.mensaje, TipoError.ERROR));
			}
			else if (js.success === 3) {
				onError(new RequestError(-1, js.mensaje, TipoError.UNAUTHORIZED));
			}
			else{
				onError(new RequestError(-1, js.mensaje, TipoError.SERVER_ERROR));
			}
		}, error =>{
			console.log(error);
			onError(new RequestError(-1, error.statusText, TipoError.SERVER_ERROR));
		});
	}
	/**
	* /api/cart/addToFavorites
	**/
	static addToFavorites(base : NetworkBase,cartId:number,idP:number,onSuccess: () => void,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/cart/addToFavorites";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		params = (params===null?"?":(params + "&")) + "cartId=" + String(cartId);
		if (idP !== null && typeof(idP) !== 'undefined') {
				params = (params===null?"?":(params + "&")) + "idP=" +idP;
		}
		if (params) {
			ruta+=params;
		}
		if (!onSuccess) {
			return {open : function(){
				window.open(ruta);
			}};
		}
		base.http.get(ruta, {responseType : 'json', headers : headers}).subscribe((js:any) =>{
			if (js.success === 1) {
				onSuccess();
			}
			else if (js.success === 2) {
				onError(new RequestError(js.code, js.mensaje, TipoError.ERROR));
			}
			else if (js.success === 3) {
				onError(new RequestError(-1, js.mensaje, TipoError.UNAUTHORIZED));
			}
			else{
				onError(new RequestError(-1, js.mensaje, TipoError.SERVER_ERROR));
			}
		}, error =>{
			console.log(error);
			onError(new RequestError(-1, error.statusText, TipoError.SERVER_ERROR));
		});
	}
	/**
	* /api/cart/createCart
	**/
	static createCart(base : NetworkBase,onSuccess: (r:CartNormal)=> void ,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/cart/createCart";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		if (params) {
			ruta+=params;
		}
		if (!onSuccess) {
			return {open : function(){
				window.open(ruta);
			}};
		}
		base.http.get(ruta, {responseType : 'json', headers : headers}).subscribe((js:any) =>{
			if (js.success === 1) {
				onSuccess(Cart.fromJsonNormal(js.r as any));
			}
			else if (js.success === 2) {
				onError(new RequestError(js.code, js.mensaje, TipoError.ERROR));
			}
			else if (js.success === 3) {
				onError(new RequestError(-1, js.mensaje, TipoError.UNAUTHORIZED));
			}
			else{
				onError(new RequestError(-1, js.mensaje, TipoError.SERVER_ERROR));
			}
		}, error =>{
			console.log(error);
			onError(new RequestError(-1, error.statusText, TipoError.SERVER_ERROR));
		});
	}
	/**
	* /api/cart/getCart
	**/
	static getCart(base : NetworkBase,id:number,onSuccess: (r:CartNormal)=> void ,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/cart/getCart";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		params = (params===null?"?":(params + "&")) + "id=" + String(id);
		if (params) {
			ruta+=params;
		}
		if (!onSuccess) {
			return {open : function(){
				window.open(ruta);
			}};
		}
		base.http.get(ruta, {responseType : 'json', headers : headers}).subscribe((js:any) =>{
			if (js.success === 1) {
				onSuccess(Cart.fromJsonNormal(js.r as any));
			}
			else if (js.success === 2) {
				onError(new RequestError(js.code, js.mensaje, TipoError.ERROR));
			}
			else if (js.success === 3) {
				onError(new RequestError(-1, js.mensaje, TipoError.UNAUTHORIZED));
			}
			else{
				onError(new RequestError(-1, js.mensaje, TipoError.SERVER_ERROR));
			}
		}, error =>{
			console.log(error);
			onError(new RequestError(-1, error.statusText, TipoError.SERVER_ERROR));
		});
	}
	/**
	* /api/cart/listFavorites
	**/
	static listFavorites(base : NetworkBase,cartId:number,onSuccess: (r:ProductNormal[])=> void ,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/cart/listFavorites";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		params = (params===null?"?":(params + "&")) + "cartId=" + String(cartId);
		if (params) {
			ruta+=params;
		}
		if (!onSuccess) {
			return {open : function(){
				window.open(ruta);
			}};
		}
		base.http.get(ruta, {responseType : 'json', headers : headers}).subscribe((js:any) =>{
			if (js.success === 1) {
				let _array : any[] = js.r;
				var _lista : ProductNormal[]=[];
				for( let e of _array){
					_lista.push(Product.fromJsonNormal(e));
				}
				onSuccess(_lista)
			}
			else if (js.success === 2) {
				onError(new RequestError(js.code, js.mensaje, TipoError.ERROR));
			}
			else if (js.success === 3) {
				onError(new RequestError(-1, js.mensaje, TipoError.UNAUTHORIZED));
			}
			else{
				onError(new RequestError(-1, js.mensaje, TipoError.SERVER_ERROR));
			}
		}, error =>{
			console.log(error);
			onError(new RequestError(-1, error.statusText, TipoError.SERVER_ERROR));
		});
	}
}
import {Cart} from "../entities/Cart";
import {CartNormal} from "../entities/CartNormal";
import {Product} from "../entities/Product";
import {ProductNormal} from "../entities/ProductNormal";
