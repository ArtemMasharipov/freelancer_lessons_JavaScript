//Homework_lesson_5
"use strict";
// ================================================================
// Задача 1. Вивести з використанням циклів маркований список з 
// випадковими числами (1-100). Кількість випадкових чисел вводиться
//  користувачем.
// ================================================================
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
	const userNumInput = parseInt(document.getElementById("userNum").value);
	const randomList = document.getElementById("randomList");

	if (isNaN(userNumInput) || userNumInput < 1) {
		randomList.innerHTML = "Введіть кількість елементів маркованого списку для виводу!";
		return;
	}
	randomList.innerHTML = "";

	for (let i = 0; i < userNumInput; i++) {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		const listItem = document.createElement("li");
		listItem.textContent = randomNumber;
		randomList.appendChild(listItem);
	}
});
// ================================================================
// Задача 2. Створити 10 елементів для введення цін продуктів
// ================================================================
const productsList = document.getElementById("productsList");

for (let i = 1; i <= 10; i++) {
	const productContainer = document.createElement("div");
	const productName = document.createElement("span");
	const productInput = document.createElement("input");

	productContainer.appendChild(productName);
	productContainer.appendChild(productInput);

	productName.textContent = `Продукт ${i}: `;
	productInput.type = "number";

	productsList.appendChild(productContainer);
}
// ================================================================
// Задача 3. Вивести таблицю з одним рядком і 7 стовпцями.
// ================================================================
const tableRow = document.querySelector("#taskThreeTable tr");

for (let i = 1; i <= 7; i++) {
	const tableCell = document.createElement("td");
	tableCell.textContent = i;
	tableCell.style.border = "2px solid black";
	tableCell.style.padding = "10px";
	tableRow.appendChild(tableCell);
}
// ================================================================
// Задача 4. Вивести таблицю з 3 рядків і 7 стовпців
// ================================================================
const tableTaskFour = document.getElementById("taskFourTable");

for (let i = 1; i <= 3; i++) {
	const rowTaskFour = document.createElement("tr");
	for (let j = 1; j <= 7; j++) {
		const columnTaskFour = document.createElement("td");
		columnTaskFour.textContent = j;
		columnTaskFour.style.border = "2px solid black";
		columnTaskFour.style.padding = "10px";
		rowTaskFour.appendChild(columnTaskFour);
	}
	tableTaskFour.appendChild(rowTaskFour);
}
// ================================================================
// Задача 5. Вивести таблицю 3*3 з комірками від 1 до 9.
// ================================================================
const tableTaskFive = document.getElementById("taskFiveTable");

for (let i = 1; i <= 3; i++) {
	const rowTaskFive = document.createElement("tr");
	for (let j = 1; j <= 3; j++) {
		const cellTaskFive = document.createElement("td");
		const NUM_COLS = 3;
		const cellNumber = (i - 1) * NUM_COLS + j;
		cellTaskFive.textContent = cellNumber;
		cellTaskFive.style.border = "2px solid black";
		cellTaskFive.style.padding = "10px";
		rowTaskFive.appendChild(cellTaskFive);
	}
	tableTaskFive.appendChild(rowTaskFive);
}
// ================================================================
// Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній).
// ================================================================
const containerTable = document.getElementById("tableContainer");

for (let k = 0; k < 3; k++) {
	const tableTaskSix = document.createElement("table");
	containerTable.appendChild(tableTaskSix);
	let cellNumber = k * 9;
	for (let i = 0; i < 3; i++) {
		const rowTaskSix = document.createElement("tr");
		tableTaskSix.appendChild(rowTaskSix);

		for (let j = 0; j < 3; j++) {
			cellNumber++;
			const cellTaskSix = document.createElement("td");
			cellTaskSix.textContent = cellNumber;
			cellTaskSix.style.border = "2px solid black";
			cellTaskSix.style.padding = "10px";
			rowTaskSix.appendChild(cellTaskSix);
		}
	}
}
// ================================================================
// Задача 7. Вивести на екран N абзаців (N вводиться користувачем) 
// за зразком:
// ================================================================
function generateParagraphs() {
	const numberOfParagraphs = parseInt(document.getElementById("inputN").value);

	// Отримуємо контейнер, в який будемо додавати параграфи
	const containerTaskSeven = document.getElementById("paragraphsContainer");

	// Очищаємо контейнер перед додаванням нових параграфів
	containerTaskSeven.innerHTML = "";

	for (let i = 1; i <= numberOfParagraphs; i++) {
		// Додаємо заголовок
		const headingTaskSeven = document.createElement("h1");
		headingTaskSeven.textContent = `Заголовок ${i}`;
		containerTaskSeven.appendChild(headingTaskSeven);

		// Додаємо розділ та параграф
		for (let j = 1; j <= i; j++) {
			const paragraphTaskSeven = document.createElement("p");
			paragraphTaskSeven.textContent = `Розділ ${i}, параграф ${j}`;
			containerTaskSeven.appendChild(paragraphTaskSeven);

			// Додаємо margin-bottom після кожного останнього параграфу
			if (j === i) {
				paragraphTaskSeven.style.marginBottom = "20px";
			}
		}
	}
}
// ================================================================
// Задача 8. Користувач загадує число. За 3 спроби комп’ютер 
// намагається вгадати число користувача (використати confirm).
// ================================================================
function guessNumber() {
	const userNumber = parseInt(document.getElementById("userNumber").value);
	//Звужуємо діапазон пошуку
	let minNumber = userNumber - 5;
	let maxNumber = userNumber + 5;

	if (minNumber < 0) {
		maxNumber -= minNumber;
		minNumber = 0;
	}

	let computerGuess;
	let pcAttempt = 1;

	while (pcAttempt <= 3) {
		computerGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
		const message = `Чи це число ${computerGuess}? (спроба ${pcAttempt})`;
		const isUserGuessCorrect = confirm(message);

		if (isUserGuessCorrect) {
			alert(`Я вгадав! Це число: ${userNumber}.`);
			return;
		}
		pcAttempt++;
	}
	alert("Я не зміг вгадати число :(");
}
// ================================================================
// Задача 9. Користувач загадує число. Комп’ютер задає питання поки не
// вгадає число користувача (використати confirm).
// ================================================================
function guessNumberTwo() {
	const userNumber = parseInt(document.getElementById("userNumberTwo").value);
	//Звужуємо діапазон пошуку
	let minNumber = userNumber - 5;
	let maxNumber = userNumber + 5;

	if (minNumber < 0) {
		maxNumber -= minNumber;
		minNumber = 0;
	}

	let computerGuess;
	let pcAttempt = 1;

	while (true) {
		computerGuess = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
		const message = `Чи це число ${computerGuess}? (спроба ${pcAttempt})`;
		const isUserGuessCorrect = confirm(message);

		if (isUserGuessCorrect) {
			alert(`Я вгадав! Це число: ${userNumber}.`);
			return;
		}
		pcAttempt++;
	}
	alert("Я не зміг вгадати число :(");
}
// ================================================================
// Задача 10. Знайти суму всіх непарних чисел, що знаходяться між 
// заданими користувачем числами. 
// ================================================================
function sumOddNumbers() {
	let userNumberFirst = parseInt(document.getElementById("firstUserNumber").value);
	let userNumberSecond = parseInt(document.getElementById("secondtUserNumber").value);

	let oddSum = 0;
	let resultTaskTen = document.getElementById("taskTenResult");

	// Якщо userNumberFirst більше userNumberSecond, міняємо їх місцями
	if (userNumberFirst > userNumberSecond) {
		const tempForChange = userNumberFirst;
		userNumberFirst = userNumberSecond;
		userNumberSecond = tempForChange;
	}

	for (let i = userNumberFirst; i <= userNumberSecond; i++) {
		if (i % 2 !== 0) { // перевірка на непарність
			oddSum += i;
		}
	}

	resultTaskTen.textContent = `Сума непарних чисел між ${userNumberFirst} та ${userNumberSecond}: ${oddSum}.`;
}
// ================================================================
// Задача 11. Знайти суму 5 непарних чисел, що знаходяться між
// заданими користувачем числами.
// ================================================================
function sumOddFive() {
	let userNumberFirst = parseInt(document.getElementById("firstUserNumberTask_11").value);
	let userNumberSecond = parseInt(document.getElementById("secondtUserNumberTask_11").value);

	let oddSumFive = 0;
	let countForFive = 0;
	let resultTaskEleven = document.getElementById("taskElevenResult");

	// Якщо userNumberFirst більше userNumberSecond, міняємо їх місцями
	if (userNumberFirst > userNumberSecond) {
		const tempForChange = userNumberFirst;
		userNumberFirst = userNumberSecond;
		userNumberSecond = tempForChange;
	}

	for (let i = userNumberFirst; i <= userNumberSecond; i++) {
		if (i % 2 !== 0) { // перевірка на непарність
			oddSumFive += i;
			countForFive++;
		} else if (countForFive === 5) {
			break;
		}
	}

	resultTaskEleven.textContent = `Сума п'яти непарних чисел між ${userNumberFirst} та ${userNumberSecond}: ${oddSumFive}.`;
}
// ================================================================
// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3
// позиціях. Вибір у кожній позиції вибирається як одне з чотирьох
// зображень. Вивести ці зображення і повідомити виграш користувача
// (три перших зображення 100 грн, три других – 200, три третіх – 500,
//  три четвертих зображення – 1000грн). Використати цикли
//  і switch (для вибору зображення за номером).
// ================================================================
const imagesContainer = document.getElementById("images");

function createAndAppendFruitImage(imagesContainer) {
	const randomFruitNumber = 1 + Math.floor(Math.random() * 4);
	const fruitImg = document.createElement("img");
	fruitImg.src = `../img/fruit${randomFruitNumber}.jpg`;
	imagesContainer.appendChild(fruitImg);
	return randomFruitNumber;
}

const fruit1 = createAndAppendFruitImage(imagesContainer);
const fruit2 = createAndAppendFruitImage(imagesContainer);
const fruit3 = createAndAppendFruitImage(imagesContainer);
let taskTwelveResult;

// Визначаємо виграш
switch (`${fruit1},${fruit2},${fruit3}`) {
	case "1,1,1":
		taskTwelveResult = "Ви виграли 100 грн!";
		break;
	case "2,2,2":
		taskTwelveResult = "Ви виграли 200 грн!";
		break;
	case "3,3,3":
		taskTwelveResult = "Ви виграли 500 грн!";
		break;
	case "4,4,4":
		taskTwelveResult = "Ви виграли 1000 грн!";
		break;
	default:
		taskTwelveResult = "Спробуйте ще раз.";
		break;
}

// Виводимо результат
const resultMoneyPrize = document.createElement("p");
resultMoneyPrize.innerHTML = taskTwelveResult;
imagesContainer.appendChild(resultMoneyPrize);
// ================================================================
// Задача 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель 
// на полі розміром N*M. Маючи К снарядів користувач намагається 
// потопити корабель. 
// ================================================================
function playBattleship() {
	const boardWidth = parseInt(document.getElementById('boardWidth').value);
	const boardHeight = parseInt(document.getElementById('boardHeight').value);
	const numProjectiles = parseInt(document.getElementById('numProjectiles').value);
	const shipColumn = 1 + Math.floor(Math.random() * boardWidth);
	const shipRow = 1 + Math.floor(Math.random() * boardHeight);
	let resultBattelship = '';
	let shipPostion = document.getElementById('battleShipResult');

	for (let i = 0; i < numProjectiles; i++) {
		const shotColumn = parseInt(prompt('Введіть координати N для пострілу:', ''));
		const shotRow = parseInt(prompt('Введіть координати M для пострілу:', ''));
		if (shotColumn === shipColumn && shotRow === shipRow) {
			resultBattelship = 'Вітаю! Ви влучили і потопили корабель.<br><br>'
			break;
		} else {
			resultBattelship = 'Ви не влучили! Спробуйте ще раз.<br><br>'
		}
	}

	shipPostion.innerHTML = `${resultBattelship}  Координати корабля:<br> N: ${shipColumn}<br>M: ${shipRow}`;
}
// ================================================================
// Задача 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. 
// Користувач поступово вводить суму грошей до тих пір, поки суми не 
// буде достатньо для оплати товарів (кожного разу користувачу 
// повідомляють, яку ще суму потрібно ввести). 
// ================================================================
function makePayment() {
	const totalAmount = parseInt(document.getElementById("totalAmount").value);
	let paidAmount = parseInt(document.getElementById("paidAmount").value);
	let remainingAmount = totalAmount - paidAmount;
	let resultremainingAmount = document.getElementById("remainingAmount");

	while (remainingAmount > 0) {
		const additionalPayment = parseInt(prompt(`Вам треба оплатити ще ${remainingAmount} грн.`));
		paidAmount += additionalPayment;
		remainingAmount = totalAmount - paidAmount;
	}

	resultremainingAmount.innerText = `Дякую за оплату. Ваша решта: ${-remainingAmount} грн.`;
}
// ================================================================
// Задача 15. Користувача поступово вводить показники температури 
// протягом року. Знайти середню температуру.
// ================================================================
let totalTemperature = 0;
let temperatureCount = 0;
let averageTemperatureResult = document.getElementById("averageTemperatureResult");

function calculateAverageTemperature() {
	const temperatureInput = parseInt(document.getElementById("temperatureInput").value);
	totalTemperature += temperatureInput;
	temperatureCount++;

	let averageTemperature;
	if (temperatureCount > 0) {
		averageTemperature = totalTemperature / temperatureCount;
	} else {
		averageTemperature = 0;
	}

	averageTemperatureResult.innerHTML = `Середня температура: ${averageTemperature.toFixed(2)}°C.<br> Введених показників температури: ${temperatureCount}.`;
}
// ================================================================
// Задача 16. Користувач поступово вводить прибуток магазину за кожен
// день протягом N тижнів. Знайти загальну величину прибутку та вивести
// величину прибутку протягом кожного окремого тижня.
// ================================================================
function calculateProfit() {
	const weeks = parseInt(document.getElementById("weeks").value);
	const weekProfitsElement = document.getElementById("week-profits");
	const totalProfitElement = document.getElementById("total-profit");

	weekProfitsElement.innerHTML = "";
	let totalProfit = 0;

	for (let week = 1; week <= weeks; week++) {
		let weekProfit = 0;
		for (let day = 1; day <= 7; day++) {
			const dailyProfit = parseFloat(prompt(`Введіть прибуток магазину за день ${day}, тижня ${week}:`, 0));
			if (isNaN(dailyProfit)) {
				totalProfitElement.innerHTML = `Загальний прибуток: ${totalProfit}`;
				return;
			}
			weekProfit += dailyProfit;
			totalProfit += dailyProfit;
		}
		weekProfitsElement.innerHTML += `Прибуток за тиждень ${week}: <mark>${weekProfit.toFixed(2)}</mark> грн.<br>`;
	}
	totalProfitElement.innerHTML = `Загальний прибуток: <mark><u>${totalProfit.toFixed(2)}</u></mark> грн.`;
}

