import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs';
import {AppConfiguration} from "../../utils/app-configuration";
import { NetworkBase, defaultOnError, TipoError, RequestError } from '../services/NetworkBase';
export class ManagerContact{
	/**
	* /api/contact/contact
	**/
	static contact(base : NetworkBase,name:string,email:string,message:string,onSuccess: () => void,onError : (error : RequestError)=>void = defaultOnError){
		let params:string = null;
		let headers =  new HttpHeaders({'Content-Type': 'application/json'});
		let ruta:string = "http://crystalflash.appspot.com/api/contact/contact";
		if (base.onError) {
			onError = base.onError;
		}
		if(AppConfiguration.DEBUG)console.log("GET "+ruta);
		if (name) {
			params = (params===null?"?":(params + "&")) + "name=" + encodeURIComponent(name);
		}
		if (email) {
			params = (params===null?"?":(params + "&")) + "email=" + encodeURIComponent(email);
		}
		if (message) {
			params = (params===null?"?":(params + "&")) + "message=" + encodeURIComponent(message);
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
}
