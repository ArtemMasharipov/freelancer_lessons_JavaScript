//Homework_lesson_21. DOM - practice. Events - Continuation
"use strict";
// ================================================================
// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При 
// кліку на якийсь із них усі наступні повинні бути зафарбовані 
// у червоний колір.
// ================================================================
class HelloDivs {
	constructor(container, quantity, text = 'Hello!') {
		this.container = document.getElementById(container);
		this.quantity = quantity;
		this.text = text;
	}

	createDivs() {
		for (let i = 0; i < this.quantity; i++) {
			const div = document.createElement('div');
			div.innerText = this.text;
			this.container.appendChild(div);
		}
	}

	addClickHandler() {
		this.container.addEventListener('click', (event) => {
			const clickedDiv = event.target.closest('#card__task-one-container div');
			if (clickedDiv) {
				const clickedIndex = Array.from(this.container.children).indexOf(clickedDiv);
				for (let j = clickedIndex + 1; j < this.container.children.length; j++) {
					if (this.container.children[j].classList.contains('red-text')) {
						break;
					}
					this.container.children[j].classList.add('red-text');
				}
			}
		});
	}
}

const helloDivs = new HelloDivs('card__task-one-container', 10, 'Hello!');
helloDivs.createDivs();
helloDivs.addClickHandler();
// ================================================================
// Задача 2. Дано 5 елементів input. При введенні значення у якийсь 
// із них необхідно автоматично заповнювати інші (усі попередні у 
// спадному порядку(кожен попередній має значення на 1 менше за 
// наступний), усі наступні на 1 більше (кожен наступне на 1 
// більше за попереднього)
// ================================================================
class AutoFillInputs {
	constructor(container, inputsCount) {
		this.container = container;
		this.inputsCount = inputsCount;
		this.inputs = [];

		this.createInputs();
		this.addInputHandlers();
	}

	createInputs() {
		for (let i = 1; i <= this.inputsCount; i++) {
			const inputContainer = this.createInputContainer();
			const input = this.createInput(i);
			const label = this.createInputLabel(i);

			inputContainer.appendChild(label);
			inputContainer.appendChild(input);
			this.container.appendChild(inputContainer);

			this.inputs.push(input);
		}
	}

	createInputContainer() {
		const inputContainer = document.createElement('div');
		inputContainer.classList.add('input-container');
		return inputContainer;
	}

	createInput(index) {
		const input = document.createElement('input');
		input.type = 'number';
		input.id = `input-${index}`;
		return input;
	}

	createInputLabel(index) {
		const label = document.createElement('label');
		label.textContent = `Value ${index}`;
		label.setAttribute('for', `input-${index}`);
		return label;
	}

	addInputHandlers() {
		this.container.addEventListener('input', (event) => {
			const targetInput = event.target.closest('#card__task-two-container input');
			const targetIndex = this.inputs.indexOf(targetInput);
			if (targetIndex === -1) return;

			let currentValue = parseInt(targetInput.value);
			if (!currentValue) {
				targetInput.value = '';
			}

			for (let i = targetIndex - 1; i >= 0; i--) {
				this.inputs[i].value = currentValue - (targetIndex - i);
			}

			for (let i = targetIndex + 1; i < this.inputs.length; i++) {
				this.inputs[i].value = currentValue + (i - targetIndex);
			}
		});
	}
}

const containerTaskTwo = document.getElementById('card__task-two-container');
const autoFillInputs = new AutoFillInputs(containerTaskTwo, 5);
// ================================================================
// Задача 3. Дано 5 випадковим чином згенерованих нумерованих 
// списків з рандомними числами (кількість елементів у списку 
// випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
// При натисненні на кнопку нумеровані списки з парною кількістю 
// елементів зафарбувати у зелений колір, інші у червоний.
// ================================================================
class RandomList {
	constructor(container, listCount, listItemsRange, numberRange) {
		this.container = container;
		this.listCount = listCount;
		this.listItemsRange = listItemsRange;
		this.numberRange = numberRange;
	}
	// генеруємо список випадкової довжини з рандомними числами
	generateRandomList() {
		const list = document.createElement('ol');
		const length = this.getRandomNumber(this.listItemsRange[0], this.listItemsRange[1]);
		for (let i = 1; i <= length; i++) {
			const listItem = document.createElement('li');
			listItem.textContent = this.getRandomNumber(this.numberRange[0], this.numberRange[1]);
			list.appendChild(listItem);
		}
		return list;
	}

	// створюємо n списків і додаємо їх до контейнера
	generateRandomLists() {
		for (let i = 0; i < this.listCount; i++) {
			const list = this.generateRandomList();
			this.container.appendChild(list);
		}
	}

	// функція для забарвлення списків
	colorizeList(list, colorClass) {
		list.classList.remove('list-green', 'list-red');
		list.classList.add(colorClass);
	}

	// функція для забарвлення списків в залежності від їх довжини
	colorizeLists() {
		const lists = this.container.getElementsByTagName('ol');
		for (let list of lists) {
			const colorClass = (list.children.length % 2 === 0) ? 'list-green' : 'list-red';
			this.colorizeList(list, colorClass);
		}
	}

	// генеруємо випадкове число в межах range
	getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

const containerTaskThree = document.getElementById('lists-container');
const listCount = 5;
const listItemsRange = [1, 10];
const numberRange = [1, 100];

const randomListsGenerator = new RandomList(containerTaskThree, listCount, listItemsRange, numberRange);
randomListsGenerator.generateRandomLists();

const colorizeButton = document.getElementById('colorize-button');
colorizeButton.addEventListener('click', () => {
	randomListsGenerator.colorizeLists();
});
// ================================================================
// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. 
// Якщо відбувається клік на якійсь із клітинок, то до відповідної 
// таблиці додається червона рамка (спробуйте додати можливість 
// відображення кількості кліків біля назви таблиці з використанням 
// відповідно доданого для цього атрибута).
// ================================================================
class Table {
	constructor(container, name, rows, cols) {
		this.container = container;
		this.name = name;
		this.rows = rows;
		this.cols = cols;
		this.clicks = 0;
		this.createTable();
	}

	createHeader() {
		const tableHeader = document.createElement('h2');
		tableHeader.textContent = `${this.name}.`;
		tableHeader.setAttribute('data-clicks', this.clicks); // додаємо атрибут data-clicks
		return tableHeader;
	}

	createTable() {
		const tableHeader = this.createHeader();
		this.container.appendChild(tableHeader);

		const table = document.createElement('table');
		this.createRows(table);
		this.addClickHandler(table, tableHeader); // додавання обробника подій на клік по клітинці

		this.container.appendChild(table);
	}

	createRows(table) {
		for (let i = 0; i < this.rows; i++) {
			const row = document.createElement('tr');
			this.createCells(row);
			table.appendChild(row);
		}
	}

	createCells(row) {
		for (let j = 0; j < this.cols; j++) {
			const cell = document.createElement('td');
			cell.textContent = Math.floor(Math.random() * 100); // випадкове число
			row.appendChild(cell);
		}
	}

	addClickHandler(table, tableHeader) {
		table.addEventListener('click', (event) => {
			if (event.target.tagName === 'TD') { // перевірка, чи клік був на клітинці таблиці
				this.clicks++; // збільшуємо кількість кліків
				tableHeader.setAttribute('data-clicks', this.clicks); // оновлюємо значення атрибута data-clicks
				tableHeader.textContent = `${this.name}. Кліків: (${this.clicks}).`; // оновлюємо заголовок таблиці
				this.highlightTable(table); // виділяємо таблицю червоною рамкою
			}
		});
	}

	// метод для виділення таблиці червоною рамкою
	highlightTable(table) {
		// знімаємо рамку з усіх таблиць
		const tables = this.container.getElementsByTagName('table');
		for (let i = 0; i < tables.length; i++) {
			tables[i].classList.remove('highlighted');
		}
		// додаємо рамку до вибраної таблиці
		table.classList.add('highlighted');
	}
}

// створення  таблиць
const containerTaskFour = document.getElementById('tables-container');
const tableNames = ['Table 1', 'Table 2', 'Table 3'];
const tableCount = tableNames.length;

tableNames.map((name) => new Table(containerTaskFour, name, 3, 3));
// ================================================================
// Задача 5. На формі вводять 7 числових значень (вік, зріст, вага, 
// заробітна плата, стаж, номер відділу, порядковий номер). Додати 
// подію обробки події click на форму і якщо клік на input, то 
// автоматично замінювати значення його на 0.
// ================================================================
class Form {
	constructor(container, labels, names) {
		this.container = container;
		this.labels = labels;
		this.names = names;
		this.form = this.createForm();
		this.addClickHandler();
	}

	createForm() {
		const form = document.createElement('form');
		form.classList.add('form');

		for (let i = 0; i < this.labels.length; i++) {
			const label = this.createLabel(this.labels[i], this.names[i]);
			const input = this.createInput('number', this.names[i]);
			const formGroup = this.createFormGroup(label, input);

			form.appendChild(formGroup);
		}

		this.container.appendChild(form);

		return form;
	}

	createFormGroup(label, input) {
		const formGroup = document.createElement('div');
		formGroup.classList.add('form-group');
		formGroup.appendChild(label);
		formGroup.appendChild(input);
		return formGroup;
	}

	createLabel(labelText, inputName) {
		const label = document.createElement('label');
		label.htmlFor = inputName;
		label.textContent = `${labelText}:`;
		return label;
	}

	createInput(type, labelText, name) {
		const input = document.createElement('input');
		input.type = type;
		input.name = name;
		input.placeholder = `Enter ${labelText.toLowerCase()}`;
		input.id = name;
		return input;
	}

	addClickHandler() {
		this.form.addEventListener('click', (event) => {
			if (event.target.tagName === 'INPUT') {
				event.target.value = 0;
			}
		});
	}
}

const containerTaskFive = document.getElementById('my-form');
const labels = ['Age', 'Height', 'Weight', 'Salary', 'Experience', 'Department', 'Serial Number'];
const names = ['age', 'height', 'weight', 'salary', 'experience', 'department', 'serial-number'];

const formTaskFive = new Form(containerTaskFive, labels, names);


