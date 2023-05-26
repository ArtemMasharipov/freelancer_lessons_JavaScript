//Homework_lesson_22. Inheritance. Handling exceptional situations (errors).
"use strict";
// ================================================================
// --------------------------Задача 1------------------------------
// ================================================================
// Створити клас Client
// Властивості:
//  - ID
//  - ПІБ
//  - Кількість грошей на рахунку
// Методи:
//  - Додавання грошей
//  - Зняття грошей
//  - ToString

// На основі цього класу створити клас GoldenClient
// Властивості:
//  - ID
//  - ПІБ
//  - Кількість грошей на рахунку
//  - Ліміт кредитних коштів
//  - Відсоток за використання кредитних коштів
// Методи:
//  - Додавання грошей
//  - Зняття грошей
//  - Визначення пені за використання кредитних коштів
//  - ToString

// Створити клас Bank, у якому зберігається масив клієнтів.
// Виконати такі операції:
//  - Вивести усіх простих клієнтів;
//  - Вивести усіх клієнтів GoldenClient;
//  - Знайти сумарну кількість грошей на рахунку;
// ================================================================
class CreditLimitExceededError extends Error {
	constructor(message) {
		super(message);
		this.name = "CreditLimitExceededError";
	}
}

class InsufficientFundsError extends Error {
	constructor(message) {
		super(message);
		this.name = "InsufficientFundsError";
	}
}

class Client {
	constructor(ID, name, balance) {
		this.ID = ID;
		this.name = name;
		this.balance = balance;
	}

	addMoney(amount) {
		this.balance += amount;
	}

	withdrawMoney(amount) {
		if (this.balance - amount >= 0) {
			this.balance -= amount;
		} else {
			throw new InsufficientFundsError("Insufficient funds.");
		}
	}

	toString() {
		return `Client: ID=${this.ID}, Name=${this.name}, Balance=${this.balance}`;
	}
}

class GoldenClient extends Client {
	constructor(ID, name, balance, creditLimit, interestRate) {
		super(ID, name, balance);
		this.creditLimit = creditLimit;
		this.interestRate = interestRate;
	}

	withdrawMoney(withdrawAmount) {
		const availableFunds = this.balance + this.creditLimit;
		if (availableFunds >= withdrawAmount) {
			if (this.balance >= withdrawAmount) {
				this.balance -= withdrawAmount;
			} else {
				const remainingCreditFunds = availableFunds - withdrawAmount;
				this.balance = 0;
				this.usedCreditFunds = this.creditLimit - remainingCreditFunds;
			}
		} else {
			throw new CreditLimitExceededError("Amount exceeds available funds.");
		}
	}

	calculatePenalty(days) {
		if (this.usedCreditFunds > this.creditLimit) {
			throw new CreditLimitExceededError("Amount used exceeds credit limit.");
		}

		const penalty = this.usedCreditFunds * this.interestRate * days;
		return penalty > 0 ? penalty : 0;
	}

	toString() {
		return `GoldenClient: ID=${this.ID}, Name=${this.name}, Balance=${this.balance}, Credit Limit=${this.creditLimit}, Interest Rate=${this.interestRate}`;
	}
}

class Bank {
	constructor() {
		this.clients = [];
	}

	addClient(client) {
		this.clients.push(client);
	}

	getAllClients() {
		return this.clients;
	}

	getSimpleClients() {
		return this.clients.filter(client => !(client instanceof GoldenClient));
	}

	getGoldenClients() {
		return this.clients.filter(client => client instanceof GoldenClient);
	}

	getTotalBalance() {
		let totalBalance = 0;
		for (const client of this.clients) {
			totalBalance += client.balance;
		}
		return totalBalance;
	}
}

// Приклад використання
console.log('------------------------------------------------Задача 1------------------------------------------------');

const bank = new Bank();

const client1 = new Client(1, "John Doe", 1000);
const client2 = new GoldenClient(2, "Jane Smith", 2000, 5000, 0.05);

bank.addClient(client1);
bank.addClient(client2);

console.log("All Clients:");
console.log(bank.getAllClients());

console.log("Simple Clients:");
console.log(bank.getSimpleClients());

console.log("Golden Clients:");
console.log(bank.getGoldenClients());

console.log(`Total Balance: ${bank.getTotalBalance()}`);
// ================================================================
// --------------------------Задача 2------------------------------
// ================================================================
// Задача. Розробити Класи

// House
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

// Dog
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

// Bird
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)

// Подумайте яким має бути спільний клас предок.
// ================================================================
class Creature {
	constructor(options) {
		this.x = options.x;
		this.y = options.y;
		this.imagePath = options.imagePath;
		this.container = options.container;
		this.element = null;
	}

	generateMarkup() {
		const imageContainer = document.createElement('div');
		imageContainer.classList.add('image-container');
		this.container.appendChild(imageContainer);

		const element = document.createElement('img');
		element.src = this.imagePath;
		element.classList.add('creature-image');
		element.style.left = `${this.x}px`;
		element.style.top = `${this.y}px`;
		imageContainer.appendChild(element);
		this.element = element;
	}
}

class House extends Creature {
	constructor(options, scale = 1) {
		super(options);
		this.scale = scale;
		this.minScale = options.minScale;
		this.maxScale = options.maxScale;
		this.scaleStep = options.scaleStep;
		this.updateInterval = options.updateInterval;
	}

	update() {
		this.scale += this.scaleStep;

		if (this.scale > this.maxScale || this.scale < this.minScale) {
			this.scaleStep = -this.scaleStep;
		}

		this.element.style.transform = `scale(${this.scale})`;
	}
}

class Dog extends Creature {
	constructor(options) {
		super(options);
		this.maxHorizontalShift = options.maxHorizontalShift;
		this.updateInterval = options.updateInterval;
	}

	update() {
		const shift = Math.floor(Math.random() * (this.maxHorizontalShift * 2 + 1)) - this.maxHorizontalShift;
		this.x += shift;
		this.element.style.left = `${this.x}px`;
	}
}

class Bird extends Creature {
	constructor(options) {
		super(options);
		this.maxShift = options.maxShift;
		this.updateInterval = options.updateInterval;
	}

	update() {
		const shiftX = Math.floor(Math.random() * (this.maxShift * 2 + 1)) - this.maxShift;
		const shiftY = Math.floor(Math.random() * (this.maxShift * 2 + 1)) - this.maxShift;
		this.x += shiftX;
		this.y += shiftY;
		this.element.style.left = `${this.x}px`;
		this.element.style.top = `${this.y}px`;
	}
}

const containerTaskTwo = document.getElementById('creature-container');

const houseOptions = {
	x: 0,
	y: 0,
	imagePath: './img/house.jpg',
	container: containerTaskTwo,
	minScale: 0.85,
	maxScale: 1,
	scaleStep: 0.05,
	updateInterval: 200
};
const house = new House(houseOptions);
house.generateMarkup();

const dogOptions = {
	x: 0,
	y: 0,
	imagePath: './img/dog.jpg',
	container: containerTaskTwo,
	maxHorizontalShift: 5,
	updateInterval: 100
};
const dog = new Dog(dogOptions);
dog.generateMarkup();

const birdOptions = {
	x: 0,
	y: 0,
	imagePath: './img/hummingbird.jpg',
	container: containerTaskTwo,
	maxShift: 5,
	updateInterval: 150
};
const bird = new Bird(birdOptions);
bird.generateMarkup();

const creatures = [house, dog, bird];

creatures.forEach(creature => {
	setInterval(() => {
		creature.update();
	}, creature.updateInterval);
});


// ================================================================
// --------------------------Задача 3------------------------------
// ================================================================
// Користувач задає місяць навчання учня (перевіряти чи є числом, 
// чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, 
// чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо 
// оцінка погана і це не останній місяць у семестрі) . Обробку усіх 
// помилок зробити з використанням відповідних класів.
// ================================================================
class InvalidMonthError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidMonthError";
	}
}

class InvalidGradeError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidGradeError";
	}
}

class EvaluationSystem {
	constructor(containerId, vacationMonths = [7, 8]) {
		this.monthInput = null;
		this.gradeInput = null;
		this.container = document.getElementById(containerId);
		this.vacationMonths = vacationMonths;
	}

	createInputs(monthLabelTxt = "Місяць навчання (1-12): ", gradeLabelTxt = "Оцінка (1-100): ") {
		// Створення поля вводу для місяця
		const monthLabel = document.createElement('label');
		monthLabel.textContent = monthLabelTxt;
		this.monthInput = document.createElement('input');
		this.monthInput.type = 'number';
		monthLabel.appendChild(this.monthInput);
		this.container.appendChild(monthLabel);

		// Створення поля вводу для оцінки
		const gradeLabel = document.createElement('label');
		gradeLabel.textContent = gradeLabelTxt;
		this.gradeInput = document.createElement('input');
		this.gradeInput.type = 'number';
		gradeLabel.appendChild(this.gradeInput);
		this.container.appendChild(gradeLabel);
	}

	validateMonth(month) {
		const parsedMonth = parseInt(month);

		if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) {
			throw new InvalidMonthError("Недійсний місяць навчання.");
		}

		// Перевірка, чи не є місяць канікулами
		if (this.vacationMonths.includes(parsedMonth)) {
			throw new InvalidMonthError("Місяць є канікулами.");
		}

		return parsedMonth;
	}

	validateGrade(grade) {
		const parsedGrade = parseInt(grade);

		if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 100) {
			throw new InvalidGradeError("Недійсна оцінка.");
		}

		return parsedGrade;
	}

	checkEvaluation(month, grade, passingGrade = 60) {
		try {
			const validatedMonth = this.validateMonth(month);
			const validatedGrade = this.validateGrade(grade);

			// Перевірка, чи можна виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі)
			if (validatedGrade < passingGrade && validatedMonth < 12) {
				alert("Ви можете виправити оцінку.");
			} else {
				alert("Ви не можете виправити оцінку.");
			}
		} catch (error) {
			alert(error.message);
		}
	}
}

// Створення екземпляру EvaluationSystem з передачею ідентифікатора контейнера
const taskThreeContainer = document.getElementById("taskThreeContainer")
const evaluationSystem = new EvaluationSystem('taskThreeContainer', [7, 8]);
evaluationSystem.createInputs("Місяць навчання (1-12): ", "Оцінка (1-100): ");

// Додавання кнопки для перевірки оцінки
const checkButton = document.createElement('button');
checkButton.textContent = "Перевірити";
checkButton.addEventListener('click', () => {
	const month = evaluationSystem.monthInput.value;
	const grade = evaluationSystem.gradeInput.value;
	evaluationSystem.checkEvaluation(month, grade, 60);
});
evaluationSystem.container.appendChild(checkButton);

