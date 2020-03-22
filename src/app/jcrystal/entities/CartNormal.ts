export interface CartNormal{
	id : number;
	setId(id : number);
	getId() : number;
	items : number[];
	setItems(items : number[]);
	getItems() : number[];
	subtotal : number;
	setSubtotal(subtotal : number);
	getSubtotal() : number;
	total : number;
	setTotal(total : number);
	getTotal() : number;
	favorites : number[];
	setFavorites(favorites : number[]);
	getFavorites() : number[];
}
