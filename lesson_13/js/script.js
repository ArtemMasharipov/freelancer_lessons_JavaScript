//Homework_lesson_13. Arrays - practice. Recursion. Closure.
"use strict";
// ================================================================
// Задача 1. Нехай x_0 = 1, x_i = x_i_1 + 2i, де i = 1, 2, ... . 
// Визначити x_10. Розв’язати з використанням рекурсивних 
// і нерекурсивних алгоритмів.
// ================================================================
// Нерекурсивний алгоритм:
function calculateXWithLoop(N) {
	let x = 1;
	for (let i = 1; i <= N; i++) {
		x = x + 2 * i;
	}
	return x;
}

const N = 10;
const xWithLoop = calculateXWithLoop(N);
console.log("Задача 1.")
console.log(`X за допомогою циклу: ${xWithLoop}`);


// Рекурсивний алгоритм:
function calculateXWithRecursion(i) {
	if (i === 0) {
		return 1;
	} else {
		return calculateXWithRecursion(i - 1) + 2 * i;
	}
}

const xWithRecursion = calculateXWithRecursion(N);
console.log(`X за допомогою рекурсії: ${xWithRecursion}`);
// ================================================================
// Задача 2. Нехай x_0 = x_1 = 1, x_i = x_i_1 + 2x_i_2, де i = 2, 3, ...  
// Визначити x_n. Розв’язати з використанням рекурсивних 
// і нерекурсивних алгоритмів.
// ================================================================
// Нерекурсивний алгоритм:
function calculateXNonRecursive(N) {
	let x_0 = 1;
	let x_1 = 1;
	let x_i = x_1;

	for (let i = 2; i <= N; i++) {
		x_i = x_1 + 2 * x_0;
		x_0 = x_1;
		x_1 = x_i;
	}

	return x_i;
}

const xNonRecursive = calculateXNonRecursive(10);
console.log("Задача 2. Нерекурсивний алгоритм: ", xNonRecursive);

// Рекурсивний алгоритм:
function calculateXRecursive(N) {
	if (N === 0 || N === 1) {
		return 1;
	}
	return calculateXRecursive(N - 1) + 2 * calculateXRecursive(N - 2);
}

const xRecursive = calculateXRecursive(10);
console.log(`X за допомогою рекурсивного алгоритму: ${xRecursive}`);
// ================================================================
// Задача 3.  З використанням замикань розробити ітератор, тобто
// функцію, що буде поступово за окремими викликами видавати по одне
// значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне
// значення. З використанням цієї функції реалізувати перебір
// номерів місяців.
// ================================================================
function monthIterator(min = 1, max = 12) {
	let month = min - 1;
	return function () {
		month = month === max ? min : month + 1;
		return month;
	}
}

const getNextMonth = monthIterator();
let resultTaskThreeArray = [];
for (let i = 0; i < 15; i++) {
	resultTaskThreeArray.push(getNextMonth());
}

console.log("Задача 3.");
console.log(resultTaskThreeArray);
// ================================================================
// Задача 4. З використанням замикань розробити ітератор, тобто
// функцію, що буде поступово за окремими викликами видавати по одну
// букву наперед заданого слова. З використанням нього розробити
// гру «Прекладач». Виводимо для користувача опис цього слова і по
// одну букву користувач вводить переклад цього слова. Підрахувати
// кількість вгаданих букв.
// ================================================================
function createLetterIterator(word) {
	let i = 0;
	return function getNextLetter() {
		return (i < word.length) ? word[i++] : null;
	}
}

function runTranslator(word) {
	alert('Відкрита JavaScript бібліотека для створення інтерфейсів користувача?')
	let countGuessedLetters = 0;
	const getNextLetter = createLetterIterator(word);
	for (let i = 0; i < word.length; i++) {
		let result = getNextLetter();
		let userLetter = prompt(`Введіть ${i + 1} букву`);
		if (userLetter.toLowerCase() === result.toLowerCase()) {
			countGuessedLetters++;
			alert(`Ви вгадали`);
		} else {
			alert(`Ви не вгадали`);
		}
	}
	return countGuessedLetters;
}

const secretWord = 'React';
// console.log(`Кількість вгаданих букв = ${runTranslator(secretWord)}`);
// ================================================================
// Задача 5. Тренажер додавання. Кожні 10 секунд користувачу задають 
// випадковий приклад з додавання двох цифр і робиться перевірка.
// ================================================================
function createAdditionQuizGenerator() {
	let timerId; // ідентифікатор таймера

	function getRandomNumber() {
		return Math.floor(Math.random() * 10) + 1;
	}

	// генерує випадковий приклад з додавання двох цифр
	function generateQuiz() {
		const num1 = getRandomNumber();
		const num2 = getRandomNumber();
		const answer = num1 + num2;
		const userAnswer = parseInt(prompt(`Скільки буде ${num1} + ${num2}?`));
		if (userAnswer !== null) {
			totalCount++;
			if (userAnswer === answer) {
				correctCount++;
				alert(`Правильно!`);
			} else {
				alert(`Неправильно!`);
			}
		}
	}

	// починає таймер і починає генерувати приклади
	function startQuiz() {
		alert(`Тренажер додавання починається!`);
		timerId = setInterval(generateQuiz, 10000);
	}

	// зупиняє таймер і виводить результат
	function stopQuiz() {
		clearInterval(timerId);
	}

	return { startQuiz, stopQuiz };
}

// створюємо тренажер додавання і запускаємо його
// const additionQuiz = createAdditionQuizGenerator();
// additionQuiz.startQuiz();
// ================================================================
// Задача 6. Через 20 секунд перейти на сайт ukr.net. Для цього 
// через 20 секунд після відкриття треба виконати команду
// ================================================================
// setTimeout(function () {
// 	window.location.href = 'https://www.ukr.net/';
// }, 20000); // час в мілісекундах






