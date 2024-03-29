//Homework_lesson_25. Iterators. Generators. Asynchronous processing. fetch
"use strict";
// ================================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення 
// до string, при якому на основі номера виводиться оператор 
// (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
// ================================================================
console.log('---------------------Задача 1------------------------');

class PhoneNumber {
	constructor(number, operators = {}) {
		this.number = number;
		this.operators = operators;
	}

	addOperator(prefix, operatorName) {
		this.operators[prefix] = operatorName;
	}

	removeOperator(prefix) {
		if (this.operators.hasOwnProperty(prefix)) {
			delete this.operators[prefix];
		}
	}

	[Symbol.toPrimitive](hint) {
		switch (hint) {
			case 'string':
				return this.getOperator();
			case 'number':
				return Number(this.number);
			default:
				return this.number;
		}
	}

	getOperator() {
		for (let prefix in this.operators) {
			if (this.number.startsWith(prefix)) {
				return this.operators[prefix];
			}
		}
		return 'Unknown Operator';
	}
}

// Приклад використання:
const operators = {
	'050': 'MTC',
	'096': 'Kyivstar'
};

const phoneNumber = new PhoneNumber('0501234567', operators);
phoneNumber.addOperator('091', 'New Operator');
console.log(String(phoneNumber)); 
// ================================================================
// Задача 2. Дано Shop  -- клас, що містить список товарів (масив 
// об’єктів класу Product (назва, ціна, кількість одиниць). Додати 
// можливість ітератора до класу Shop, щоб при ітеруванні для 
// кожного елмента виводився рядок «товар-загальна вартість»
// ================================================================
console.log('---------------------Задача 2------------------------');

class Product {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	[Symbol.toPrimitive](hint) {
		switch (hint) {
			case 'string':
				return `${this.name} - ${this.price * this.quantity} uah;`;
			case 'number':
				return this.price * this.quantity;
			default:
				return this.price * this.quantity;
		}
	}
}

class Shop {
	constructor(products) {
		this.products = products;
	}

	[Symbol.iterator]() {
		let currentIndex = 0;
		const products = this.products;

		return {
			next() {
				if (currentIndex < products.length) {
					const currentProduct = products[currentIndex];
					currentIndex++;

					return { value: currentProduct, done: false };
				}

				return { done: true };
			}
		};
	}
}

// Приклад використання:
const products = [
	new Product("Товар 1", 10, 2),
	new Product("Товар 2", 20, 3),
	new Product("Товар 3", 5, 1)
];

const shop = new Shop(products);

console.log('Товар - загальна вартість:')
for (const product of shop) {
	console.log(String(product));
}
// ================================================================
// Задача 3. Створити генератор, який би випадковим чином поступово 
// генерував вказану кількість парних чисел.
// ================================================================
console.log('---------------------Задача 3------------------------');

class RandomEvenNumbersGenerator {
	constructor(minRange, maxRange, count) {
		this.minRange = minRange;
		this.maxRange = maxRange;
		this.count = count;
		this.generatedCount = 0;
	}

	*generate() {
		while (this.generatedCount < this.count) {
			const randomNumber = this.getRandomNumber();
			if (this.isEven(randomNumber)) {
				yield randomNumber;
				this.generatedCount++;
			}
		}
	}

	getRandomNumber() {
		return Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
	}

	isEven(number) {
		return number % 2 === 0;
	}
}

const minRange = 2;
const maxRange = 100;
const count = 5;

const generator = new RandomEvenNumbersGenerator(minRange, maxRange, count);
const numbers = [...generator.generate()];
console.log(numbers);
// ================================================================
// Задача 4. Використовуючи один з АРІ 
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// ================================================================
class DataFetcher {
	constructor(apiUrl, containerElement) {
		this.apiUrl = apiUrl;
		this.containerElement = containerElement;
	}

	async fetchData() {
		try {
			const response = await fetch(this.apiUrl);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();

			this.displayImage(data.message);
			this.displayBreedName(data.message);
		} catch (error) {
			console.error(error);
		}
	}

	displayImage(imageUrl) {
		const imageElement = document.createElement('img');
		imageElement.src = imageUrl;
		this.containerElement.appendChild(imageElement);
	}

	displayBreedName(imageUrl) {
		const breedName = this.extractBreedName(imageUrl);
		const breedNameElement = document.createElement('span');
		breedNameElement.textContent = `Breed: ${breedName.toUpperCase()}`;
		this.containerElement.appendChild(breedNameElement);
	}

	extractBreedName(imageUrl) {
		const regex = /breeds\/([^/]{2,})/;
		const match = imageUrl.match(regex);
		return match ? match[1] : 'Unknown Breed';
	}
}

const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const imageContainer = document.getElementById('image-container');
const dataFetcher = new DataFetcher(apiUrl, imageContainer);
dataFetcher.fetchData();
