//Homework_lesson_17. Static methods. Composition, aggregation.
"use strict";
// ================================================================
// 1. Створити клас, що дозволяє виконувати такі операції над масивами: 
// знаходження кількості додатних, кількості від’ємних, кількість 
// входжень деякого числа (статичні методи)
// ================================================================
console.log("--------------------Задача 1-------------------------")

class ArrayOperations {
	static countPositive(arr) {
		let count = 0;
		for (const num of arr) {
			if (num > 0) {
				count++;
			}
		}
		return count;
	}

	static countNegative(arr) {
		let count = 0;
		for (const num of arr) {
			if (num < 0) {
				count++;
			}
		}
		return count;
	}

	static countOccurrences(arr, matchingNum) {
		let count = 0;
		for (const n of arr) {
			if (n === matchingNum) {
				count++;
			}
		}
		return count;
	}
}

const arrTaskOne = [-2, -1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5];

console.log(`Кількість додатніх елементів: ${ArrayOperations.countPositive(arrTaskOne)}`);
console.log(`Кількість від’ємних елементів: ${ArrayOperations.countNegative(arrTaskOne)}`);
console.log(`Кількість входжень числа 2: ${ArrayOperations.countOccurrences(arrTaskOne, 2)}`);
console.log(`Кількість входжень числа 6: ${ArrayOperations.countOccurrences(arrTaskOne, 6)}`);
// ================================================================
// 2. Створити службове авто (водій, марка, номер). Створити клас таким 
// чином, щоб можна було створити тільки один екземпляр цього класу.
// ================================================================
console.log("--------------------Задача 2-------------------------")

class ServiceCar {

	static instance;
	constructor(driver, brand, carNumber) {
		if (ServiceCar.instance) {
			return ServiceCar.instance;
		}
		this.driver = driver;
		this.brand = brand;
		this.carNumber = carNumber;
		ServiceCar.instance = this;
	}

	toString() {
		return `Водій: ${this.driver}, Марка: ${this.brand}, Номер: ${this.carNumber}`;
	}
}

const car = new ServiceCar("John", "Toyota", "AA1234BB");
const anotherCar = new ServiceCar("Mike", "Honda", "BC5678DE");

console.log(car.toString());
console.log(anotherCar.toString());
console.log(car === anotherCar);
// ================================================================
// 3. Створити клас Нагадувач. Кожні вказані кількості секунд 
// (використати setInterval) програма нагадує про якусь подію 
// (це просто текст) і також виводиться порядковий номер скільки 
// раз вже нагадування було. Зробити так, щоб неможна було зробити 
// одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, 
// метод зміни повідомлення без зупинки таймера.
// ================================================================
class SingletonReminder {
	static instance;
	constructor(message, seconds) {
		if (SingletonReminder.instance) return SingletonReminder.instance;

		this.message = message;
		this.seconds = seconds;
		this.counter = 0;
		this.timerId = null;
		SingletonReminder.instance = this;
	}

	start() {
		this.timerId = setInterval(() => {
			this.counter++;
			console.log(`${this.counter}: ${this.message}`);
		}, this.seconds * 1000);
	}

	stop(time) {
		setTimeout(() => {
			clearInterval(this.timerId)
		}, time * 1000)
	}

	changeMessage(newMessage, time) {
		setTimeout(() => {
			this.message = newMessage;
		}, time * 1000)
	}
}

// const reminder = new SingletonReminder("Some event", 1);
// reminder.start();

// reminder.changeMessage("New event", 5);
// reminder.stop(10);
// ================================================================
// 4. Склад. База товарів, які зберігаються на складі: назва товару, 
// одиниця виміру, кількість, фірма виробник (назва, реєстраційний 
// номер). Організувати реєстрацію/відвантаження товарів, фільтрація
// за назвою товару, фільтрація за назвою фірми.
// ================================================================
console.log("--------------------Задача 4-------------------------")

class Product {
	constructor(title, unit, quantity, manufacturer) {
		this.title = title;
		this.unit = unit;
		this.quantity = quantity;
		this.manufacturer = manufacturer;
	}

	toString() {
		return `${this.title}, ${this.unit}, ${this.quantity}, ${this.manufacturer}`;
	}
}
// ----------------------------------------------------------------
class Manufacturer {
	constructor(name, registrationNumber) {
		this.name = name;
		this.registrationNumber = registrationNumber;
	}

	toString() {
		return `${this.name}, ${this.registrationNumber}`;
	}
}
// ----------------------------------------------------------------
class Warehouse {
	constructor() {
		this.products = [];
	}

	registerProduct(title, unit, quantity, manufacturerName, manufacturerRegistrationNumber) {
		const manufacturer = new Manufacturer(manufacturerName, manufacturerRegistrationNumber);
		const product = new Product(title, unit, quantity, manufacturer);
		this.products.push(product);
	}

	shipProduct(name, quantityToShip) {
		const product = this.products.find(product => product.name === name);
		if (product && product.quantity >= quantityToShip) {
			product.quantity -= quantityToShip;
			return true;
		}
		return false;
	}

	filterProductsByName(prodTitle) {
		return this.products.filter(product => product.title === prodTitle);
	}

	filterProductsByManufacturer(manufacturerName) {
		return this.products.filter(product => product.manufacturer.name === manufacturerName);
	}

	toString() {
		return this.products.map(product => product.toString()).join('\n');
	}
}
// ----------------------------------------------------------------
const warehouse = new Warehouse();

// реєструємо товари на складі
warehouse.registerProduct('Шоколад', 'шт', 100, 'АВК', '1234567890');
warehouse.registerProduct('Молоко', 'л', 50, 'Добряна', '0987654321');
warehouse.registerProduct('Йогурт', 'шт', 80, 'Добряна', '0987654321');

// виводимо товари на складі
console.log('Усі товари на складі:');
console.log(warehouse.toString());

// фільтрація товарів за назвою
console.log('Фільтрація продукту за назвою "Шоколад":');
console.log(warehouse.filterProductsByName('Шоколад'));

// фільтрація товарів за виробником
console.log('Фільтрація продукту виробником "Добряна":');
console.log(warehouse.filterProductsByManufacturer('Добряна'));
// ================================================================
// 5. Особиста бібліотека. Картотека домашньої бібліотеки: дані книги 
// (автори (піб, рік народження, короткий опис), назва книги, жанр, 
// видавництво (назва, реєстраційний номер, рік засування)). 
// Реалізувати розділи бібліотеки (спеціальна література, хобі, 
// домашнє господарство і т.д.), походження книги і наявність на 
// даний час. Організувати додавання/вилучення книг та  вибір 
// книг за назвою, за ПІБ автора, за видавництвом.
// ================================================================
console.log("--------------------Задача 5-------------------------")

class Author {
	constructor(fullName, yearOfBirth, description) {
		this.fullName = fullName;
		this.yearOfBirth = yearOfBirth;
		this.description = description;
	}

	toString() {
		return `Автор: ${this.fullName}, рік народження: ${this.yearOfBirth}, короткий опис: ${this.description}`;
	}
}
// ----------------------------------------------------------------
class Publisher {
	constructor(name, registrationNumber, yearEstablished) {
		this.name = name;
		this.registrationNumber = registrationNumber;
		this.yearEstablished = yearEstablished;
	}

	toString() {
		return `Видавництво: ${this.name}, реєстраційний номер: ${this.registrationNumber}, рік заснування: ${this.yearEstablished}`;
	}
}
// ----------------------------------------------------------------
class Book {
	constructor(author, title, genre, publisher, origin, available) {
		this.author = author;
		this.title = title;
		this.genre = genre;
		this.publisher = publisher;
		this.origin = origin;
		this.available = available;
	}

	toString() {
		return `${this.title} (${this.genre}), ${this.author}, ${this.publisher}, походження: ${this.origin}, наявність: ${this.available ? 'Є' : 'Немає'}`;
	}
}
// ----------------------------------------------------------------
class LibrarySection {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	// Додавання книги до розділу
	addBook(book) {
		this.books.push(book);
	}

	// Видалення книги з розділу
	removeBook(book) {
		const index = this.books.indexOf(book);
		if (index !== -1) {
			this.books.splice(index, 1);
		}
	}

	// Пошук книги за назвою
	findBookByTitle(title) {
		return this.books.find((book) => book.title === title);
	}

	// Пошук книг за ПІБ автора
	findBooksByAuthor(author) {
		return this.books.filter((book) => book.author.fullName === author.fullName);
	}

	// Пошук книг за видавництвом
	findBooksByPublisher(publisher) {
		return this.books.filter((book) => book.publisher === publisher);
	}

	// Оновлення наявності книги
	updateBookAvailability(book, available) {
		book.available = available;
	}

	// Форматування даних про розділ бібліотеки у вигляді рядка
	toString() {
		return `Розділ бібліотеки "${this.name}"`;
	}
}
// ----------------------------------------------------------------
const author1 = new Author('Іван Франко', 1856, 'український письменник, поет, перекладач, громадський діяч');
const publisher1 = new Publisher('Видавництво Старого Лева', '123456', 1991);
const book1 = new Book(author1, 'Захар Беркут', 'Історична повість', publisher1, 'Україна', true);

const author2 = new Author('Леся Українка', 1871, 'українська поетеса, драматургиня, громадська діячка');
const publisher2 = new Publisher('Видавництво А-БА-БА-ГА-ЛА-МА-ГА', '789012', 1993);
const book2 = new Book(author2, 'Лісова пісня', 'Драма', publisher2, 'Україна', true);

const author3 = new Author('Остап Вишня', 1889, 'український письменник, журналіст, публіцист');
const publisher3 = new Publisher('Видавництво Смолоскип', '345678', 1926);
const book3 = new Book(author3, 'Тестаментова химера', 'Сатира', publisher3, 'Україна', false);

const ukrainianLiterature = new LibrarySection('Українська література');
ukrainianLiterature.addBook(book1);
ukrainianLiterature.addBook(book2);
ukrainianLiterature.addBook(book3);

// Додавання книг до розділу
console.log(`Додано книгу "${book1.title}" до розділу "${ukrainianLiterature.name}"`);
ukrainianLiterature.addBook(book1);
console.log(`Додано книгу "${book2.title}" до розділу "${ukrainianLiterature.name}"`);
ukrainianLiterature.addBook(book2);
console.log(`Додано книгу "${book3.title}" до розділу "${ukrainianLiterature.name}"`);
ukrainianLiterature.addBook(book3);

// Видалення книги з розділу
console.log(`Видалено книгу "${book2.title}" з розділу "${ukrainianLiterature.name}"`);
ukrainianLiterature.removeBook(book2);

// Пошук книги за назвою
console.log(`Книга з назвою "${book1.title}" була знайдена:`, ukrainianLiterature.findBookByTitle(book1.title));

// Пошук книг за ПІБ автора
console.log(`Книги з автором "${author2.fullName}" були знайдені:`, ukrainianLiterature.findBooksByAuthor(author2));

// Пошук книг за видавництвом
console.log(`Книги з видавництвом "${publisher3.name}" були знайдені:`, ukrainianLiterature.findBooksByPublisher(publisher3));

// Оновлення наявності книги
console.log(`Книга "${book1.title}" була оновлена на наявність:`, !book1.available);
ukrainianLiterature.updateBookAvailability(book1, false);
// ================================================================
// 6. Дано два класи MultChecker (клас для перевірки таблиці
// множення - рандомно генеруються числа, які треба перемножати),
// AddChecker (клас для перевірки додавання - рандомно генеруються
// числа у заданому діапазоні, які треба додавати). Обидва класи
// надсилають результати тестування об'єкту класу Hystory, який
// зберігає історію тестування у масиві у вигляді об'єктів

// Приклад.
// testsList= [
// {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
// {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]

// Можна створити окремий клас TestData, який описує один такий
// тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за
// допомогою таймера періодично генерує якісь N задач (рандомно
// вибираємо, що опитувати: додавання чи множення) і проводить
// опитування. Результати тестування додаються в об’єкт History.
// Зробити так, щоб об'єкт такого класу можна було створити тільки
// один. Коли зроблено ці N задач вивести усю історію на екран.
// ================================================================
console.log("--------------------Задача 6-------------------------")

class History {
	static instance;
	constructor() {
		if (History.instance) {
			return History.instance;
		}
		this.testsList = [];
		History.instance = this;
	}

	add(testData) {
		this.testsList.push(testData);
	}

	show() {
		console.log("Test List History:");
		console.log(this.testsList);
	}
}

class TestData {
	constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
		this.operation = operation;
		this.userAnswer = userAnswer;
		this.correctAnswer = correctAnswer;
	}
}

class Checker {
	constructor(firstNum, secondNum, operation) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
		this.operation = operation;
		this.correctAnswer = operation === '*' ? firstNum * secondNum : firstNum + secondNum;
	}

	getProblem() {
		return `${this.firstNum} ${this.operation} ${this.secondNum} = ?`;
	}

	checkAnswer(userAnswer) {
		const isCorrect = userAnswer == this.correctAnswer;
		return { userAnswer, isCorrect, correctAnswer: this.correctAnswer };
	}
}

class TestManager {
	constructor() {
		this.history = new History();
	}

	runTests(n) {
		let i = 0;
		const interval = setInterval(() => {
			const { firstNum, secondNum, operation } = this.generateTest();
			const checker = new Checker(firstNum, secondNum, operation);
			const userAnswer = prompt(checker.getProblem());
			const result = checker.checkAnswer(userAnswer);
			const testData = new TestData(
				firstNum,
				secondNum,
				operation,
				userAnswer,
				result.correctAnswer
			);
			this.history.add(testData);

			if (++i >= n) {
				clearInterval(interval);
				this.history.show();
			}
		}, 5000);
	}

	generateTest() {
		const operation = Math.random() > 0.5 ? '*' : '+';
		const firstNum = Math.floor(Math.random() * 10) + 1;
		const secondNum = Math.floor(Math.random() * 10) + 1;
		return { firstNum, secondNum, operation };
	}
}

// const testManager = new TestManager();
// testManager.runTests(3);
