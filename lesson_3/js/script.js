//Homework_lesson_3
"use strict";
// ================================================================
// Задача 1. З клавіатури вводяться імена двох дітей та кількість у 
// них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість 
// цукерок є більшою, або вивести, що кількість однакова.
// ================================================================
function compareCandyCounts() {
	const child1Name = document.getElementById('child1Name').value;
	const child1CandyCount = parseInt(document.getElementById('child1CandyCount').value);
	const child2Name = document.getElementById('child2Name').value;
	const child2CandyCount = parseInt(document.getElementById('child2CandyCount').value);
	let resultTaskOfComparing;
	if (child1CandyCount < 0 || child2CandyCount < 0) {
		document.getElementById("resultTaskOne").innerHTML = "Введіть невід'ємне значення";
		return;
	} else if (child1CandyCount > child2CandyCount) {
		resultTaskOfComparing = `${child1Name} має більше цукерок, ніж ${Child2Name}`;
	} else if (child2CandyCount > child1CandyCount) {
		resultTaskOfComparing = `${child2Name} має більше цукерок, ніж ${child1Name}`;
	} else if (child2CandyCount === child1CandyCount) {
		resultTaskOfComparing = `У ${child1Name} та ${child2Name} однакова кількість цукерок.`
	} else {
		resultTaskOfComparing = "Дані не введено або введено некоректно, відкоригуйте та спробуйте ще раз.";
	}

	document.getElementById('resultTaskOne').textContent = resultTaskOfComparing;
}
// ================================================================
// Задача 2. З клавіатури вводиться ціна товару і кількість грошей. 
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще 
// залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// ================================================================
function buy() {
	let productPrice = parseFloat(document.getElementById("price").value);
	let money = parseFloat(document.getElementById("money").value);
	let resultTaskTwo = document.getElementById("resultTaskTwo");

	if (productPrice <= 0 || money <= 0) {
		resultTaskTwo.innerHTML = "Значення повинні бути більшими від нуля!";
		return;
	} else if (money < productPrice) {
		resultTaskTwo.innerHTML = "У вас недостатньо грошей для покупки товару";
		return;
	} else {
		const change = money - productPrice;
		const LOTTERYPRICE = 4;
		if (change >= LOTTERYPRICE) {
			resultTaskTwo.innerHTML = `Ваша здача:  ${change.toFixed(2)} грн. Хочете купити лотерею за 4 грн?`;
		} else if (change > 0) {
			resultTaskTwo.innerHTML = `Ваша здача:  ${change.toFixed(2)} грн.`;
		} else if (money === productPrice) {
			resultTaskTwo.innerHTML = "Дякую за покупку";
		} else {
			resultTaskTwo.innerHTML = "Дані не введено або введено некоректно, відкорегуйте та спробуйте ще раз.";
		}
	}
}
// ================================================================
// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте
// вгадати число за 2 спроби.
// ================================================================
function checkGuess() {
	const randomNumber = Math.floor(Math.random() * 5) + 1;
	const userGuess = parseInt(document.getElementById("userGuess").value);
	const resultTaskThree = document.getElementById("resultTaskThree");
	if (userGuess === randomNumber) {
		resultTaskThree.innerHTML = "Ви вгадали число!";
		return;
	} else {
		const userGuess2 = parseInt(prompt("Ви не вгадали число, спробуйте ще раз. Введіть число від 1 до 5"));
		if (userGuess2 === randomNumber) {
			resultTaskThree.innerHTML = "Ви вгадали число!";
			return;
		} else {
			resultTaskThree.innerHTML = `Ви не вгадали число. Було задано: ${randomNumber}`;
		}
	}
}
// ================================================================
// Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким 
// він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// ================================================================
function checkAge() {
	const ageInput = parseInt(document.getElementById("ageInput").value);
	const resultTaskFour = document.getElementById("resultTaskFour");

	if (ageInput >= 0 && ageInput <= 6) {
		resultTaskFour.innerHTML = "Дитина у садочку";
	} else if (ageInput >= 7 && ageInput <= 17) {
		resultTaskFour.innerHTML = "Школяр";
	} else if (ageInput >= 18 && ageInput <= 24) {
		resultTaskFour.innerHTML = "Студент";
	} else if (ageInput >= 25 && ageInput <= 60) {
		resultTaskFour.innerHTML = "Працівник";
	} else if (ageInput >= 61 && ageInput <= 120) {
		resultTaskFour.innerHTML = "Пенсіонер";
	} else if (ageInput >= 121) {
		resultTaskFour.innerHTML = "Люди так довго не живуть.";
	} else {
		resultTaskFour.innerHTML = "Введіть коректний вік.";
	}
}
// ================================================================
// Задача 5. З клавіатури вводиться назва категорії водія (А-мотоцикл, 
// В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву 
// транспортного засобу, яким він може керувати.
// ================================================================
function checkCategory() {
	const categoryInput = document.getElementById("category").value.toUpperCase();
	let vehicleType;

	if (categoryInput === "A") {
		vehicleType = "мотоцикл";
	} else if (categoryInput === "B") {
		vehicleType = "легковий автомобіль";
	} else if (categoryInput === "C") {
		vehicleType = "вантажний автомобіль";
	} else {
		document.getElementById("resultTaskFive").innerHTML = "Немає даних. Введіть категорію водія A, B, C";
		return;
	}

	const resultElement = document.getElementById("resultTaskFive");
	resultElement.textContent = `Водій може керувати транспортним засобом: ${vehicleType}.`;
}
// ================================================================
// Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// ================================================================
function showDayName() {
	// отримуємо значення номера дня тижня з текстового поля
	const dayNumber = document.getElementById("day").value;

	// виводимо назву дня тижня на екран
	const result = document.getElementById("resultTaskSix");
	if (dayNumber == 1) {
		result.innerHTML = "Понеділок";
	} else if (dayNumber == 2) {
		result.innerHTML = "Вівторок";
	} else if (dayNumber == 3) {
		result.innerHTML = "Середа";
	} else if (dayNumber == 4) {
		result.innerHTML = "Четвер";
	} else if (dayNumber == 5) {
		result.innerHTML = "П'ятниця";
	} else if (dayNumber == 6) {
		result.innerHTML = "Субота";
	} else if (dayNumber == 7) {
		result.innerHTML = "Неділя";
	} else {
		result.innerHTML = "Невірно введений номер дня тижня";
	}
}
// ================================================================
// Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
// ================================================================
function showMonthSeason() {
	// отримуємо номер місяця з текстового поля
	const monthNumber = document.getElementById("month").value;

	// визначаємо, до якої пори відноситься введений місяць
	let season = "";
	if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
		season = "зими";
	} else if (monthNumber >= 3 && monthNumber <= 5) {
		season = "весни";
	} else if (monthNumber >= 6 && monthNumber <= 8) {
		season = "літа";
	} else if (monthNumber >= 9 && monthNumber <= 11) {
		season = "осені";
	} else {
		document.getElementById("resultTaskSeven").innerHTML = "Некоректне значення.";
		return;
	}

	// виводимо результат
	document.getElementById("resultTaskSeven").innerHTML = "Місяць " + monthNumber + " відноситься до: " + season + ".";
}