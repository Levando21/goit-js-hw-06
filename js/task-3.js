/** @format */

class StringBuilder {
	constructor(initialValue) {
		this.value = initialValue;
	}

	getValue() {
		return this.value;
	}

	padStart(str) {
		this.value = str + this.value;
	}

	padEnd(str) {
		this.value = this.value + str;
	}

	padBoth(str) {
		this.value = str + this.value + str;
	}
}

const newString = new StringBuilder(".");

console.log(newString.getValue());

newString.padStart("*");
console.log(newString.getValue());

newString.padEnd("*");
console.log(newString.getValue());

newString.padBoth("?");
console.log(newString.getValue());
