/* IMPORTS_EXTENSIONS */
/* END */
import {TokenNormal} from "./TokenNormal"
declare var moment: any;
export class Token implements TokenNormal{
	public token:string;
	public rol : number = 0;
	public user:number;
	/* EXTENSIONS */
	/* END */
	constructor(){
	}
	setToken(token: string){
		this.token = token;
	}
	getToken() : string{
		return this.token;
	}
	setRol(rol: number){
		this.rol = rol;
	}
	getRol() : number{
		return this.rol;
	}
	setUser(user: number){
		this.user = user;
	}
	getUser() : number{
		return this.user;
	}
	public toJson():any{
		let __ret : any = {};
		let val0 = this.token;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.token = val0;
		}
		__ret.rol = this.rol;
		let val2 = this.user;
		if (typeof(val2) !== 'undefined' && val2 !== null) {
			__ret.user = val2;
		}
		return __ret;
	}
	public static toJsonToken(lista : Token[]):any{
		return lista.map(valor=>valor.toJson());
	}
	public toJsonNormal():any{
		let __ret : any = {};
		let val0 = this.token;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.token = val0;
		}
		__ret.rol = this.rol;
		let val2 = this.user;
		if (typeof(val2) !== 'undefined' && val2 !== null) {
			__ret.user = val2;
		}
		return __ret;
	}
	public static toJsonNormalToken(lista : TokenNormal[]):any{
		return lista.map(valor=>(valor as Token).toJson());
	}
	public static fromJsonNormal(json : any):Token{
		if (!json) {return null;}
		let ret = new Token();
		ret.token = json.token as string;
		ret.rol = (json.rol as number);
		ret.user = (json.user as number);
		return ret;
	}
	public static listFromJsonNormal(json : any[]):TokenNormal[]{
		return json.map(this.fromJsonNormal);
	}
	public static session:Token;
	public static setSession(session:Token) : Token{
		window.sessionStorage.setItem('Token', JSON.stringify({
			token: session.token,
			rol: session.rol,
			user: session.user,
		}));
		Token.session=session;
		return session;
	}
	public static getTokenId():string {
		if (Token.session) {return Token.session.token;}
		else{ Token.getSession(); if(Token.session){return Token.session.token;}else{return null;}}
	}
	public static deleteSession(){
		Token.session=null;
		window.sessionStorage.removeItem('Token');
	}
	public static getSession():Token{
		if (window.sessionStorage.getItem('Token') != null) {
			Token.session = Token.fromJsonNormal(JSON.parse(window.sessionStorage.getItem('Token')));
			return Token.session;
		}
		Token.session = null;
		return null;
	}
	public static isAuthenticated():boolean{
		if (Token.session) {return true;}
		return false;
	}
	private static getCookie(name: string){
		let ca: Array<string> = document.cookie.split(';');
		let caLen: number = ca.length;
		let cookieName = name + "=";
		let c: string;
		for (let i: number = 0; i < caLen; i += 1){
			c = ca[i].replace(/^\s\+/g, "");
			c = c.trim();
			if (c.indexOf(cookieName) === 0) {
				return c.substring(cookieName.length, c.length);
			}
		}
	}
	private static deleteCookie(name:string){
		Token.setCookie(name,'',-1);
	}
	private static setCookie(name: string, value: string, expireDays: number, path: string = ""){
		 let d:Date = new Date();
		d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
		let expires:string = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");

	}
	store(key : string){
		localStorage.setItem( key, JSON.stringify(this));
	}
	public static retrieve(key : string){
		var ret = localStorage.getItem(key);
		if (ret != null) {
			return JSON.parse(ret) as Token;
		}
		return null;
	}
}
export module Token{
	export class Sort{
		public static ByToken<T extends TokenNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["token"] > b["token"]) ? 1 : ((b["token"] > a["token"]) ? -1 : 0)});
			return array;
		}
		public static ByToken_IgnCase<T extends TokenNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["token"].toLowerCase() > b["token"].toLowerCase()) ? 1 : ((b["token"].toLowerCase() > a["token"].toLowerCase()) ? -1 : 0)});
			return array;
		}
	}
	export class MapList{
		public static ByRol<T extends TokenNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.rol, i]}));
		}
	}
	export class Group{
		public static ByRol<T extends TokenNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.rol);
				if (!list) {
					map.set(e.rol, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
		public static ByUser<T extends TokenNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.user);
				if (!list) {
					map.set(e.user, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
	}
}
import {JSONUtils} from "../JSONUtils";
import {Injectable} from "@angular/core";
