/** @format */

class Storage {
	#items;

	constructor(arrItems) {
		this.#items = arrItems;
	}
	getItems() {
		return this.#items;
	}

	addItem(newItem) {
		return this.#items.push(newItem);
	}

	removeItem(itemToRemove) {
		this.#items.filter((item) => item !== itemToRemove);
	}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
