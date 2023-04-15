//Homework_lesson_16. Classes. Encapsulation.
"use strict";
// ================================================================
// Задача 1. Створити клас TDate для роботи із датами у форматі
// “день.місяць.рік”. Дата представляється структурою із трьома
// полями. Реалізувати методи збільшення/зменшення дати на певну
// кількість днів, місяців чи років. Введення та виведення дати
// реалізувати за допомогою методу  toString.
// ================================================================
console.log("--------------------Задача 1-------------------------")

class TDate {
	#day;
	#month;
	#year;

	constructor(day, month, year) {
		this.Year = year;
		this.Month = month;
		this.Day = day;
	}

	//------------------------ Гетери і сетери--------------------------
	get Day() {
		return this.#day;
	}

	set Day(dayVal) {
		const daysInMonth = this.getNumberOfDaysInMonth(this.Month);
		if (dayVal < 1 || dayVal > daysInMonth) throw new Error(`Некоректне значення дня для місяця ${this.Month}`);
		this.#day = dayVal;
	}

	get Month() {
		return this.#month;
	}

	set Month(monthVal) {
		if (monthVal < 1 || monthVal > 12) throw new Error("Некоректне значення місяця");
		this.#month = monthVal;
	}

	get Year() {
		return this.#year;
	}

	set Year(yearVal) {
		if (yearVal < 0) throw new Error('Рік не може бути від\'ємним');
		this.#year = yearVal;
	}
	// --------------------------Методи---------------------------------
	validateInput(value) {
		if (typeof value !== 'number' || isNaN(value) || value <= 0) throw new Error('Некоректне вхідне значення');
	}

	addDays(days) {
		this.validateInput(days);
		let currentDay = this.Day;
		let currentMonthDays = this.getNumberOfDaysInMonth(this.Month);
		currentDay += days;
		while (currentDay > currentMonthDays) {
			currentDay -= currentMonthDays;
			this.addMonths(1);
			currentMonthDays = this.getNumberOfDaysInMonth(this.Month);
		}
		this.Day = currentDay;
	}

	subtractDays(days) {
		this.validateInput(days);
		let currentDay = this.Day;
		currentDay -= days;
		while (currentDay < 1) {
			this.subtractMonth(1);
			let currentMonthDays = this.getNumberOfDaysInMonth(this.Month);
			currentDay += currentMonthDays;
		}
		this.Day = currentDay;
	}

	addMonths(months) {
		this.validateInput(months);
		this.addYears(Math.floor((this.Month + months - 1) / 12), true);
		this.Month = ((this.Month + months - 1) % 12) + 1;
	}


	subtractMonths(months) {
		this.validateInput(months);
		this.subtractYears(Math.floor((this.Month - months - 1) / 12));
		this.Month = ((this.Month - (months % 12) + 11) % 12) + 1;
	}

	addYears(years, skipValidation = false) {
		if (!skipValidation) {
			this.validateInput(years);
		}
		this.Year += years;
	}


	subtractYears(years) {
		this.validateInput(years);
		this.Year -= Math.abs(years)
	}

	getNumberOfDaysInMonth(month) {
		switch (month) {
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			case 2:
				return this.isLeapYear(this.Year) ? 29 : 28;
			default:
				return 31;
		}
	}

	isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	toString() {
		return `${this.Day}.${this.Month}.${this.Year}`;
	}
}

// приклад виконання
const date = new TDate(29, 2, 2024);
console.log(date.toString());
date.addDays(1);
console.log(date.toString());

// let day = parseInt(prompt('Введіть день'))
// let month = parseInt(prompt('Введіть місяць'))
// let year = parseInt(prompt('Введіть рік'))
// const date = new TDate(day, month, year);
// ================================================================
// Задача 2. Створити клас TMoney для роботи з грошовими сумами. 
// Сума повинна зберігатися у вигляді доларового еквіваленту. 
// Реалізувати методи додавання/вилучення грошової маси, вказуючи 
// необхідну суму у гривнях, та визначення курсу долара, при 
// якому сума у гривнях збільшиться на 100. Курс долара 
// зберігати в окремому полі. 
// ================================================================
console.log("--------------------Задача 2-------------------------")

class TMoney {
	#balance;
	#exchangeRate;

	constructor(balance, exchangeRate) {
		this.ExchangeRate = exchangeRate;
		this.Balance = balance;
	}

	get Balance() {
		return this.#balance;
	}

	set Balance(balance) {
		if (isNaN(balance) || balance < 0) throw new Error("Баланс повинен бути не від'ємним числом");
		this.#balance = balance;
	}

	get ExchangeRate() {
		return this.#exchangeRate;
	}

	set ExchangeRate(rate) {
		if (isNaN(rate) || rate < 0) throw new Error("Курс обміну повинен бути не від'ємним числом");
		this.#exchangeRate = rate;
	}
	// -----------------------------------------------------------------
	addMoney(amount) {
		if (isNaN(amount) || amount < 0) throw new Error("Сума для додавання повинна бути не від'ємним числом");
		const newBalance = this.Balance + amount / this.ExchangeRate;
		this.Balance = newBalance;
	}

	withdrawMoney(amount) {
		if (isNaN(amount) || amount < 0) throw new Error("Сума для вилучення повинна бути не від'ємним числом");
		const newBalance = this.Balance - amount / this.ExchangeRate;

		if (newBalance < 0) throw new Error("Недостатньо коштів на рахунку");
		this.Balance = newBalance;
	}

	getExchangeRateFor100UAHIncrease(moneyInUAH) {
		const moneyInUSD = moneyInUAH / this.ExchangeRate;
		return (moneyInUAH + 100) / moneyInUSD;
	}

	toString() {
		return `Баланс: ${this.Balance.toFixed(2)} USD (${(this.Balance * this.ExchangeRate).toFixed(2)} UAH), курс обміну: ${this.ExchangeRate.toFixed(2)} UAH/USD.`;
	}
}


let tMoneyObj = new TMoney(1500, 42);
const newCourse = tMoneyObj.getExchangeRateFor100UAHIncrease(100);
console.log(tMoneyObj.toString());
console.log(`Курс долара, при якому сума у гривнях збільшиться на 100: ${newCourse}.`);
// ================================================================
// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
//  -назва фірми;
// - дата заснування (рік, місяць);
// - послуги (назва послуги, вартість, термін виконання);
// - адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
// - визначення кількості років існування фірми;
// - виведення всіх філіалів фірми у вказаному місті;
// - виведення на екран послуг, що можуть бути виконані за вказану 
// суму грошей та вказаний термін часу;
// ================================================================
console.log("--------------------Задача 3-------------------------")

class Service {
	#name;
	#cost;
	#duration;

	constructor(name, cost, duration) {
		this.Name = name;
		this.Cost = cost;
		this.Duration = duration;
	}
	// -----------------------------------------------------------------
	get name() {
		return this.#name;
	}

	get cost() {
		return this.#cost;
	}

	get duration() {
		return this.#duration;
	}
	// -----------------------------------------------------------------

	set name(name) {
		if (name.length === 0) throw new Error('Company name is incorrect')
		this.#name = name;
	}

	set cost(cost) {
		if (cost < 0) throw new Error('Price is incorrect')
		this.#cost = cost;
	}

	set duration(duration) {
		if (duration < 0) throw new Error('Duration is incorrect')
		this.#duration = duration;
	}

	toString() {
		return `
		${this.Name}: ${this.Cost} USD, ${this.Duration} min`;
	}
}
// -----------------------------------------------------------------
class Branch {
	#country;
	#city;
	#street;
	#buildingNumber;

	constructor(country, city, street, buildingNumber) {
		this.Country = country;
		this.City = city;
		this.Street = street;
		this.BuildingNumber = buildingNumber;
	}

	get country() {
		return this.#country;
	}

	get city() {
		return this.#city;
	}

	get street() {
		return this.#street;
	}

	get buildingNumber() {
		return this.#buildingNumber;
	}

	set country(country) {
		this.#country = country;
	}

	set city(city) {
		if (city.length === 0) throw new Error('City name is incorrect');
		this.#city = city;
	}

	set street(street) {
		if (street.length === 0) throw new Error('Street name is incorrect');
		this.#street = street;
	}

	set buildingNumber(buildingNumber) {
		if (buildingNumber.length === 0) throw new Error('Building number is incorrect');
		this.#buildingNumber = buildingNumber;
	}

	toString() {
		return `
		${this.Country}, ${this.City}, ${this.Street}, ${this.BuildingNumber}`;
	}
}
// -----------------------------------------------------------------
class Company {
	#name;
	#foundedDate;
	#services;
	#branches;

	constructor(name, { year, month }) {
		this.Name = name;
		this.FoundedDate = new Date(year, month);
		this.Services = [];
		this.Branches = [];
	}

	get name() {
		return this.#name;
	}

	get foundedDate() {
		return this.#foundedDate;
	}

	get services() {
		return this.#services;
	}

	get branches() {
		return this.#branches;
	}

	addService(name, cost, duration) {
		const service = new Service(name, cost, duration);
		this.Services.push(service);
	}

	addBranch(country, city, street, buildingNumber) {
		const branch = new Branch(country, city, street, buildingNumber);
		this.Branches.push(branch);
	}

	get age() {
		let today = new Date().getFullYear()
		return today - this.FoundedDate.getFullYear();
	}

	getBranchesByCity(city) {
		const branchesInCity = this.Branches.filter(branch => branch.City === city);
		if (branchesInCity.length === 0) throw new Error('The firm doesn\'t have branches in this city');
		return branchesInCity;
	}

	getServicesByCostAndDuration(cost, duration) {
		const accessibleServicesByCostAndDuration = this.Services.filter(service => service.Cost <= cost && service.Duration <= duration);
		if (accessibleServicesByCostAndDuration.length === 0) throw new Error('No matching services found');
		return accessibleServicesByCostAndDuration;
	}

	toString() {
		return `"${this.Name}":
		Founded in: ${this.FoundedDate.getFullYear()}, 
		has ${this.age} years of experience,\n
		Services:${this.Services}\n
		Branches:${this.Branches}`;
	}

}

const myCompany = new Company("MyCompany", { year: 2010, month: 5 });
myCompany.addService("Service1", 20, 30);
myCompany.addService("Service2", 30, 45);
myCompany.addService("Service3", 40, 60);
myCompany.addService("Service4", 110, 60);

myCompany.addBranch("Ukraine", "Kyiv", "Street1", "1");
myCompany.addBranch("Ukraine", "Kyiv", "Street2", "2");
myCompany.addBranch("USA", "New York", "Street3", "3");

console.log(myCompany.toString());

const branchesInKyiv = myCompany.getBranchesByCity("Kyiv");
console.log(`\nBranches in Kyiv: ${branchesInKyiv}`);

const cheapServices = myCompany.getServicesByCostAndDuration(40, 60);
console.log(`\nAccessible services: ${cheapServices}`);
// ================================================================
// Задача 4. Створити клас TBankomat, який моделює роботу банкомата. 
// Клас повинен містити поля для зберігання кількості купюр кожного 
// із номіналів від 5 до 200 гривень. Реалізувати методи знаходження 
// максимальної та мінімальної сум, які може видати банкомат, та 
// метод зняття деякої суми.
// ================================================================
console.log("--------------------Задача 4-------------------------")

class Banknote {
	constructor(nominal, quantity) {
		this.nominal = nominal;
		this.quantity = quantity;
	}
}

class TBankomat {
	constructor(banknotes) {
		this.banknotes = banknotes;
	}

	get totalAmount() {
		return this.banknotes.reduce((acc, curr) => acc + curr.nominal * curr.quantity, 0);
	}

	get minSum() {
		const minNominal = this.banknotes.reduce((acc, curr) => curr.nominal < acc ? curr.nominal : acc, this.banknotes[0]?.nominal);
		if (minNominal === undefined) throw new Error('Банкноти в банкоматі відсутні');
		return minNominal;
	}

	get maxWithdrawalAmount() {
		return this.banknotes.reduce((acc, curr) => acc + curr.nominal * curr.quantity, 0);
	}


	withdraw(sum) {
		if (typeof sum !== 'number' || sum <= 5) throw new Error('Некоректна сума');

		// сортування масиву за спаданням за номіналом банкнот
		for (let i = 1; i < this.banknotes.length; i++) {
			const currentBanknote = this.banknotes[i];
			let j = i - 1;
			while (j >= 0 && this.banknotes[j].nominal < currentBanknote.nominal) {
				this.banknotes[j + 1] = this.banknotes[j];
				j--;
			}
			this.banknotes[j + 1] = currentBanknote;
		}

		let remainingSum = sum;
		const result = {};

		this.banknotes.forEach((banknote) => {
			if (remainingSum >= banknote.nominal && banknote.quantity > 0) {
				const count = Math.min(Math.floor(remainingSum / banknote.nominal), banknote.quantity);
				result[banknote.nominal] = count;
				remainingSum -= banknote.nominal * count;
				banknote.quantity -= count;
			}
		});

		if (remainingSum === 0) {
			return result;
		} else {
			throw new Error('Запитана сума не може бути відпущена.');
		}
	}

}

const banknotes = [
	new Banknote(200, 5),
	new Banknote(100, 10),
	new Banknote(50, 20),
	new Banknote(20, 50),
	new Banknote(10, 100),
	new Banknote(5, 200),
]; 

const tBankomat = new TBankomat(banknotes);

console.log(`Загальна кількість грошей в банкоматі: ${tBankomat.totalAmount}`);
console.log(`Мінімальна сума для зняття грошей: ${tBankomat.minSum}`);
console.log(`Максимальна сума для зняття грошей: ${tBankomat.maxWithdrawalAmount}`);

const result = tBankomat.withdraw(400);
console.log(`Ви зняли з банкомату суму: ${Object.keys(result).reduce((acc, curr) => acc + parseInt(curr) * result[curr], 0)}`);
console.log('Банкноти, які ви отримали:');
console.log(result);
console.log(`Грошей в банкоматі залишилось: ${tBankomat.totalAmount}`);
