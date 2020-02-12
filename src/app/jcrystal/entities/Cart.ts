import {JSONUtils} from "../JSONUtils";
import {Injectable} from "@angular/core";
import {CartNormal} from "./CartNormal"
declare var moment: any;
export class Cart implements CartNormal{
	public id:number;
	public items:number[];
	public subtotal : number = 0;
	public total : number = 0;
	public favorites:number[];
	/* EXTENSIONS */
	/* END */
	constructor(){
	}
	setId(id: number){
		this.id = id;
	}
	getId() : number{
		return this.id;
	}
	setItems(items: number[]){
		this.items = items;
	}
	getItems() : number[]{
		return this.items;
	}
	setSubtotal(subtotal: number){
		this.subtotal = subtotal;
	}
	getSubtotal() : number{
		return this.subtotal;
	}
	setTotal(total: number){
		this.total = total;
	}
	getTotal() : number{
		return this.total;
	}
	setFavorites(favorites: number[]){
		this.favorites = favorites;
	}
	getFavorites() : number[]{
		return this.favorites;
	}
	public toJson():any{
		let __ret : any = {};
		let val0 = this.id;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.id = val0;
		}
		let val1 = this.items;
		if (typeof(val1) !== 'undefined' && val1 !== null) {
			__ret.items = val1;
		}
		__ret.subtotal = this.subtotal;
		__ret.total = this.total;
		let val4 = this.favorites;
		if (typeof(val4) !== 'undefined' && val4 !== null) {
			__ret.favorites = val4;
		}
		return __ret;
	}
	public static toJsonCart(lista : Cart[]):any{
		return lista.map(valor=>valor.toJson());
	}
	public toJsonNormal():any{
		let __ret : any = {};
		let val0 = this.id;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.id = val0;
		}
		let val1 = this.items;
		if (typeof(val1) !== 'undefined' && val1 !== null) {
			__ret.items = val1;
		}
		__ret.subtotal = this.subtotal;
		__ret.total = this.total;
		let val4 = this.favorites;
		if (typeof(val4) !== 'undefined' && val4 !== null) {
			__ret.favorites = val4;
		}
		return __ret;
	}
	public static toJsonNormalCart(lista : CartNormal[]):any{
		return lista.map(valor=>(valor as Cart).toJson());
	}
	public static fromJsonNormal(json : any):Cart{
		if (!json) {return null;}
		let ret = new Cart();
		ret.id = (json.id as number);
		let $Arrayitems = json.items as any[];
		if ($Arrayitems) {
			ret.items = [];
			for(let $temp of $Arrayitems){
				ret.items.push($temp as number);
			}
		}
		ret.subtotal = (json.subtotal as number);
		ret.total = (json.total as number);
		let $Arrayfavorites = json.favorites as any[];
		if ($Arrayfavorites) {
			ret.favorites = [];
			for(let $temp of $Arrayfavorites){
				ret.favorites.push($temp as number);
			}
		}
		return ret;
	}
	public static listFromJsonNormal(json : any[]):CartNormal[]{
		return json.map(this.fromJsonNormal);
	}
	store(key : string){
		localStorage.setItem( key, JSON.stringify(this));
	}
	public static retrieve(key : string){
		var ret = localStorage.getItem(key);
		if (ret != null) {
			return JSON.parse(ret) as Cart;
		}
		return null;
	}
}
export module Cart{
	export class Sort{
	}
	export class MapList{
		public static ById<T extends CartNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.id, i]}));
		}
	}
	export class Group{
		public static ById<T extends CartNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.id);
				if (!list) {
					map.set(e.id, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
	}
}
