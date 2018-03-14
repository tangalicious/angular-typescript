export class User {
	id: number;
	firstname: string;
	lastname: string;
	username: string;
	active: boolean;

	constructor(id: number, firstname: string, lastname: string, username: string, active: boolean) 
	{
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.active = active;
	}

	printOut(): void {
		console.log(`id=${this.id}, name=${this.firstname + " " + this.lastname}, username=${this.username}
			active=${this.active}`)
	}
}

let users: User[] = [
	new User(1, "John", "Tyler", "jaytee", true), 
	new User(2, "Mary", "Tyler", "maytree", true),
	new User(3, "Jimmy", "Johns", "jayjay", true),
	new User(4, "George", "Costanza", "GeeCee", true),
	new User(5, "Kyle", "James", "KayJay", true)

];

for(let user of users) {
	user.printOut();


}



//let customer: Customer = new Customer(1, "Max", true, 10000);

//customer.printOut();

