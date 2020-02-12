export class Categories{
	public static MEN = new Categories(1000, 'Men', 'MEN');
	public static WOMEN = new Categories(2000, 'Women', 'WOMEN');
	public static KIDS = new Categories(3000, 'Kids', 'KIDS');
	public constructor(public id : number, public name : string, public rawName : string){}
	static getFromId(id : number) : Categories{
		if (1000 == id) {return Categories.MEN}
		if (2000 == id) {return Categories.WOMEN}
		if (3000 == id) {return Categories.KIDS}
	}
	static values = [Categories.MEN, Categories.WOMEN, Categories.KIDS];
}
