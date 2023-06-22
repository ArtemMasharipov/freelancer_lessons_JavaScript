//Homework_lesson_25. Iterators. Generators. Asynchronous processing. fetch
"use strict";
// ================================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення 
// до string, при якому на основі номера виводиться оператор 
// (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
// ================================================================
console.log('---------------------Задача 1------------------------');

class PhoneNumber {
	constructor(number) {
		this.number = number;
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
		if (this.number.startsWith('050')) {
			return 'MTC';
		} else if (this.number.startsWith('096')) {
			return 'Kyivstar';
		} else {
			return 'Unknown Operator';
		}
	}
}

// Приклад використання:
const phoneNumber = new PhoneNumber('0501234567');

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

function* randomEvenNumbersGenerator(minRange, maxRange, count) {
	let generatedCount = 0;

	while (generatedCount < count) {
		const randomNumber = getRandomNumber(minRange, maxRange);

		if (isEven(randomNumber)) {
			yield randomNumber;
			generatedCount++;
		}
	}
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
	return number % 2 === 0;
}

const minRange = 2;
const maxRange = 100;
const count = 5;

const generator = randomEvenNumbersGenerator(minRange, maxRange, count);

const numbers = [...generator];
console.log(numbers);
// ================================================================
// Задача 4. Використовуючи один з АРІ 
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// ================================================================
// Функція для завантаження та відображення даних з API
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

// Виклик класу DataFetcher та функції fetchData
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const imageContainer = document.getElementById('image-container');
const dataFetcher = new DataFetcher(apiUrl, imageContainer);
dataFetcher.fetchData();







