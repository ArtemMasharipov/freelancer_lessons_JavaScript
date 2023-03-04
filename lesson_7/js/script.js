//Homework_lesson_7. Functions.
"use strict";
// ================================================================
// Задача 0. Створити функцію, яка за номером місяця повертає пору 
// року, до якої відноситься цей місяць.
// ================================================================
function getMonthNumber() {
	const monthNumber = parseInt(document.getElementById("month").value);
	return monthNumber;
}

function showMonthSeason() {
	const resultShowMonthSeason = document.getElementById("resultTaskZero");
	const monthNumber = getMonthNumber();

	let season;
	if (monthNumber <= 2 || monthNumber == 12) {
		season = "зими";
	} else if (monthNumber <= 5) {
		season = "весни";
	} else if (monthNumber <= 8) {
		season = "літа";
	} else {
		season = "осені";
	}

	// виводимо результат
	resultShowMonthSeason.innerHTML = `Місяць ${monthNumber} відноситься до: <u>${season.toUpperCase()}</u>.`;
}

// ================================================================
// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
// ================================================================
function getMonthName(monthNumber) {
	const months = [
		"січень",
		"лютий",
		"березень",
		"квітень",
		"травень",
		"червень",
		"липень",
		"серпень",
		"вересень",
		"жовтень",
		"листопад",
		"грудень",
	];
	return months[monthNumber - 1];
}

function showMonthName() {
	const monthNumber = parseInt(document.getElementById("monthNumber").value);
	const resultShowMonthName = document.getElementById("resultTaskOne");
	const monthName = getMonthName(monthNumber);
	resultShowMonthName.innerHTML = `Вказаному номеру відповідає місяць: <u>${monthName.toUpperCase()}</u>.`;
	return monthName;
}

// ================================================================
// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати 
// чи є цей день робочим.
// ================================================================
// отримуємо номер дня з текстового поля
function getDayNumber() {
	const dayNumber = parseInt(document.getElementById("dayNumber").value);
	return dayNumber;
}
function isWorkingDay() {
	const dayNumber = getDayNumber();

	let dayStatus;
	if (dayNumber <= 5) {
		dayStatus = "робочий";
	} else {
		dayStatus = "вихідний";
	}

	const resultTaskTwo = document.getElementById("resultTaskTwo");
	// виводимо результат
	resultTaskTwo.innerHTML = `День під номером ${dayNumber}: <u>${dayStatus.toUpperCase()}</u>.`;
}
// ================================================================
// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.
// ================================================================
function findSum(num1, num2, num3, num4) {
	const sum = num1 + num2 + num3 + num4;
	return `Сума: ${sum.toFixed(2)}`;
}

function findProduct(num1, num2, num3, num4) {
	const product = num1 * num2 * num3 * num4;
	return `Добуток: ${product.toFixed(2)}`;
}

function findAverage(num1, num2, num3, num4) {
	const average = (num1 + num2 + num3 + num4) / 4;
	return `Середнє арифметичне: ${average.toFixed(2)}`;
}

function findMinimum() {
	let minimum = arguments[0]; // припускаємо, що перше число є найменшим
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < minimum) {
			minimum = arguments[i]; // оновлюємо мінімальне значення, якщо знаходимо менше число
		}
	}
	return `Мінімальне значення: ${minimum.toFixed(2)}`;
}

function calculateTaskThree() {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const num3 = parseFloat(document.getElementById('num3').value);
	const num4 = parseFloat(document.getElementById('num4').value);

	const resultSum = document.getElementById('result_sum');
	const resultProduct = document.getElementById('result_product');
	const resultAverage = document.getElementById('result_average');
	const resultMin = document.getElementById('result_min');

	resultSum.textContent = findSum(num1, num2, num3, num4);
	resultProduct.textContent = findProduct(num1, num2, num3, num4);
	resultAverage.textContent = findAverage(num1, num2, num3, num4);
	resultMin.textContent = findMinimum(num1, num2, num3, num4);
}
// ================================================================
// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить
// одночасно декілька результатів: кількість парних, кількість додатних,
// кількість більших за 100.
// ================================================================
function getInputValues() {
	const input1 = parseInt(document.getElementById("taskFourNum1").value);
	const input2 = parseInt(document.getElementById("taskFourNum2").value);
	const input3 = parseInt(document.getElementById("taskFourNum3").value);
	calculateThreeOperations(input1, input2, input3);
}

function calculateThreeOperations(num1, num2, num3) {
	let evenCount = 0;
	let positiveCount = 0;
	let greaterThan100Count = 0;

	const numbers = [num1, num2, num3];

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			evenCount++;
		}
		if (numbers[i] > 0) {
			positiveCount++;
		}
		if (numbers[i] > 100) {
			greaterThan100Count++;
		}
	}

	const resultcalculateThreeOperations = document.getElementById("calculateThreeOperations");
	resultcalculateThreeOperations.innerHTML = `
	  Кількість парних чисел: <u>${evenCount}</u><br>
	  Кількість додатних чисел: <u>${positiveCount}</u><br>
	  Кількість чисел більших за 100: <u>${greaterThan100Count}</u>
	`;
}
// ================================================================
// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.
// ================================================================
function convertCmToInch() {
	const cm = parseFloat(document.getElementById("cmInput").value);
	const inch = cm / 2.54;
	const inchOutput = document.getElementById("inchOutput");

	inchOutput.textContent = `${inch.toFixed(2)} дюймів`;
}

function convertKgToLbs() {
	const kg = parseFloat(document.getElementById("kgInput").value);
	const lbs = kg * 2.20462;
	const lbOutput = document.getElementById("lbOutput");

	lbOutput.textContent = `${lbs.toFixed(2)} фунтів`;
}

function convertKmToMiles() {
	const km = parseFloat(document.getElementById("kmInput").value);
	const miles = km / 1.60934;
	const mileOutput = document.getElementById("mileOutput");

	mileOutput.textContent = `${miles.toFixed(2)} миль`;
}
// ================================================================
// Задача 6. Створити функцію, яка створює таблицю з вказаною
// кількістю рядків і стовпців (таблиця заповнюється заданим
// фіксованим повідомленням).
// ================================================================
function createTable(rows, cols) {
	const table = document.getElementById("table-container");

	// очищення таблиці перед кожним виведенням
	table.innerHTML = "";

	// створення рядків та стовпців за допомогою циклу
	for (let i = 0; i < rows; i++) {
		const row = document.createElement("tr");

		for (let j = 0; j < cols; j++) {
			const cell = document.createElement("td");
			cell.innerHTML = "&#128406";
			cell.style.border = "2px solid brown";
			cell.style.padding = "10px";
			row.appendChild(cell);
		}

		table.appendChild(row);
		table.style.border = "2px solid black";
	}
}

function handleTableCreation() {
	const rows = parseInt(document.getElementById("rowsInput").value);
	const cols = parseInt(document.getElementById("colsInput").value);
	createTable(rows, cols);
}

// ================================================================
// Задача 7. Створити функцію, яка випадковим чином виводить на екран 
// одне із 4 зображень (шляхи до зображень передаються у функцію)
// ================================================================
function createRandomImage(path) {
	const randomImageNumber = 1 + Math.floor(Math.random() * 4);
	const currentImagePath = path[randomImageNumber - 1];
	const image = document.createElement("img");
	image.src = currentImagePath;
	const resultCreateRandomImage = document.getElementById("images-container");
	resultCreateRandomImage.appendChild(image);
}

const imagePaths = ["./img/fruit1.jpg", "./img/fruit2.jpg", "./img/fruit3.jpg", "./img/fruit4.jpg"];

createRandomImage(imagePaths);
// ================================================================
// Задача 8. Створити функцію, яка виводить банер (у функцію 
// передаються: зображення, заголовок та посилання, куди переходимо 
// при кліку на зображення (тег img повинен знаходитись у середині 
// тега a: <a> <img src=”шлях”> </a>
// ================================================================
function createBanner(imagePath, title, link) {
	// Створення тегів <a> та <img> для банеру
	const linkElement = document.createElement("a");
	const imageElement = document.createElement("img");

	// Встановлення атрибутів для тегів <a> та <img>
	linkElement.href = link;
	imageElement.src = imagePath;
	imageElement.alt = "Codepen banner";
	// Додавання атрибуту target
	linkElement.target = "_blank";
	// Додавання тега <img> до тега <a>
	linkElement.appendChild(imageElement);

	// Створення тегу <h2> для заголовка банеру
	const titleElement = document.createElement("h2");
	titleElement.textContent = title;

	// Створення тегу <div> для банеру
	const bannerElement = document.createElement("div");
	bannerElement.appendChild(titleElement);
	bannerElement.appendChild(linkElement);

	// Додавання класу для банеру
	bannerElement.classList.add("banner");

	// Додавання банеру на сторінку
	const bannerContainer = document.getElementById("banner-container");
	bannerContainer.appendChild(bannerElement);
}
const imagePath = "./img/banner_codepen.jpg";
const title = "Codepen. The best place to build, test, and discover front-end code.";
const link = "https://codepen.io/";

createBanner(imagePath, title, link);
// ================================================================
// Задача 9. Дано покази температур (довільна кількість). Розробити
// функцію, яка дозволить підрахувати кількість від’ємних показів
// температури.
// ================================================================
function createTemperatureCounter() {
	let temperatureCount = 0;
	let negativeTemperatureCount = 0;

	return function countNegativeTemperatures() {
		let temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
		if (temperatureInput < 0) {
			negativeTemperatureCount++;
		}
		temperatureCount++;

		let negativeTemperatureResult = document.getElementById("negativeTemperatureResult");
		negativeTemperatureResult.innerHTML = `Кількість від'ємних показників температури: ${negativeTemperatureCount}.<br> Введених показників температури: ${temperatureCount}.`;
	}
}

const countTemperatures = createTemperatureCounter();
// ================================================================
// Задача 10. Дано покази температур (довільна кількість). 
// Розробити функцію, яка дозволить знайти середнє значення для 
// додатних показів температури.
// ================================================================
function createTemperatureCalculator() {
	let totalTemperature = 0;
	let temperatureCountTaskTen = 0;

	return function calculateAveragePositiveTemperature() {
		const temperatureInputTaskTen = parseFloat(document.getElementById("temperatureInputTaskTen").value);
		if (temperatureInputTaskTen > 0) {  // перевірка, що показник температури є додатнім
			totalTemperature += temperatureInputTaskTen;
			temperatureCountTaskTen++;
		}

		let averagePositiveTemperature;
		if (temperatureCountTaskTen > 0) {
			averagePositiveTemperature = totalTemperature / temperatureCountTaskTen;
		} else {
			averagePositiveTemperature = 0;
		}

		let averageTemperatureResult = document.getElementById("averageTemperatureResult");
		averageTemperatureResult.innerHTML = `Середнє значення додатніх показників температури: ${averagePositiveTemperature.toFixed(2)}°C.<br> Введених додатніх показників температури: ${temperatureCountTaskTen}.`;
	}
}

const calculateAverageTemperature = createTemperatureCalculator();
