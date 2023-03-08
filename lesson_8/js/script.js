//Homework_lesson_8. Arrays. Introduction.
"use strict";
// ================================================================
// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти 
// середній бал і з’ясувати до якої категорії він відноситься 
// (відмінник, двійочник (має хоча би одну двійку), хорошист 
// (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
// ================================================================

function generateGrades(numOfGrades_K) {
	let grades = [];
	for (let i = 0; i < numOfGrades_K; i++) {
		grades.push(Math.floor(Math.random() * 5) + 1);
	}
	return grades;
}

function calculateAverageGrade(grades) {
	let sumOfGrades = 0;
	for (let i = 0; i < grades.length; i++) {
		sumOfGrades += grades[i];
	}
	return sumOfGrades / grades.length;
}

function hasOnesOrTwos(grades) {
	let foundOnesOrTwos = false;  // ініціалізуємо змінну, яка відстежує, чи знайдено 1 або 2
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === 1 || grades[i] === 2) {
			foundOnesOrTwos = true;
			break;  // якщо знайдено, виходимо з циклу
		}
	}
	return foundOnesOrTwos;
}

function hasThrees(grades) {
	let foundThrees = false;  // ініціалізуємо змінну, яка відстежує, чи знайдено 3
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === 3) {
			foundThrees = true;
			break;  // якщо знайдено, виходимо з циклу
		}
	}
	return foundThrees;
}

function calculateResult(grades) {
	if (hasOnesOrTwos(grades)) {
		return "Двійочник";
	} else if (hasThrees(grades)) {
		return "Трійочник";
	} else if (calculateAverageGrade(grades) >= 4 && calculateAverageGrade(grades) < 4.5) {
		return "Хорошист";
	} else if (calculateAverageGrade(grades) >= 4.5) {
		return "Відмінник";
	}
}

function generateAndDisplayGrades() {
	const numOfGrades_K = parseInt(document.getElementById("numOfGrades").value);
	let grades = generateGrades(numOfGrades_K);
	let averageGrade = calculateAverageGrade(grades);
	let personGradeStatus = calculateResult(grades);
	let resultTaskZero = `Оцінки: [${grades.join(", ")}]<br> Середній бал: ${averageGrade.toFixed(2)}<br> Результат: ${personGradeStatus}`;
	document.getElementById("resultTaskZero").innerHTML = resultTaskZero;
}
// ================================================================
// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину 
// протягом тижня. Вивести на екран:
//  - номери днів, протягом яких кількість відвідувачів була меншою за 20;
//  - номери днів, коли кількість відвідувачів була мінімальною;
//  - номери днів, коли кількість відвідувачів була максимальною;
//  - загальну кількість клієнтів у робочі дні та окремо загальну кількість 
// днів на вихідних.
// ================================================================

function generateQuantityVisitorsPerWeek(visitorsEachDayOfWeek) {
	let visitorsArray = [];
	for (let i = 0; i < visitorsEachDayOfWeek; i++) {
		visitorsArray.push(Math.floor(Math.random() * 100) + 1);
	}
	return visitorsArray;
}

function getDaysWithLessThan20Visitors(visitorsArray) {
	let numOfDaysHaveLessThan20Visitors = [];
	for (let i = 0; i < visitorsArray.length; i++) {
		if (visitorsArray[i] < 20) {
			numOfDaysHaveLessThan20Visitors.push(i + 1);
		}
	}
	return numOfDaysHaveLessThan20Visitors;
}

function getDaysWithMinimumVisitors(visitorsArray) {
	let minVisitors = visitorsArray[0];
	let dayWithMinVisitors = [1];
	for (let i = 1; i < visitorsArray.length; i++) {
		if (visitorsArray[i] < minVisitors) {
			minVisitors = visitorsArray[i];
			dayWithMinVisitors = [i + 1];
		} else if (visitorsArray[i] === minVisitors) {
			dayWithMinVisitors.push(i + 1);
		}
	}
	return dayWithMinVisitors;
}

function getDaysWithMaximumVisitors(visitorsArray) {
	let maxVisitors = visitorsArray[0];
	let dayWithMaxVisitors = [1];
	for (let i = 1; i < visitorsArray.length; i++) {
		if (visitorsArray[i] > maxVisitors) {
			maxVisitors = visitorsArray[i];
			dayWithMaxVisitors = [i + 1];
		} else if (visitorsArray[i] === maxVisitors) {
			dayWithMaxVisitors.push(i + 1);
		}
	}
	return dayWithMaxVisitors;
}

function getTotalVisitorsByDayType(visitorsArray) {
	let weekdaysTotal = 0;
	let weekendsTotal = 0;
	for (let i = 0; i < visitorsArray.length; i++) {
		if (i === 5 || i === 6) {
			weekendsTotal += visitorsArray[i];
		} else {
			weekdaysTotal += visitorsArray[i];
		}
	}
	return [weekdaysTotal, weekendsTotal];
}

let visitors = generateQuantityVisitorsPerWeek(7);
let daysWithLessThan20Visitors = getDaysWithLessThan20Visitors(visitors);
let daysWithMinimumVisitors = getDaysWithMinimumVisitors(visitors);
let daysWithMaximumVisitors = getDaysWithMaximumVisitors(visitors);
let totalVisitorsByDayType = getTotalVisitorsByDayType(visitors);

let resultTaskTwo = `Загальна кількість відв-в: [${visitors.join(", ")}]<br> Дні з кількістю відвідувачів менше 20: ${daysWithLessThan20Visitors.join(", ")}<br> Дні з мінімальною кількістю відвідувачів: ${daysWithMinimumVisitors.join(", ")}<br> Дні з максимальною кількістю відвідувачів: ${daysWithMaximumVisitors.join(", ")}<br> Загальна кількість відвідувачів у робочі дні: ${totalVisitorsByDayType[0]}<br> Загальна кількість відвідувачів на вихідних: ${totalVisitorsByDayType[1]}`;

document.getElementById("resultTaskTwo").innerHTML = resultTaskTwo;
// ================================================================
// Задача 3. Дано масив імен учнів. З’ясувати скільки разів 
// зустрічається ім’я «Іван».
// ================================================================

function countOccurrencesOfName(namesArray, matchingName) {
	let count = 0;
	for (let i = 0; i < namesArray.length; i++) {
		if (namesArray[i] === matchingName) {
			count++;
		}
	}
	return count;
}

let namesArray = [];
let possibleNames = ["Іван", "Олександр", "Андрій", "Олена", "Ірина", "Марія", "Анна", "Юлія", "Оксана", "Наталія"];

for (let i = 0; i < possibleNames.length; i++) {
	let randomIndexOfPossibleNames = Math.floor(Math.random() * possibleNames.length);
	namesArray.push(possibleNames[randomIndexOfPossibleNames]);
}

let countOfIvanOccurrences = countOccurrencesOfName(namesArray, "Іван");

let resultTaskThree = `Масив імен: [${namesArray.join(", ")}]<br><br> Кількість входжень імені "Іван": ${countOfIvanOccurrences}`;

document.getElementById("resultTaskThree").innerHTML = resultTaskThree;
// ================================================================
// Задача 4. Дано послідовність номерів автомобілів. Підрахувати 
// кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;
// ================================================================

function countNumbersStartingWithA(carNumbersArray) {
	let counterNumbersStartingWithA = 0;
	for (let i = 0; i < carNumbersArray.length; i++) {
		if (carNumbersArray[i][0] === "А") {
			counterNumbersStartingWithA++;
		}
	}
	return counterNumbersStartingWithA;
}

function countNumbersWithSameFirstAndLastLetter(carNumbersArray) {
	let counterNumbersWithSameFirstAndLastLetter = 0;
	for (let i = 0; i < carNumbersArray.length; i++) {
		let carNumber = carNumbersArray[i];
		if (carNumber[0] === carNumber[carNumber.length - 1]) {
			counterNumbersWithSameFirstAndLastLetter++;
		}
	}
	return counterNumbersWithSameFirstAndLastLetter;
}

function countNumbersWithMoreThan5Characters(carNumbersArray) {
	let counterNumbersWithMoreThan5Characters = 0;
	for (let i = 0; i < carNumbersArray.length; i++) {
		if (carNumbersArray[i].length > 5) {
			counterNumbersWithMoreThan5Characters++;
		}
	}
	return counterNumbersWithMoreThan5Characters;
}

let carNumbersArray = ["АА1234ВК", "ВВ2345КС", "СІ3456АТ", "АХ4567ХА", "КС5678НВ", "МА6789МА", "МІ7890АТ", "АС8901НР", "ІІ9012ВХ", "НС0123МК"];

let countOfNumbersStartingWithA = countNumbersStartingWithA(carNumbersArray);
let countOfNumbersWithSameFirstAndLastLetter = countNumbersWithSameFirstAndLastLetter(carNumbersArray);
let countOfNumbersWithMoreThan5Characters = countNumbersWithMoreThan5Characters(carNumbersArray);

let resultTaskFour = `Масив номерів автомобілів: [${carNumbersArray.join(", ")}]<br><br>
 Кількість номерів, що починаються на букву «А»: ${countOfNumbersStartingWithA}<br>
 Кількість номерів, у яких перша і остання літери співпадають: ${countOfNumbersWithSameFirstAndLastLetter}<br>
 Кількість номерів, що складаються з більше ніш 5 символів: ${countOfNumbersWithMoreThan5Characters}`;

document.getElementById("resultTaskFour").innerHTML = resultTaskFour;
// ================================================================
// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
// ================================================================

function countTwos(grades) {
	let counterTwos = 0;
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === 2) {
			counterTwos++;
		}
	}
	return counterTwos;
}

function countGoodGrades(grades) {
	let counterGoodGrades = 0;
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === 4 || grades[i] === 5) {
			counterGoodGrades++;
		}
	}
	return counterGoodGrades;
}

function countBelowAverageGrades(grades) {
	let sum = 0;
	for (let i = 0; i < grades.length; i++) {
		sum += grades[i];
	}
	let average = sum / grades.length;
	let counterBelowAverageGrades = 0;
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] < average) {
			counterBelowAverageGrades++;
		}
	}
	return counterBelowAverageGrades;
}

function generateArrayOfRandomGrades(NUMBER_OF_GRADES) {
	let grades = [];
	for (let i = 0; i < NUMBER_OF_GRADES; i++) {
		let randomGrade = Math.floor(Math.random() * 5) + 1;
		grades.push(randomGrade);
	}
	return grades;
}

const NUMBER_OF_GRADES = 10;
let grades = generateArrayOfRandomGrades(NUMBER_OF_GRADES);
let countOfTwos = countTwos(grades);
let countOfGoodGrades = countGoodGrades(grades);
let countOfBelowAverageGrades = countBelowAverageGrades(grades);

let resultTaskFive = `Масив оцінок: [${grades.join(", ")}]<br>
Кількість двійок: ${countOfTwos}<br>
              Кількість хороших оцінок (4, 5): ${countOfGoodGrades}<br>
              Кількість оцінок, які нижче середнього: ${countOfBelowAverageGrades}`;
document.getElementById("resultTaskFive").innerHTML = resultTaskFive;
// ================================================================
// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). 
// Вивести на екран ті, які може собі дозволити користувач 
// (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
// ================================================================
function generateRandomPrices(QUANTITY_OF_GOODS) {
	let randomGoodPricesArray = [];
	for (let i = 0; i < QUANTITY_OF_GOODS; i++) {
		let price = Math.floor(Math.random() * 301) + 200;
		randomGoodPricesArray.push(price);
	}
	return randomGoodPricesArray;
}

function filterProductsByPrice(products, randomGoodPricesArray, maxPrice) {
	let affordableProducts = [];
	for (let i = 0; i < products.length; i++) {
		if (randomGoodPricesArray[i] <= maxPrice) {
			affordableProducts.push(products[i]);
		}
	}
	return affordableProducts;
}

const QUANTITY_OF_GOODS = 10;
let products = ['Молоко', 'Хліб', 'Ковбаса', 'Сир', 'Яйця', 'Огірки', 'Помідори', 'Печиво', 'Сік', 'Картопля'];

let randomGoodPricesArray = generateRandomPrices(QUANTITY_OF_GOODS);
const userMoney = 400;

let affordableProducts = filterProductsByPrice(products, randomGoodPricesArray, userMoney);
let resultTaskSix = `Наявніть коштів: ${userMoney}<br>
Ціни товарів:<br> [${randomGoodPricesArray.join(", ")}]<br><br>
Товари в наявності:<br> [${products.join(', ')}]<br><br>
Товари, які ви можете дозволити собі:<br> [${affordableProducts.join(', ')}]`;
document.getElementById('resultTaskSix').innerHTML = resultTaskSix;
// ================================================================
// Задача 7. Дано послідовність платіжок протягом року. 
// Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
// ================================================================

function getTotalPayments(payments) {
	let total = 0;
	for (let i = 0; i < payments.length; i++) {
		total += payments[i];
	}
	return total;
}

function getFirstHalfPayments(payments) {
	let totalFirstHalfPayments = 0;
	for (let i = 0; i < 6; i++) {
		totalFirstHalfPayments += payments[i];
	}
	return totalFirstHalfPayments;
}

function getSecondHalfPayments(payments) {
	let totalSecondHalfPayments = 0;
	for (let i = 6; i < payments.length; i++) {
		totalSecondHalfPayments += payments[i];
	}
	return totalSecondHalfPayments;
}

function getSummerPayments(payments) {
	let totalSummerPayments = 0;
	for (let i = 5; i < 8; i++) {
		totalSummerPayments += payments[i];
	}
	return totalSummerPayments;
}

function getSecondQuarterPayments(payments) {
	let totalSecondQuarterPayments = 0;
	for (let i = 3; i < 6; i++) {
		totalSecondQuarterPayments += payments[i];
	}
	return totalSecondQuarterPayments;
}

function getEvenMonthPayments(payments) {
	let totalEvenMonthPayments = 0;
	for (let i = 1; i < payments.length; i += 2) {
		totalEvenMonthPayments += payments[i];
	}
	return totalEvenMonthPayments;
}

function getSeasonStartPayments(payments) {
	let totalSeasonStartPayments = 0;
	for (let i = 2; i < payments.length; i += 3) {
		totalSeasonStartPayments += payments[i];
	}
	return totalSeasonStartPayments;
}

function generateRandomPayments(monthQuantity) {
	const payments = [];
	for (let i = 0; i < monthQuantity; i++) {
		const payment = Math.floor(Math.random() * 1000);
		payments.push(payment);
	}
	return payments;
}

const payments = generateRandomPayments(12);
const sumForYear = getTotalPayments(payments);
const sumForFirstHalfYear = getFirstHalfPayments(payments);
const sumForSecondHalfYear = getSecondHalfPayments(payments);
const sumForSummer = getSummerPayments(payments);
const sumForSecondQuarter = getSecondQuarterPayments(payments);
const sumForEvenMonths = getEvenMonthPayments(payments);
const sumForSeasonStartMonths = getSeasonStartPayments(payments);

const output = `
  Ціни на послуги:<br> [${payments.join(', ')}]<br>
  Сумарна кі-ть грошей за весь рік: ${sumForYear}<br>
  Сумарна кі-ть грошей за першу половину року: ${sumForFirstHalfYear}<br>
  Сумарна кі-ть грошей за другу половину року: ${sumForSecondHalfYear}<br>
  Сумарна кі-ть грошей за літо: ${sumForSummer}<br>
  Сумарна кі-ть грошей за ІІ квартал: ${sumForSecondQuarter}<br>
  Сумарна кі-ть грошей за парні місяці: ${sumForEvenMonths}<br>
  Сумарна кі-ть грошей за місяці, які є початковими у сезоні: ${sumForSeasonStartMonths}<br>`;

document.getElementById('resultTaskSeven').innerHTML = output;
// ================================================================
// Задача 8. Дано одновимірний масив, у якому зберігається певна
// виграшна сума(елементи заповнюються випадковим чином значеннями
// від - 500 до 500).Надаючи користувачу можливість вибирати номери
// елементів(поки він не відмовиться).Знаходити сумарний виграш.
// ================================================================
function generateGamesElemArray(gameArrayElemsQuantity) {
	const gameElemAmount = [];
	for (let i = 0; i < gameArrayElemsQuantity; i++) {
		gameElemAmount.push(Math.floor(Math.random() * 1001) - 500);
	}
	return gameElemAmount;
}

function updateTotalWinnings(inputNumber, gameElemAmount, totalWinnings) {
	if (inputNumber >= 1 && inputNumber < gameElemAmount.length) {
		totalWinnings += gameElemAmount[inputNumber - 1];
		const resultTaskEight = `Ваш поточний виграш: ${gameElemAmount[inputNumber - 1]}<br>
	  Ваш загальний виграш: ${totalWinnings}`;
		document.getElementById('resultTaskEight').innerHTML = resultTaskEight;
	}
	return totalWinnings;
}

const gameElemAmount = generateGamesElemArray(50);
let totalWinnings = 0;

function addToSum() {
	const inputNumber = parseInt(document.getElementById("inputGameNumber").value);
	totalWinnings = updateTotalWinnings(inputNumber, gameElemAmount, totalWinnings);
}
// ================================================================
// Задача 9. Морський бій. Користувач вводить кількість клітинок 
// одновимірного масиву та кількість одиночних кораблів. Комп’ютер 
// довільно розміщує ці одиночні кораблі у масиві по один у клітинці 
// (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що 
// там є корабель. Користувач вводить номер клітинки, куди стріляє. 
// Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
// ================================================================
// Запитуємо у користувача розмір масиву та кількість кораблів
function getGridSize() {
	return parseInt(prompt("Введіть клітинок одновимірного масиву:"));
}

function getNumOfShips() {
	return parseInt(prompt("Введіть кількість кораблів:"));
}

// Створюємо масив та заповнюємо його нулями
function createGrid(size) {
	const grid = new Array(size);
	for (let i = 0; i < size; i++) {
		grid[i] = 0;
	}
	return grid;
}

// Розміщуємо кораблі у масиві
function placeShips(grid, numOfShips) {
	for (let i = 0; i < numOfShips; i++) {
		const randomShipIndex = Math.floor(Math.random() * grid.length);
		grid[randomShipIndex] = 1;
	}
}

// Перевіряємо, чи гра закінчилася
function isGameOver(grid) {
	for (let i = 0; i < grid.length; i++) {
		if (grid[i] === 1) {
			return false;
		}
	}
	return true;
}

// Запитуємо у користувача номер клітинки, куди він стріляє
function getGuess(gridSize) {
	const guessPrompt = "Введіть номер клітинки для пострілу (від 0 до " + (gridSize - 1) + "):";
	return parseInt(prompt(guessPrompt));
}

// Перевіряємо, чи користувач влучив у корабель
function checkGuess(grid, guess) {
	if (grid[guess] === 1) {
		alert("Ви потопили корабель!");
		grid[guess] = 0;
	} else {
		alert("Промах!");
	}
}

function playGame() {
	const gridSize = getGridSize();
	const numOfShips = getNumOfShips();
	const grid = createGrid(gridSize);
	placeShips(grid, numOfShips);

	// Гра продовжується до тих пір, поки користувач не потопить усі кораблі
	while (!isGameOver(grid)) {
		const guess = getGuess(gridSize);
		checkGuess(grid, guess);
	}

	alert("Ви перемогли!");
}


