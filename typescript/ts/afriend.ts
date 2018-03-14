class Friend {
	id: number;
	name: string;
	email: string;
	years: number;
	playsgames: boolean;

	constructor(id: number, name: string, email: string, years: number, playsgames: boolean) 
	{
		this.id = id;
		this.name = name;
		this.email = email;
		this.years = years;
		this.playsgames = playsgames;
	}

	printOut(): void {
		console.log(`id=${this.id}, name=${this.name}, email=${this.email}, years=${this.years}, 
			active=${this.playsgames}`)
		}
	}

let friends: Friend[] = [
	new Friend(1, "John", "johnny@coolstuff.com", 3, true), 
	new Friend(2, "Mary", "mare@newthings.com", 3, true),
	new Friend(3, "Jimmy", "james@funactivities.com", 3, true),
	new Friend(4, "George", "georgeo@funny.com", 4, true),
	new Friend(5, "Kyle", "kale@cooking.com", 5, true)
];

for(let friend of friends) {
	friend.printOut();
}



//let customer: Customer = new Customer(1, "Max", true, 10000);

//customer.printOut();

