//Homework_lesson_15. Objects. Continuing.
"use strict";
// ================================================================
// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. 
// При цьому у одному з них є функція знаходження суми, а у іншому – 
// функція для знаходження добутку тих, які знаходяться між заданими 
// мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів 
// (використати call, apply)
// ================================================================
console.log("--------------------------------------------Задача 0");

const obj1 = {
	numbers: [1, 2, 3, 4, 5],
	objElementsTotalSum: function () {
		return this.numbers.reduce((totalSum, currElem) => totalSum + currElem, 0);
	}
};

const obj2 = {
	numbers: [2, 4, 6, 8, 10],
	objProductElementsBetweenMinAndMaxValue: function (minValue, maxValue) {
		return this.numbers.reduce((productRes, currElem) => currElem >= minValue && currElem <= maxValue ? productRes * currElem : productRes, 1);
	}
};

const sumResultObj1 = obj1.objElementsTotalSum();
const sumResultObj2Call = obj1.objElementsTotalSum.call(obj2);
const sumResultObj2Apply = obj1.objElementsTotalSum.apply(obj2);
const productBetweenResultObj2 = obj2.objProductElementsBetweenMinAndMaxValue(2, 6);
const productBetweenResultObj1Apply = obj2.objProductElementsBetweenMinAndMaxValue.apply(obj1, [2, 6]);
const productBetweenResultObj1Call = obj2.objProductElementsBetweenMinAndMaxValue.call(obj1, 2, 6);

console.log(`Сума чисел obj1: ${sumResultObj1}`);
console.log(`Сума чисел obj2 (call): ${sumResultObj2Call}`);
console.log(`Сума чисел obj2 (apply): ${sumResultObj2Apply}`);
console.log(`Добуток чисел між максимальним і мінімальним значеннями obj1 (apply): ${productBetweenResultObj1Apply}`);
console.log(`Добуток чисел між максимальним і мінімальним значеннями obj1 (call): ${productBetweenResultObj1Call}`);
console.log(`Добуток чисел між максимальним і мінімальним значеннями obj2: ${productBetweenResultObj2}`);
// ================================================================
// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо 
// у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості):
// - Масив, у якому зберігається поле з зайцями
// Методи (дії):
// - Метод пострілу (задається позиція пострілу)
// - Виведення ігрового поля
// ================================================================
console.log("--------------------------------------------Задача 1")

const Tir = {
	field: [],

	generateField: function () {
		for (let i = 0; i < 3; i++) {
			let row = [];
			for (let j = 0; j < 3; j++) {
				row.push(Math.round(Math.random()));
			}
			this.field.push(row);
		}
	},

	shoot: function (x, y) {
		if (this.field[x][y] === 1) {
			console.log("Ви влучили у зайця!");
			this.field[x][y] = 0; // видаляємо зайця з поля
		} else {
			console.log("На жаль, промахнулись.");
		}
	},

	printField: function () {
		console.log("Ігрове поле:");
		for (let i = 0; i < this.field.length; i++) {
			console.log(this.field[i].join(' '));
		}
	}
};

Tir.generateField(); // Генеруємо ігрове поле
Tir.printField(); // Виводимо початкове ігрове поле
Tir.shoot(1, 0); // Стріляємо по координатах (1,0)
Tir.printField(); // Виводимо оновлене ігрове поле
// ================================================================
// Задача 2. Створити об’єкт «Авто».
// Поля(властивості):
// - Марка
// - Розмір бака
// - Кількість наявних літрів
// - Кількість місць
// - Кількість пасажирів
// Методи (дії):
// - Заправка на вказану кількість літрів
// - Виведення кількості пасажирів
// - Додавання пасажирів
// - Висадка пасажирів
// ================================================================
console.log("--------------------------------------------Задача 2")

function Auto(brand, tankSize, fuelLevel, seatCount, passengerCount) {
	// Властивості авто
	this.brand = brand;
	this.tankSize = tankSize;
	this.fuelLevel = fuelLevel;
	this.seatCount = seatCount;
	this.passengerCount = passengerCount;
}

// Методи авто
// Заправка на вказану кількість літрів
Auto.prototype.refuel = function (liters) {
	if (liters < 0) throw new Error('Невірна кількість літрів для заправки');

	if (this.fuelLevel + liters > this.tankSize) throw new Error('Переповнення бака');

	this.fuelLevel += liters;
	console.log(`Заправлено: ${liters} літрів палива`);
	console.log(`Рівень палива: ${this.fuelLevel} літрів`);
};

// Виведення кількості пасажирів
Auto.prototype.showPassengerCount = function () {
	console.log(`Кількість пасажирів: ${this.passengerCount}`);
};

// Додавання пасажирів
Auto.prototype.addPassengers = function (count) {
	if (count < 0) throw new Error('Невірна кількість пасажирів');

	if (this.passengerCount + count > this.seatCount) throw new Error('Недостатньо місць для пасажирів');

	this.passengerCount += count;
	console.log(`Додано: ${count} пасажирів`);
};

// Висадка пасажирів
Auto.prototype.removePassengers = function (count) {
	if (count < 0) throw new Error('Невірна кількість пасажирів');

	if (this.passengerCount - count < 0) throw new Error('Неможливо висадити більше пасажирів, ніж наявно');

	this.passengerCount -= count;
	console.log(`Висаджено: ${count} пасажирів`);
};


// Приклад створення об'єкта авто
let car = new Auto('Toyota', 60, 30, 5, 2);

// Приклад використання методів об'єкта
console.log(car.brand);
car.showPassengerCount();
car.addPassengers(3);
car.removePassengers(1);
car.showPassengerCount();
car.refuel(20);
// ================================================================
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля:
// - Число, яке перевіряємо (наприклад, перевірка частини таблиці 
// множення на 7)
// - Кількість правильних відповідей
// - Кількість неправильних відповідей
// Методи:
// - Генерування прикладу (метод випадковим чином визначає 
// друге число, перше число фіксоване)
// - Перевірка правильності вказаної відповіді
// - render - виведення інформації про тестування на екран
// ================================================================
console.log("--------------------------------------------Задача 3")

class MultChecker {
	constructor(num) {
		this.num = num;
		this.correctAnswers = 0;
		this.incorrectAnswers = 0;
	}

	generateExample(minNum, maxNum) {
		do {
			const secondNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1)); 
			console.log(`Приклад: ${this.num} * ${secondNum} = ?`);
			const userAnswer = prompt(`Будь ласка, введіть результат множення ${this.num} на ${secondNum}`);
			this.checkAnswer(parseInt(userAnswer), secondNum);
		}
		while (confirm("Бажаєте продовжити перевірку?"))
	}

	checkAnswer(answer, secondNum) {
		if (answer === this.num * secondNum) {
			this.correctAnswers++;
			console.log('Правильно!');
		} else {
			this.incorrectAnswers++;
		}
	}

	render() {
		console.log(`Перевірка таблиці множення на ${this.num}`);
		console.log(`Правильних відповідей: ${this.correctAnswers}`);
		console.log(`Неправильних відповідей: ${this.incorrectAnswers}`);
	}
}

// Приклад використання класу
// const checker = new MultChecker(7);
// checker.generateExample(1, 10);
// checker.render();
// ================================================================
// Задача 4. Розробити клас Baner
// Поля:
// - Масив об’єктів ( графічних зображень та посилань на сайти)
// Методи:
// - Метод випадкового вибору об’єкта (графічного зображення та посилання)
// - Метод виведення випадкового банера
// ================================================================
class Banner {
	constructor(images) {
		this.images = images;
	}

	getRandomBanner() {
		const randomIndex = Math.floor(Math.random() * this.images.length);
		return this.images[randomIndex];
	}

	displayRandomBanner() {
		const { image, link } = this.getRandomBanner();
		const bannerElement = document.createElement('a');
		bannerElement.href = link;
		bannerElement.target = "_blank";
		bannerElement.innerHTML = `<img src="${image}" alt="Banner Image">`;
		document.body.appendChild(bannerElement);
	}
}

// Приклад використання класу
const images = [
	{ image: '../img/banner_js.png', link: 'https://uk.wikipedia.org/wiki/JavaScript' },
	{ image: '../img/banner_html.webp', link: 'https://uk.wikipedia.org/wiki/HTML' },
	{ image: '../img/banner_css.jpg', link: 'https://uk.wikipedia.org/wiki/CSS' },
];

// const banner = new Banner(images);
// banner.displayRandomBanner();
// ================================================================
// Задача 5. Розробити клас «Керівник танців»
// Поля:
// - Масив імен хлопців
// - Масив імен дівчат
// Методи:
// - Метод випадкового вибору імені хлопця
// - Метод випадкового вибору імені дівчини
// - Метод виведення пари для танців
// - Метод run , який ініціює через кожні 5 секунд виведення 
// нової пари для танців
// ================================================================
class DancePair {
	constructor(boysNames, girlsNames) {
		this.boysNames = boysNames;
		this.girlsNames = girlsNames;
	}

	getRandomBoyName() {
		const index = Math.floor(Math.random() * this.boysNames.length);
		return this.boysNames[index];
	}

	getRandomGirlName() {
		const index = Math.floor(Math.random() * this.girlsNames.length);
		return this.girlsNames[index];
	}

	displayRandomPair() {
		const boyName = this.getRandomBoyName();
		const girlName = this.getRandomGirlName();
		console.log(`${boyName} і ${girlName} - пара для танців!`);
	}

	run() {
		setInterval(() => {
			this.displayRandomPair();
		}, 5000);
	}
}

// Приклад використання класу
const boysNames = ["Іван", "Петро", "Микола", "Олександр", "Андрій"];
const girlsNames = ["Ірина", "Оксана", "Наталія", "Марія", "Вікторія"];
const dancePair = new DancePair(boysNames, girlsNames);
// dancePair.run();
// ================================================================
