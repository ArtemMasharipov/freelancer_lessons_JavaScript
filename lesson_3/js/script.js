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
	let resultTaskOfComparing = '';
	if (child1Name === '' || child2Name === '' || child1CandyCount < 0 || child2CandyCount < 0 || isNaN(child1CandyCount) || isNaN(child2CandyCount)) {
		document.getElementById('resultTaskOne').textContent = "Дані не введено або введено некоректно, відкорегуйте та спробуйте ще раз.";
		return;
	} else if (child1CandyCount > child2CandyCount) {
		resultTaskOfComparing = `${child1Name} має більше цукерок, ніж ${child2Name}`;
	} else if (child2CandyCount > child1CandyCount) {
		resultTaskOfComparing = `${child2Name} має більше цукерок, ніж ${child1Name}`;
	} else {
		resultTaskOfComparing = `У ${child1Name} та ${child2Name} однакова кількість цукерок.`;
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

	if (productPrice <= 0 || money < 0) {
		resultTaskTwo.innerHTML = "Значення повинні бути більшими від нуля!";
	} else if (money < productPrice) {
		resultTaskTwo.innerHTML = "У вас недостатньо грошей для покупки товару";
	} else {
		const change = money - productPrice;
		const LOTTERY_PRICE = 4;
		if (change >= LOTTERY_PRICE) {
			resultTaskTwo.innerHTML = `Ваша здача:  ${change.toFixed(2)} грн. Хочете купити лотерею за 4 грн?`;
		} else if (change > 0) {
			resultTaskTwo.innerHTML = `Ваша здача:  ${change.toFixed(2)} грн. Дякую за покупку`;
		} else if (money === productPrice) {
			resultTaskTwo.innerHTML = "Дякую за покупку";
		} else {
			resultTaskTwo.innerHTML = "Дані не введено або введено некоректно, відкоригуйте та спробуйте ще раз.";
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
	} else {
		const userGuess2 = parseInt(prompt("Ви не вгадали число, спробуйте ще раз. Введіть число від 1 до 5"));
		if (userGuess2 === randomNumber) {
			resultTaskThree.innerHTML = "Ви вгадали число!";
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

	if (isNaN(ageInput) || ageInput <= 0) {
		resultTaskFour.innerHTML = "Введіть коректний вік.";
	} else if (ageInput < 6) {
		resultTaskFour.innerHTML = "Дитина у садочку";
	} else if (ageInput <= 17) {
		resultTaskFour.innerHTML = "Школяр";
	} else if (ageInput <= 24) {
		resultTaskFour.innerHTML = "Студент";
	} else if (ageInput <= 60) {
		resultTaskFour.innerHTML = "Працівник";
	} else if (ageInput <= 120) {
		resultTaskFour.innerHTML = "Пенсіонер";
	} else {
		resultTaskFour.innerHTML = "Люди так довго не живуть.";
	}
}
// ================================================================
// Задача 5. З клавіатури вводиться назва категорії водія (А-мотоцикл, 
// В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву 
// транспортного засобу, яким він може керувати.
// ================================================================
function checkCategory() {
	const categoryInput = document.getElementById("category").value.toUpperCase();
	const resultTaskFive = document.getElementById("resultTaskFive");
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

	resultTaskFive.textContent = `Водій може керувати транспортним засобом: ${vehicleType}.`;
}
// ================================================================
// Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// ================================================================
function showDayName() {
	// отримуємо значення номера дня тижня з текстового поля
	const dayNumber = document.getElementById("day").value;

	// виводимо назву дня тижня на екран
	const resultTaskSix = document.getElementById("resultTaskSix");
	if (dayNumber == 1) {
		resultTaskSix.innerHTML = "Понеділок";
	} else if (dayNumber == 2) {
		resultTaskSix.innerHTML = "Вівторок";
	} else if (dayNumber == 3) {
		resultTaskSix.innerHTML = "Середа";
	} else if (dayNumber == 4) {
		resultTaskSix.innerHTML = "Четвер";
	} else if (dayNumber == 5) {
		resultTaskSix.innerHTML = "П'ятниця";
	} else if (dayNumber == 6) {
		resultTaskSix.innerHTML = "Субота";
	} else if (dayNumber == 7) {
		resultTaskSix.innerHTML = "Неділя";
	} else {
		resultTaskSix.innerHTML = "Невірно введений номер дня тижня";
	}
}
// ================================================================
// Задача 7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
// ================================================================
function showMonthSeason() {
	// отримуємо номер місяця з текстового поля
	const monthNumber = document.getElementById("month").value;
	const resultTaskSeven = document.getElementById("resultTaskSeven");
	
	let season;
	if (monthNumber < 1 || monthNumber > 12) {
		resultTaskSeven.innerHTML = "Некоректне значення.";
		return;
	}else if (monthNumber <= 2 || monthNumber == 12) {
		season = "зими";
	} else if (monthNumber <= 5) {
		season = "весни";
	} else if (monthNumber <= 8) {
		season = "літа";
	} else {
		season = "осені";
	}

	// виводимо результат
	resultTaskSeven.innerHTML = `Місяць ${monthNumber} відноситься до: ${season}`;
}
