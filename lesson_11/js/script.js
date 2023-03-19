//Homework_lesson_10. Arrays. Continuation - 2.
"use strict";
// ================================================================
// ================================================================
// Задача 1. Знайти суми елементів у вказаній області(завдання 1,2,3,4)
// ================================================================
// ================================================================
// Створення двовимірного масиву
function createMatrix(rows, cols) {
	const matrix = [];
	for (let i = 0; i < rows; i++) {
		matrix[i] = [];
		for (let j = 0; j < cols; j++) {
			matrix[i][j] = Math.floor(Math.random() * 100) + 1;
		}
	}
	return matrix;
}

const matrix = createMatrix(4, 4);

// Функція для знаходження суми елементів у одному із чотирьох квадрантів
function getSumElementsInQuadrant(matrix, startRow, startCol) {
	// Ініціалізуємо змінну для зберігання суми елементів
	let sumElementsOfQuadrant = 0;
	// Отримуємо квадрант з початковою позицією startRow, startCol
	// та обчислюємо суму його елементів
	const endRow = startRow + Math.floor(matrix[startRow].length / 2);
	const endCol = startCol + Math.floor(matrix[startCol].length / 2);
	for (let i = startRow; i < endRow; i++) {
		for (let j = startCol; j < endCol; j++) {
			sumElementsOfQuadrant += matrix[i][j];
		}
	}
	// Повертаємо знайдену суму елементів
	return sumElementsOfQuadrant;
}

// Знаходження суми елементів у кожному квадранті
const topLeftQuadrantSum = getSumElementsInQuadrant(matrix, 0, 0);
const topRightQuadrantSum = getSumElementsInQuadrant(matrix, 0, 2);
const bottomLeftQuadrantSum = getSumElementsInQuadrant(matrix, 2, 0);
const bottomRightQuadrantSum = getSumElementsInQuadrant(matrix, 2, 2);

// Виведення результату
console.log("Двовимірний масив:");
console.table(matrix);
console.log(`Сума елементів у верхньому лівому квадранті: ${topLeftQuadrantSum}`);
console.log(`Сума елементів у верхньому правому квадранті: ${topRightQuadrantSum}`);
console.log(`Сума елементів у нижньому лівому квадранті: ${bottomLeftQuadrantSum}`);
console.log(`Сума елементів у нижньому правому квадранті: ${bottomRightQuadrantSum}`);
// ================================================================
// 5) Суму парних рядків
// ================================================================
function getSumElementsInEvenRows(matrix) {
	let sumElementsInEvenRows = 0;
	for (let i = 0; i < matrix.length; i += 2) {
		for (let j = 0; j < matrix[i].length; j++) {
			sumElementsInEvenRows += matrix[i][j];
		}
	}
	return sumElementsInEvenRows;
}

const sumOfElementsInEvenRows = getSumElementsInEvenRows(matrix);
console.log(`Сума елементів у парних рядках: ${sumOfElementsInEvenRows}`);
// ================================================================
// 6) Суму непарних стовпців
// ================================================================
function getSumElementsInOddColumns(matrix) {
	let sumElementsInOddCols = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 1; j < matrix[i].length; j += 2) {
			sumElementsInOddCols += matrix[i][j];
		}
	}
	return sumElementsInOddCols;
}

const sumOfElementsInOddCols = getSumElementsInOddColumns(matrix);
console.log(`Сума елементів у непарних стовпцях: ${sumOfElementsInOddCols}`);
// ================================================================
// 7)У парних рядках – непарні стовпці, у непарних – парні.
// ================================================================
function getSumElementsInRowsAndCols(matrix, isEvenRow, isEvenCol) {
	let sumElementsInRowsAndCols = 0;

	for (let i = isEvenRow ? 0 : 1; i < matrix.length; i += 2) {
		for (let j = isEvenCol ? 0 : 1; j < matrix[i].length; j += 2) {
			sumElementsInRowsAndCols += matrix[i][j];
		}
	}

	return sumElementsInRowsAndCols;
}
const sumEvenRowsOddCols = getSumElementsInRowsAndCols(matrix, true, false);
console.log(`Сума елементів у парних рядках на перетині з непарними стовпцями: ${sumEvenRowsOddCols}`);

const sumOddRowsEvenCols = getSumElementsInRowsAndCols(matrix, false, true);
console.log(`Сума елементів у непарних рядках на перетині з парними стовпцями: ${sumOddRowsEvenCols}`);
// ================================================================
// ================================================================
// Задача 2. Дано інформацію про прибуток К
// магазинів протягом тижня. Знайти :
// ================================================================
// ================================================================
// 1) загальний прибуток кожного магазину за тиждень;
// ================================================================
function generateMatrix(numOfShops, daysForSumProfit, minProfit, maxProfit) {
	const matrix = [];
	for (let i = 0; i < numOfShops; i++) {
		matrix.push([]);
		for (let j = 0; j < daysForSumProfit; j++) {
			matrix[i].push(Math.floor(Math.random() * (maxProfit - minProfit + 1) + minProfit));
		}
	}
	return matrix;
}
const shopsProfitsArray = generateMatrix(5, 7, 10, 250);
console.log("Двовимірний масив:");
console.table(shopsProfitsArray);

function getTotalProfitByStorePerWeek(shopsProfitsArray) {
	const totalProfitsByStore = [];
	for (let i = 0; i < shopsProfitsArray.length; i++) { // проходимо по першому індексу (магазини)
		let totalProfit = 0;
		for (let j = 0; j < shopsProfitsArray[i].length; j++) { // проходимо по другому індексу (тиждень)
			totalProfit += shopsProfitsArray[i][j]; // додаємо прибуток за даний день у відповідний магазин
		}
		totalProfitsByStore.push(totalProfit); // додаємо загальний прибуток для магазину у відповідний елемент масиву
	}
	return totalProfitsByStore;
}

const totalProfitsByStore = getTotalProfitByStorePerWeek(shopsProfitsArray);
console.log("Загальний прибуток кожного магазину за тиждень:");
console.log(totalProfitsByStore);
// ================================================================
// 2) загальний прибуток усіх магазинів по дням 
// (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// ================================================================
function getDailyProfitOfShops(shopsProfitsArray) {
	const dailyProfit = [];

	for (let i = 0; i < shopsProfitsArray[0].length; i++) {
		let sumOfDailyProfit = 0;
		for (let j = 0; j < shopsProfitsArray.length; j++) {
			sumOfDailyProfit += shopsProfitsArray[j][i];
		}
		dailyProfit.push(sumOfDailyProfit);
	}

	return dailyProfit;
}

const dailyProfitOfShops = getDailyProfitOfShops(shopsProfitsArray);
console.log("Загальний прибуток всіх магазинів по дням:");
console.log(dailyProfitOfShops);
// ================================================================
// 3) загальний прибуток за робочі дні
// ================================================================
function getTotalShopsProfitPerCertainDays(dailyProfitOfShops, startCalculatedDay, endCalculatedDay) {
	let totalProfit = 0;

	for (let i = startCalculatedDay; i < endCalculatedDay; i++) {
		totalProfit += dailyProfitOfShops[i];
	}

	return totalProfit;
}

const totalWeekdaysProfit = getTotalShopsProfitPerCertainDays(dailyProfitOfShops, 0, 5);
console.log(`Загальний прибуток за робочі дні: ${totalWeekdaysProfit}`);
// ================================================================
// 3) загальний прибуток за вихідні дні
// ================================================================
const totalWeekendsProfit = getTotalShopsProfitPerCertainDays(dailyProfitOfShops, 5, 7);
console.log(`Загальний прибуток за вихідні дні: ${totalWeekendsProfit}`);
// ================================================================
// 5) максимальний прибуток за середу
// ================================================================
const maxProfitPerWednesday = shopsProfitsArray.reduce((maxProfit, shopsProfitsArrayCurrentElement) => Math.max(maxProfit, shopsProfitsArrayCurrentElement[2]), 0);
console.log(`Максимальний прибуток за середу становить: ${maxProfitPerWednesday}`);
// ================================================================
// 6) сформувати загальний список (одновимірний масив) зі значенням, 
// які що більші за 200
// ================================================================
const profitsOver200 = [];

for (const row of shopsProfitsArray) {
	for (const profit of row) {
		if (profit > 200) {
			profitsOver200.push(profit);
		}
	}
}

console.log(`Список прибутків, що перевищують 200: ${profitsOver200}`);
// ================================================================
// 7) відсортувати кожен тиждень за зростанням
// ================================================================
for (const week of shopsProfitsArray) {
	week.sort((profit1, profit2) => profit1 - profit2)
}
console.log("Значення у кожному тижні відсотрировані за зростанням:")
console.log(shopsProfitsArray)
// ================================================================
// 8) відсортувати тижні (рядки) за спаданням максимального елементи 
// у цьому тижні (рядку), тобто при порівнянні рядків потрібно 
// порівнювати максимальні елементи у кожному з цих рядків
// ================================================================
shopsProfitsArray.sort((week1, week2) => {
	return Math.max(...week2) - Math.max(...week1);
});
console.log("Тижні відсотрировані за спаданням максимального значення:")
console.log(shopsProfitsArray);
// ================================================================
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у
// рядку (тобто при порівнянні двох рядків треба знайти суму
// кожного з рядків і порівнювати ці суми, на основі цих сум буде
// зрозуміло, який з елементів повинен іти раніше).
// ================================================================
const sortedArrayFromLargeSumInWeekToSmall = shopsProfitsArray.slice();

sortedArrayFromLargeSumInWeekToSmall.sort((weekA, weekB) => {
	let sumInWeekA = 0;
	for (const profitA of weekA) {
		sumInWeekA += profitA;
	}

	let sumInWeekB = 0;
	for (const profitB of weekB) {
		sumInWeekB += profitB;
	}

	return sumInWeekB - sumInWeekA;
});

console.log("Тижні відсотрировані за спаданням суми значень:")
console.log(sortedArrayFromLargeSumInWeekToSmall);
// ================================================================
// Задача 3. Морський бій. Випадковим чином на двовимірному полі 
// розміром 6*6 розташовується 5 кораблів. Користувач стріляє 
// вказуючи координати. Гра продовжується поки не потоплено усі 
// кораблі або у користувача не закінчаться снаряди.
// ================================================================
function getRandomNumber(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function getFreeCell(field) {
	const lastRowIndex = field.length - 1;
	const lastColIndex = field[0].length - 1;
	let row, col;
	do {
		row = getRandomNumber(0, lastRowIndex);
		col = getRandomNumber(0, lastColIndex);
	} while (field[row][col] === 1);
	return [row, col];
}

function createGameField(rows, cols, numOfShips) {
	const field = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
	for (let i = 0; i < numOfShips; i++) {
		let [row, col] = getFreeCell(field);
		field[row][col] = 1;
	}
	return field;
}

function playGame(field, numOfShips) {
	let numOfShots = parseInt(prompt(`Введіть кількість пострілів (1-${field.length * field[0].length}):`));
	let shotsLeft = numOfShots;
	do {
		const shotRow = parseInt(prompt(`Введіть значення для пострілу у рядку (1-${field.length}):`)) - 1;
		const shotCol = parseInt(prompt(`Введіть значення для пострілу у колонці (1-${field[0].length}):`)) - 1;

		if (field[shotRow][shotCol] === 1) {
			numOfShips--;
			alert(`Попали! Залишилось ${numOfShips} кораблів. Залишилось ${--shotsLeft} пострілів.`);
			field[shotRow][shotCol] = 0;
		} else {
			alert(`Промазали! Залишилось ${--shotsLeft} пострілів.`);
		}
	} while (shotsLeft > 0 && numOfShips > 0);

	if (numOfShips === 0) {
		alert('Виграв!');
	} else {
		alert('Програв!');
	}
}

const NUM_ROWS = 6;
const NUM_COLS = 6;
const NUM_SHIPS = 5;
const gameField = createGameField(NUM_ROWS, NUM_COLS, NUM_SHIPS);
