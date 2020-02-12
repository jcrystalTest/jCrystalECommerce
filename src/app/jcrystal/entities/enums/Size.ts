export class Size{
	public static XS = new Size(1000, 'XS');
	public static S = new Size(2000, 'S');
	public static M = new Size(3000, 'M');
	public static L = new Size(4000, 'L');
	public static XL = new Size(5000, 'XL');
	public constructor(public id : number, public rawName : string){}
	static getFromId(id : number) : Size{
		if (1000 == id) {return Size.XS}
		if (2000 == id) {return Size.S}
		if (3000 == id) {return Size.M}
		if (4000 == id) {return Size.L}
		if (5000 == id) {return Size.XL}
	}
	static values = [Size.XS, Size.S, Size.M, Size.L, Size.XL];
}
