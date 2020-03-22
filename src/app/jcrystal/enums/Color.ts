export class Color{
	public static RED = new Color(1000, 'RED');
	public static BLUE = new Color(2000, 'BLUE');
	public static YELLOW = new Color(3000, 'YELLOW');
	public constructor(public id : number, public rawName : string){}
	static getFromId(id : number) : Color{
		if (1000 == id) {return Color.RED}
		if (2000 == id) {return Color.BLUE}
		if (3000 == id) {return Color.YELLOW}
	}
	static values = [Color.RED, Color.BLUE, Color.YELLOW];
}
