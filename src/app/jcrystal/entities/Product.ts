import {JSONUtils} from "../JSONUtils";
import {Injectable} from "@angular/core";
import {ProductNormal} from "./ProductNormal"
declare var moment: any;
export class Product implements ProductNormal{
	public id:number;
	public name:string;
	public description:string;
	public category:number;
	public price : number = 0;
	public discount : number = 0;
	public oldPrice : number = 0;
	public color:number;
	public size:number;
	public image:string;
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
	setName(name: string){
		this.name = name;
	}
	getName() : string{
		return this.name;
	}
	setDescription(description: string){
		this.description = description;
	}
	getDescription() : string{
		return this.description;
	}
	setCategory(category: Categories){
		this.category = category==null ? 0 : category.id;
	}
	getCategory() : Categories{
		return Categories.getFromId(this.category);
	}
	setPrice(price: number){
		this.price = price;
	}
	getPrice() : number{
		return this.price;
	}
	setDiscount(discount: number){
		this.discount = discount;
	}
	getDiscount() : number{
		return this.discount;
	}
	setOldPrice(oldPrice: number){
		this.oldPrice = oldPrice;
	}
	getOldPrice() : number{
		return this.oldPrice;
	}
	setColor(color: Color){
		this.color = color==null ? 0 : color.id;
	}
	getColor() : Color{
		return Color.getFromId(this.color);
	}
	setSize(size: Size){
		this.size = size==null ? 0 : size.id;
	}
	getSize() : Size{
		return Size.getFromId(this.size);
	}
	setImage(image: string){
		this.image = image;
	}
	getImage() : string{
		return this.image;
	}
	public toJson():any{
		let __ret : any = {};
		let val0 = this.id;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.id = val0;
		}
		let val1 = this.name;
		if (typeof(val1) !== 'undefined' && val1 !== null) {
			__ret.name = val1;
		}
		let val2 = this.description;
		if (typeof(val2) !== 'undefined' && val2 !== null) {
			__ret.description = val2;
		}
		let val3 = this.category;
		if (typeof(val3) !== 'undefined' && val3 !== null) {
			__ret.category = val3;
		}
		__ret.price = this.price;
		__ret.discount = this.discount;
		__ret.oldPrice = this.oldPrice;
		let val7 = this.color;
		if (typeof(val7) !== 'undefined' && val7 !== null) {
			__ret.color = val7;
		}
		let val8 = this.size;
		if (typeof(val8) !== 'undefined' && val8 !== null) {
			__ret.size = val8;
		}
		let val9 = this.image;
		if (typeof(val9) !== 'undefined' && val9 !== null) {
			__ret.image = val9;
		}
		return __ret;
	}
	public static toJsonProduct(lista : Product[]):any{
		return lista.map(valor=>valor.toJson());
	}
	public toJsonNormal():any{
		let __ret : any = {};
		let val0 = this.id;
		if (typeof(val0) !== 'undefined' && val0 !== null) {
			__ret.id = val0;
		}
		let val1 = this.name;
		if (typeof(val1) !== 'undefined' && val1 !== null) {
			__ret.name = val1;
		}
		let val2 = this.description;
		if (typeof(val2) !== 'undefined' && val2 !== null) {
			__ret.description = val2;
		}
		let val3 = this.category;
		if (typeof(val3) !== 'undefined' && val3 !== null) {
			__ret.category = val3;
		}
		__ret.price = this.price;
		__ret.discount = this.discount;
		__ret.oldPrice = this.oldPrice;
		let val7 = this.color;
		if (typeof(val7) !== 'undefined' && val7 !== null) {
			__ret.color = val7;
		}
		let val8 = this.size;
		if (typeof(val8) !== 'undefined' && val8 !== null) {
			__ret.size = val8;
		}
		let val9 = this.image;
		if (typeof(val9) !== 'undefined' && val9 !== null) {
			__ret.image = val9;
		}
		return __ret;
	}
	public static toJsonNormalProduct(lista : ProductNormal[]):any{
		return lista.map(valor=>(valor as Product).toJson());
	}
	public static fromJsonNormal(json : any):Product{
		if (!json) {return null;}
		let ret = new Product();
		ret.id = (json.id as number);
		ret.name = json.name as string;
		ret.description = json.description as string;
		ret.category = json.category as number;
		ret.price = (json.price as number);
		ret.discount = (json.discount as number);
		ret.oldPrice = (json.oldPrice as number);
		ret.color = json.color as number;
		ret.size = json.size as number;
		ret.image = json.image as string;
		return ret;
	}
	public static listFromJsonNormal(json : any[]):ProductNormal[]{
		return json.map(this.fromJsonNormal);
	}
	store(key : string){
		localStorage.setItem( key, JSON.stringify(this));
	}
	public static retrieve(key : string){
		var ret = localStorage.getItem(key);
		if (ret != null) {
			return JSON.parse(ret) as Product;
		}
		return null;
	}
}
export module Product{
	export class Sort{
		public static ByName<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["name"] > b["name"]) ? 1 : ((b["name"] > a["name"]) ? -1 : 0)});
			return array;
		}
		public static ByName_IgnCase<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["name"].toLowerCase() > b["name"].toLowerCase()) ? 1 : ((b["name"].toLowerCase() > a["name"].toLowerCase()) ? -1 : 0)});
			return array;
		}
		public static ByDescription<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["description"] > b["description"]) ? 1 : ((b["description"] > a["description"]) ? -1 : 0)});
			return array;
		}
		public static ByDescription_IgnCase<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["description"].toLowerCase() > b["description"].toLowerCase()) ? 1 : ((b["description"].toLowerCase() > a["description"].toLowerCase()) ? -1 : 0)});
			return array;
		}
		public static ByImage<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["image"] > b["image"]) ? 1 : ((b["image"] > a["image"]) ? -1 : 0)});
			return array;
		}
		public static ByImage_IgnCase<T extends ProductNormal>(array:T[]):T[]{
			array.sort(function(a,b) {return (a["image"].toLowerCase() > b["image"].toLowerCase()) ? 1 : ((b["image"].toLowerCase() > a["image"].toLowerCase()) ? -1 : 0)});
			return array;
		}
	}
	export class MapList{
		public static ById<T extends ProductNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.id, i]}));
		}
		public static ByCategory<T extends ProductNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.category, i]}));
		}
		public static ByColor<T extends ProductNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.color, i]}));
		}
		public static BySize<T extends ProductNormal>(a:T[]):Map<number, T>{
			return new Map(a.map((i):[number,T] => {return [i.size, i]}));
		}
	}
	export class Group{
		public static ById<T extends ProductNormal>(a:T[]):Map<number, T[]>{
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
		public static ByCategory<T extends ProductNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.category);
				if (!list) {
					map.set(e.category, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
		public static ByColor<T extends ProductNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.color);
				if (!list) {
					map.set(e.color, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
		public static BySize<T extends ProductNormal>(a:T[]):Map<number, T[]>{
			const map = new Map();
			a.forEach(e=>{
				var list = map.get(e.size);
				if (!list) {
					map.set(e.size, [e]);
				}
				else{
					list.push(e);
				}
			});
			return map;
		}
	}
}
import {Categories} from "./enums/Categories";
import {Color} from "./enums/Color";
import {Size} from "./enums/Size";
