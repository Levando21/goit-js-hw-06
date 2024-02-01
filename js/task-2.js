/** @format */

class Storage {
	constructor(items) {
		this.items = items;
	}
	getItems() {
		return this.items;
	}

	addItem(newItem) {
		return this.items.push(newItem);
	}

	removeItem(itemToRemove) {
		const indexToRemove = this.items.indexOf(itemToRemove);

		let newArr = this.items
			.slice(0, indexToRemove)
			.concat(this.items.slice(2, 4));
		return newArr;
	}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//я використовую метод slice разом з indexOf, проте чогось не можу порізати масив. Сhat GPT видає мені метод splice для використання проте я не розумію чому саме його
