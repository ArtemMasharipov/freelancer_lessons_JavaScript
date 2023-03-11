//Homework_lesson_8. Arrays. Continuation.
"use strict";
// ================================================================
// 1. Користувач вводить кількість елементів. Створити масив, що 
// складається з вказаної кількості елементів заповнених нулями.
// ================================================================

function getArrayFilledByZeros() {
	const numOfArrayElems = parseInt(prompt('Введіть кількість елементів:'));
	const arrayFilledByZeros = new Array(numOfArrayElems).fill(0);
	console.log(arrayFilledByZeros);
}
// ================================================================
// 2. Користувач вводить кількість елементів. Створити масив, у
// якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
// ================================================================
function getArrayFilledByOnesAndSevensTwoHalfs() {
	const quantityArraysElems = parseInt(prompt('Введіть кількість елементів:'));

	// Обчислюємо кількість елементів в першій та другій половинах масиву
	const halfquantityArraysElems = Math.floor(quantityArraysElems / 2);

	// Створюємо масив з 1-цями в першій половині та 7-ками в другій половині
	const arrayFilledByOnesAndSevens = new Array(quantityArraysElems);
	arrayFilledByOnesAndSevens.fill(1, 0, halfquantityArraysElems).fill(7, halfquantityArraysElems);

	// Виводимо масив в консоль
	console.log(arrayFilledByOnesAndSevens);
}
// ================================================================
// 3. Користувач вводить кількість елементів. Створити масив, у 
// якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву 
// заповнені 7-ками.
// ================================================================

function createArrayFilledByOnesAndSevens() {
	const quantityArraysElems = parseInt(prompt('Введіть кількість елементів:'));

	const arrayFilledByOnesAndSevens = new Array(quantityArraysElems);
	arrayFilledByOnesAndSevens.fill(1).fill(7, 5);

	// Виводимо масив в консоль
	console.log(arrayFilledByOnesAndSevens);
}
// ================================================================
// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
// ================================================================

function getElementsGreaterThan100(arr) {
	const elementsGreaterThan100 = [];
	for (let arrayElementGreaterThan100 of arr) {
		if (arrayElementGreaterThan100 > 100) {
			elementsGreaterThan100.push(arrayElementGreaterThan100);
		}
	}
	return elementsGreaterThan100;
}

const myArrayTaskFour = [50, 120, 80, 200, 90, 150];
const resultTaskFour = getElementsGreaterThan100(myArrayTaskFour);
console.log(resultTaskFour);
// ================================================================
// 5.Дано масив елементів. Знайти добуток додатних елементів
// ================================================================

function getProductOfPositiveElements(arr) {
	let productOfPositiveElements = 1;
	for (let positiveArrElement of arr) {
		if (positiveArrElement > 0) {
			productOfPositiveElements *= positiveArrElement;
		}
	}
	return productOfPositiveElements;
}

const myArrayTaskFive = [3, -5, 7, 2, -1, 9];
const productPositiveElements = getProductOfPositiveElements(myArrayTaskFive);
console.log(productPositiveElements);
// ================================================================
// 6.Дано масив елементів. Усі елементи, які більші за перший 
// елемент помножити на 2
// ================================================================

function getMultipliedElementsByTwoIfGreaterThanFirstElement(array) {
	const firstElement = array[0];

	array.forEach((element, index) => {
		if (element > firstElement) {
			array[index] = element * 2;
		}
	});

	return array;
}

const myArrayTaskSix = [5, 9, 2, 6, 7];
const resultArrayTaskSix = getMultipliedElementsByTwoIfGreaterThanFirstElement(myArrayTaskSix);
console.log(resultArrayTaskSix);
// ================================================================
// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів,
// які більші за 1000 грн. дати 30% знижки.
// ================================================================

function getDiscountForArraysElementsGreaterThan1000(array) {
	const DISCOUNT = 0.7;

	array.forEach((element, index) => {
		if (element > 1000) {
			array[index] = element * DISCOUNT;
		}
	});

	return array;
}

const myArrayTaskSeven = [1104, 1077, 918, 1012, 1005, 992, 1035, 1035, 1035, 1115];
const resultArrayTaskSeven = getDiscountForArraysElementsGreaterThan1000(myArrayTaskSeven);
console.log(resultArrayTaskSeven);
// ================================================================
// 8. Дано масив номерів авто. Сформувати новий масив тих, які 
// починаються на «А»
// ================================================================

function getNewArrayFirstLettersOfCarsNumbers(array) {

	const arrayFirstLettersOfCarsNumbers = array.filter(element => element[0] === 'А');

	return arrayFirstLettersOfCarsNumbers;
}

const myArrayTaskEighth = ['АВ1234АС', 'АЕ5678ВН', 'ВС9012КЕ', 'КМ3456ТР', 'МО7890ПЕ', 'НР2345СН', 'ОР6789ЕР', 'СВ0123НК', 'ТІ4567КМ', 'АН8901ОВ'];
const resultArrayTaskEighth = getNewArrayFirstLettersOfCarsNumbers(myArrayTaskEighth);
console.log(resultArrayTaskEighth);
// ================================================================
// 9. Дано масив імен. Сформувати масив з перших літер цих імен.
// ================================================================

function getArrayFirstLettersOfNames(array) {

	const arrayFirstLettersOfNames = array.map(element => element[0]);

	return arrayFirstLettersOfNames;
}

const myArrayTaskNine = ['Олександр', 'Марія', 'Іван', 'Анна', 'Петро', 'Оксана', 'Андрій', 'Катерина', 'Сергій', 'Тетяна'];
const resultArrayTaskNine = getArrayFirstLettersOfNames(myArrayTaskNine);
console.log(resultArrayTaskNine);
// ================================================================
// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, 
// який буде містити величину сплаченого податку у грн.
// ================================================================

function getArrayWithPricesMinusTaxes(array) {
	const TAXES = 0.2;
	const arrayOfPricesMinusTaxes = array.map(element => element * TAXES);

	return arrayOfPricesMinusTaxes;
}

const myArrayTaskTen = [131, 139, 117, 126, 133, 113, 130, 122, 120, 142];
const resultArrayTaskTen = getArrayWithPricesMinusTaxes(myArrayTaskTen);
console.log(resultArrayTaskTen);

