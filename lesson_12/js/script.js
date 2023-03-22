//Homework_lesson_12. Arrays. Continuation. Arrays' sort algorithms.
"use strict";
// ================================================================
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати 
// скільки було обмінів під час сортування бульбашкою
// ================================================================
function generateRandomNumbers() {
	const randomNumbers = [];
	for (let i = 0; i < 30; i++) {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		randomNumbers.push(randomNumber);
	}
	return randomNumbers;
}

const thirtyRandomNumbersArray = generateRandomNumbers();
console.log("Тестовий масив");
console.log(thirtyRandomNumbersArray);
// ================================================================
function getBubbleSortedArray(array) {
	let swapped;
	let counterSwapping = 0;
	const sortedArray = [...array];
	const intermediateStates = []; // зберігаємо стан масиву після кожного обміну

	do {
		swapped = false;
		for (let i = 1; i < sortedArray.length; i++) {
			if (sortedArray[i - 1] > sortedArray[i]) {
				let tmp = sortedArray[i - 1];
				sortedArray[i - 1] = sortedArray[i];
				sortedArray[i] = tmp;
				swapped = true;
				intermediateStates.push([...sortedArray]); // зберігаємо поточний стан масиву
			}
			counterSwapping++;
		}
	} while (swapped);
	console.log("Задача 1.");
	console.log(`Кількість обмінів під час сортування бульбашкою: ${counterSwapping}`);
	console.log(`Перші 10 станів масиву після обміну елементів під час сортування бульбашкою:`);
	console.log(intermediateStates.slice(0, 10));
	console.log(`Останні 10 станів масиву після обміну елементів під час сортування бульбашкою:`);
	console.log(intermediateStates.slice(-10));
	return sortedArray;

}

const bubbleSortedArray = getBubbleSortedArray(thirtyRandomNumbersArray);
console.log("Сортування бульбашкою");
console.log(bubbleSortedArray);
// ================================================================
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати 
// скільки було обмінів під час сортування змішуванням.
// ================================================================
function getCocktailSortedArray(array) {
	let leftIndex = 0;
	let exchangeCounter = 0;
	const sortedArray = [...array];
	let rightIndex = sortedArray.length - 1;
	const intermediateStates = []; // зберігаємо стан масиву після кожного обміну

	while (leftIndex < rightIndex) {
		for (let idx = leftIndex; idx < rightIndex; idx++) {
			if (sortedArray[idx] > sortedArray[idx + 1]) {
				[sortedArray[idx], sortedArray[idx + 1]] = [sortedArray[idx + 1], sortedArray[idx]];
				exchangeCounter++;
				intermediateStates.push([...sortedArray]); // зберігаємо поточний стан масиву
			}
		}
		rightIndex--;
		for (let idx = rightIndex; idx > leftIndex; idx--) {
			if (sortedArray[idx] < sortedArray[idx - 1]) {
				[sortedArray[idx], sortedArray[idx - 1]] = [sortedArray[idx - 1], sortedArray[idx]];
				exchangeCounter++;
				intermediateStates.push([...sortedArray]); // зберігаємо поточний стан масиву
			}
		}
		leftIndex++;
	}
	console.log("Задача 2.");
	console.log(`Кількість обмінів під час сотрування змішуванням: ${exchangeCounter}`);
	console.log(`Перші 10 станів масиву після обміну елементів під час сортування змішуванням:`);
	console.log(intermediateStates.slice(0, 10));
	console.log(`Останні 10 станів масиву після обміну елементів під час сортування змішуванням:`);
	console.log(intermediateStates.slice(-10));
	return sortedArray;
}

const cocktailSortedArray = getCocktailSortedArray(thirtyRandomNumbersArray);
console.log("Сортування змішуванням");
console.log(cocktailSortedArray);
// ================================================================
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати 
// скільки було обмінів під час сортування включеннями.
// ================================================================
function getInsertionSortedArray(array) {
	const sortedArray = [...array];
	let exchangeCounter = 0;
	const intermediateStates = []; // зберігаємо стан масиву після кожного обміну

	for (let i = 1; i < sortedArray.length; i++) {
		let current = sortedArray[i];
		let j = i - 1;
		while (j >= 0 && sortedArray[j] > current) {
			sortedArray[j + 1] = sortedArray[j];
			j--;
			exchangeCounter++;
		}
		sortedArray[j + 1] = current;
		intermediateStates.push([...sortedArray]); // зберігаємо поточний стан масиву
	}
	console.log("Задача 3.");
	console.log(`Кількість обмінів під час сотрування включенням: ${exchangeCounter}`);
	console.log(`Перші 10 станів масиву після обміну елементів під час сортування включеннями:`);
	console.log(intermediateStates.slice(0, 10));
	console.log(`Останні 10 станів масиву після обміну елементів під час сортування включеннями:`);
	console.log(intermediateStates.slice(-10));
	return sortedArray;
}

const insertionSortedArray = getInsertionSortedArray(thirtyRandomNumbersArray);
console.log("Сортування включенням");
console.log(insertionSortedArray);
// ================================================================
// ==========Задачу реалізовано у попередніх функціях.=============
// Задача 4. Для розглянутих методів сортування спробувати вивести
// етапи сортування шляхом виведення відповідних таблиць за зразком.
// Тобто кожного разу після обміну елементів вивести поточний
// стан масиву на екран. 

// ================================================================
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та 
// бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
// ================================================================
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

function binarySearch(arr, matchingName) {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	while (startIndex <= endIndex) {
		let mid = Math.floor((startIndex + endIndex) / 2);

		if (arr[mid] === matchingName) return mid;
		if (arr[mid] < matchingName) startIndex = mid + 1;
		else endIndex = mid - 1;
	}

	return -1; // якщо елемент не знайдено
}

console.log("Задача 5.");
const namesArrayTaskFive = ["Olga", "Iryna", "Viktoriya", "Anastasiya", "Yuliya", "Mariya", "Oksana", "Nataliya", "Tetiana", "Kateryna"];
const sortedNamesTaskFive = insertionSort(namesArrayTaskFive);
console.log("Масив відсортовано методом вставки")
console.log(sortedNamesTaskFive);
const index = binarySearch(sortedNamesTaskFive, "Olga");
console.log(`Ім'я Olga знаходисться під індексом: ${index}`);
// ================================================================
// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та 
// бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів 
// і під яким індексом.
// ================================================================
function binarySearchNameWithMatchingLength(arr, elemWithMantchingLength) {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	while (startIndex <= endIndex) {
		const mid = Math.floor((startIndex + endIndex) / 2);

		if (arr[mid].length === elemWithMantchingLength) return mid;
		if (arr[mid].length < elemWithMantchingLength) startIndex = mid + 1;
		else endIndex = mid - 1;
	}

	return -1; // якщо елемент не знайдено
}

console.log("Задача 6.");
const namesArrayTaskSix = ["Olga", "Viktoriya", "Iryna", "Anastasiya", "Yuliya", "Mariya", "Oksana", "Nataliya", "Tetiana", "Kateryna"];
const sortedNamesTaskSix = insertionSort(namesArrayTaskSix);
console.log("Масив відсортовано методом вставки")
console.log(sortedNamesTaskSix);
const nameIndexWithMatchingLength = binarySearchNameWithMatchingLength(sortedNamesTaskSix, 5);
console.log(`Ім'я довжиною 5 символів знаходисться під індексом:${nameIndexWithMatchingLength}`);

