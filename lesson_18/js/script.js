//Homework_lesson_18. DOM. BOM. Document. Events - beginning.
"use strict";
// ================================================================
// Задача 1. Розробити калькулятор
// ================================================================
function calculate(operator) {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	let result;
	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
		default:
			throw Error("Неправильний оператор");
	}
	document.getElementById("result").value = result.toFixed(2);
}

document.getElementById("add").addEventListener("click", () => calculate('+'));
document.getElementById("subtract").addEventListener("click", () => calculate('-'));
document.getElementById("multiply").addEventListener("click", () => calculate('*'));
document.getElementById("divide").addEventListener("click", () => calculate('/'));
// ================================================================
// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
// ================================================================
function convert(amount, EUR_TO_UAH, USD_TO_UAH) {
	const euro = amount / EUR_TO_UAH;
	const dollar = amount / USD_TO_UAH;
	document.getElementById("euro").value = euro.toFixed(2);
	document.getElementById("dollar").value = dollar.toFixed(2);
}

document.getElementById("convert").addEventListener("click", () => {
	const amount = parseFloat(document.getElementById("amount").value);
	convert(amount, 40, 38);
});
// ================================================================
// Задача 3. Користувач задає рік народження. Визначити кількість 
// років користувача.
// ================================================================
function calculateAge(birthYear) {
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;
	document.getElementById("age").value = age;
}

document.getElementById("calculate-age").addEventListener("click", () => {
	const birthYear = parseInt(document.getElementById("birth-year").value);
	calculateAge(birthYear);
});
// ================================================================
// Задача 4. Наперед задано у скрипті масив зі списком бажань. 
// Після завантаження сторінки випадковим чином вибираються 3 і 
// відображаються у окремих div (їх треба створити і додати на сторінку)
// ================================================================
class Wishlist {
	constructor(wishes) {
		this.wishes = wishes;
		this.selectedWishes = [];
	}

	selectWishes(wishesNum) {
		for (let i = 0; i < wishesNum; i++) {
			const index = Math.floor(Math.random() * this.wishes.length);
			this.selectedWishes.push(this.wishes[index]);
			this.wishes.splice(index, 1);
		}
	}

	displayWishes() {
		document.getElementById("wishlist").innerHTML = this.wishes.map(wish => `<li>${wish}</li>`).join('');
		document.getElementById("selected-wishes").innerHTML = this.selectedWishes.map(wish => `<div>${wish}</div>`).join('');
	}
}
// масив зі списком бажань
const wishes = [
	"Подорож на Мальдіви",
	"Навчитись грати на гітарі",
	"Новий ноутбук",
	"Книга про JavaScript",
	"Нові кросівки",
	"Знайти нову роботу",
	"Подорож до Японії",
	"Нова фотокамера",
	"Стати волонтером",
	"Запустити власний бізнес"
];

const wishlist = new Wishlist(wishes);
wishlist.selectWishes(3);
wishlist.displayWishes();
// ================================================================
// Задача 5. Відобразити таблицю 3*4 з випадковими числами 
// (її треба динамічно створити і вставити на сторінку)
// ================================================================
class Table {
	constructor(rows, cols, container) {
		this.rows = rows;
		this.cols = cols;
		this.data = [];
		this.container = container;

		this.tableStyle = {
			border: "1px solid black",
		};

		this.cellStyle = {
			border: "1px solid black",
			padding: "5px"
		};
	}

	generateNumbers() {
		const MIN_NUM = 10;
		const MAX_NUM = 99;

		for (let i = 0; i < this.rows; i++) {
			const row = [];

			for (let j = 0; j < this.cols; j++) {
				const randomNum = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;
				row.push(randomNum);
			}

			this.data.push(row);
		}
	}

	createTable() {
		const table = document.createElement("table");

		Object.assign(table.style, this.tableStyle);

		for (const row of this.data) {
			const tr = document.createElement("tr");
			for (const cell of row) {
				const td = document.createElement("td");
				td.textContent = cell;
				Object.assign(td.style, this.cellStyle);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}

		this.container.innerHTML = '';
		this.container.appendChild(table);
	}
}

// Створюємо нову таблицю та генеруємо дані
const containerTaskFive = document.getElementById("table_container_task5");
const table = new Table(3, 4, containerTaskFive);
table.generateNumbers();

// Виводимо таблицю
table.createTable();
// ================================================================
// Задача 6. Користувач задає кількість оцінок і натискає на кнопку 
// «get table». В результаті формується таблиця з input, куди 
// користувач вводить оцінки. Після цього натискає на кнопку 
// “get sum” і знаходить середнє значення.
// ================================================================
class GradeTable {
	constructor() {
		this.table = document.getElementById('grades-table');
	}

	generateTable(numGrades) {
		this.table.innerHTML = '';
		for (let i = 0; i < numGrades; i++) {
			const row = this.table.insertRow();
			const cell = row.insertCell();
			const input = document.createElement('input');
			input.type = 'number';
			cell.appendChild(input);
		}
		const button = document.querySelector('#resultTaskSix button') || document.createElement('button');
		button.textContent = 'Get Average';
		button.addEventListener('click', () => this.getSum());
		document.getElementById('resultTaskSix').prepend(button);
	}

	getSum() {
		const inputs = document.querySelectorAll('#grades-table input');
		const sum = [...inputs].reduce((total, input) => total + parseInt(input.value) || 0, 0);
		const average = sum / inputs.length || 0;
		document.getElementById('average').textContent = `Average: ${average}`;
	}
}

document.getElementById('generate-table').addEventListener('click', () => {
	const numGrades = parseInt(document.getElementById('num-grades').value) || 0;
	const gradeTable = new GradeTable();
	gradeTable.generateTable(numGrades);
});

document.getElementById('get-sum').addEventListener('click', () => {
	const gradeTable = new GradeTable();
	gradeTable.getSum();
});
// ================================================================
// Задача 7. Подорож складається з 3 етапів. На кожному етапі 
// користувач може вибрати один з видів транспорту (авто, автобус, 
// літак - випадаючий список), харчування (сніданок, обід, вечеря – 
// checkbоx) та одного з 3-х гідів(використати  - radio buttons). 
// Ціни визначте самі. Підрахувати загальну вартість.
// ================================================================
function calculateTotal() {

	const STAGE_QUANTITY = 3;
	const transportationCosts = { auto: 500, bus: 1000, plane: 2000 };
	let total = 0;

	for (let i = 1; i <= STAGE_QUANTITY; i++) {
		const transportation = document.getElementById(`transportation${i}`).value;
		total += transportationCosts[transportation];
		const meals = document.getElementsByName(`meals${i}`);
		const guide = document.getElementsByName(`guide${i}`);
		[...meals, ...guide].forEach(item => {
			if (item.checked) total += parseInt(item.value);
		});
	}
	document.getElementById("total-cost").textContent = `Загальна вартість: ${total} грн`;
}



