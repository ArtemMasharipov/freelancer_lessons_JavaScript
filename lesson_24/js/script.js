//Homework_lesson_24. Regular expressions. Continuation. Customer side data retention. Collections
"use strict";
// ================================================================
// ================================================================
// ---------------------------RegExp-------------------------------
// ================================================================
// ================================================================
// Задача  1. Дано масив рядкових представлень чисел (тобто масив 
// чисел у лапках (string). З використанням перевірки за допомогою 
// регулярних виразів і груп підрахувати кількість тих, у яких 
// перша і остання літери однакові.
// ================================================================
console.log('---------------------Задача 1------------------------');

const numbers = ["123", "456", "789", "151", "252", "303"];
const pattern = /^(\d)\d*\1$/;
const count = numbers.filter(number => pattern.test(number)).length;
console.log(count);
// ================================================================
// Задача 2. Замінити номер розділяючи послідовності цифр дефісом 
// згідно з форматом 0504546626   🡪  +380-50-45-466-26
// ================================================================
console.log('---------------------Задача 2------------------------');

const phoneNumber = "0504546626";
const formattedNumber = phoneNumber.replace(/^(\d)(\d{2})(\d{2})(\d{3})(\d{2})$/, "+38$1-$2-$3-$4-$5");
console.log(formattedNumber);
// ================================================================
// Задача 3. Після кожного значення року після 2000 року додати «р.» 
// «Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., 
// а в школі пішов 2007р.»
// ================================================================
console.log('---------------------Задача 3------------------------');

let str = "Я народився 2001, а в школу пішов у 2007, 2999, 1999, 2000";
let result = str.replace(/(2\d{3})(?<!2000)/g, "$&р.");
console.log(result);
// ================================================================
// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти 
// пробілом. 7457896524 🡪 7 457 896 524
// ================================================================
console.log('---------------------Задача 4------------------------');

const number = "7457896524";
const formattedNumberTaskFour = number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
console.log(formattedNumberTaskFour);
// ================================================================
// ================================================================
// --------------------------Map.Set.------------------------------
// ================================================================
// ================================================================
// Задача 5. Дано список з віком учнів. Підрахувати скільки разів 
// кожне значення зустрічається у списку і максимальне.
// ================================================================
console.log('---------------------Задача 5------------------------');

const ages = [15, 17, 15, 16, 17, 18, 15, 17];

// Підрахунок кількості входжень кожного віку
const countByAge = new Map();
ages.forEach((age) => {
	const count = countByAge.get(age) || 0;
	countByAge.set(age, count + 1);
});

// Вивід кількості входжень кожного віку
countByAge.forEach((count, age) => {
	console.log(`Вік ${age} зустрічається: ${count} разів`);
});

// Знаходження максимального значення
const maxCount = Math.max(...countByAge.values());
console.log(`Максимальна кількість: ${maxCount}`);
// ================================================================
// Задача 6.  Дано масив книг (назва, рік видання, автор). 
// Підрахувати кількість книг для кожного автора.
// ================================================================
console.log('---------------------Задача 6------------------------');

const books = [
	{ title: "Book 1", year: 2005, author: "Author 1" },
	{ title: "Book 2", year: 2008, author: "Author 2" },
	{ title: "Book 3", year: 2010, author: "Author 1" },
	{ title: "Book 4", year: 2012, author: "Author 3" },
	{ title: "Book 5", year: 2015, author: "Author 2" },
	{ title: "Book 6", year: 2018, author: "Author 1" },
];

const countByAuthor = new Map();
books.forEach(book => {
	const author = book.author;
	const count = countByAuthor.get(author) || 0;
	countByAuthor.set(author, count + 1);
});

countByAuthor.forEach((count, author) => {
	console.log(`Автор ${author} має: ${count} книг(и)`);
});

// ================================================================
// Задача 7. Дано інформацію про відвідувачів деякого сайту (для
// кожного відвідувача зберігається логін). Підрахувати для кожного
// клієнта кількість відвідувань.
// ================================================================
console.log('---------------------Задача 7------------------------');

const visits = [
	{ login: "user1" },
	{ login: "user2" },
	{ login: "user1" },
	{ login: "user3" },
	{ login: "user2" },
	{ login: "user1" },
	{ login: "user2" },
];

const visitCountByUser = new Map();
visits.forEach(visit => {
	const user = visit.login;
	const count = visitCountByUser.get(user) || 0;
	visitCountByUser.set(user, count + 1);
});

visitCountByUser.forEach((count, user) => {
	console.log(`Користувач ${user} відвідав сайт: ${count} раз(и)`);
});
// ================================================================
// Задача 8. Дано масив студентів (піб, курс, факультет). 
// Підрахувати кількість різних факультетів, та кількість студентів 
// кожного з курсів. 
// ================================================================
console.log('---------------------Задача 8------------------------');

const students = [
	{ name: "Студент 1", course: 2, faculty: "Факультет 1" },
	{ name: "Студент 2", course: 3, faculty: "Факультет 2" },
	{ name: "Студент 3", course: 1, faculty: "Факультет 1" },
	{ name: "Студент 4", course: 2, faculty: "Факультет 3" },
	{ name: "Студент 5", course: 1, faculty: "Факультет 2" },
	{ name: "Студент 6", course: 3, faculty: "Факультет 1" }
];

const facultyCount = new Set();
const courseCount = new Map();

students.forEach(student => {
	facultyCount.add(student.faculty);

	const course = student.course;
	const count = courseCount.get(course) || 0;
	courseCount.set(course, count + 1);
});

console.log(`Кількість різних факультетів: ${facultyCount.size}`);

courseCount.forEach((count, course) => {
	console.log(`Кількість студентів на курсі ${course}: ${count}`);
});
// ================================================================
// Задача 9. Дано масив показів температур. Підрахувати кількість 
// входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.
// ================================================================
console.log('---------------------Задача 9------------------------');

const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

// Підрахунок кількості входжень кожного показу температури
const countByTemperature = new Map();
temperatures.forEach(temp => {
	const count = countByTemperature.get(temp) || 0;
	countByTemperature.set(temp, count + 1);
});

// Округлення вгору значень температур
const roundedTemperatures = temperatures.map(temp => Math.ceil(temp));

// Підрахунок кількості унікальних температур після округлення
const uniqueTemperatures = new Set(roundedTemperatures);
const uniqueTemperatureCount = uniqueTemperatures.size;

countByTemperature.forEach((count, temp) => {
	console.log(`Показ температури ${temp} зустрічається: ${count} разів`);
});

console.log(`Кількість різних показів після округлення: ${uniqueTemperatureCount}`);
// ================================================================
// Задача 10. Дано два списки прізвищ студентів, що відвідують 
// гуртки з математики і історії. Підрахувати скільки студентів з 
// гуртка з історії також відвідують гурток з математики. Також 
// підрахувати скільки всього студентів відвідують хоча б один гурток.
// ================================================================
console.log('---------------------Задача 10------------------------');

const mathClubStudents = ["Smith", "Johnson", "Williams", "Jones"];
const historyClubStudents = ["Johnson", "Williams", "Brown", "Davis"];

// Створюємо множини зі списків студентів
const mathClubSet = new Set(mathClubStudents);
const historyClubSet = new Set(historyClubStudents);

// Кількість студентів, які відвідують гурток з історії та математики
let intersectionCount = 0;
for (const student of historyClubSet) {
	if (mathClubSet.has(student)) {
		intersectionCount++;
	}
}

console.log(`Кількість студентів з гуртка з історії, які також відвідують гурток з математики: ${intersectionCount}`);

// Кількість студентів, які відвідують хоча б один гурток
const totalStudentsSet = new Set([...mathClubSet, ...historyClubSet]);

const totalStudentsCount = totalStudentsSet.size;

console.log(`Кількість студентів, які відвідують хоча б один гурток: ${totalStudentsCount}`);
// ================================================================
// ================================================================
// ----------------LocalStorage.SessionStorage---------------------
// ================================================================
// ================================================================
// Задача 11. Користувач може змінювати колір фону, що вибирає 
// користувач з використанням
/* <input type="color">. */
// Зберігати цей колір і відновлювати при наступному відкритті. 
// Також зберігати і відображати кількість змін протягом одного сеансу.
// ================================================================
class BackgroundColorManager {
	constructor(container) {
		this.container = container;
		this.colorInput = null;
		this.changeCount = 0;
		this.initialize();
	}

	initialize() {
		this.createColorTask();
		this.createCountTask();
		this.createDisplayTask();
		this.restoreColor();
		this.addEventListeners();
	}

	createColorTask() {
		const colorTaskDiv = document.createElement('div');
		colorTaskDiv.classList.add('task');
		this.container.appendChild(colorTaskDiv);

		const colorInputLabel = document.createElement('label');
		colorInputLabel.textContent = 'Вибір кольору:';
		colorTaskDiv.appendChild(colorInputLabel);

		this.colorInput = document.createElement('input');
		this.colorInput.type = 'color';
		colorTaskDiv.appendChild(this.colorInput);
	}

	createCountTask() {
		const countTaskDiv = document.createElement('div');
		countTaskDiv.classList.add('task');
		this.container.appendChild(countTaskDiv);

		const countLabel = document.createElement('label');
		countLabel.textContent = 'Кількість змін кольору:';
		countTaskDiv.appendChild(countLabel);

		const changeCountDisplay = document.createElement('span');
		changeCountDisplay.id = 'changeCountDisplay';
		changeCountDisplay.classList.add('change-count');
		countTaskDiv.appendChild(changeCountDisplay);

		this.changeCountDisplay = changeCountDisplay;
	}

	createDisplayTask() {
		const displayTaskDiv = document.createElement('div');
		displayTaskDiv.classList.add('task');
		this.container.appendChild(displayTaskDiv);

		const displayLabel = document.createElement('label');
		displayLabel.textContent = 'Демонстрація зміни бекграунда:';
		displayTaskDiv.appendChild(displayLabel);

		this.displayDiv = document.createElement('div');
		this.displayDiv.classList.add('display-container');
		displayTaskDiv.appendChild(this.displayDiv);
	}

	restoreColor() {
		const savedColor = localStorage.getItem('backgroundColor');
		if (savedColor) this.displayDiv.style.backgroundColor = savedColor;
	}

	addEventListeners() {
		this.colorInput.addEventListener('change', () => this.changeBackgroundColor());
	}

	changeBackgroundColor() {
		const newColor = this.colorInput.value;
		this.displayDiv.style.backgroundColor = newColor;
		localStorage.setItem('backgroundColor', newColor);
		this.updateChangeCount();
	}

	updateChangeCount() {
		this.changeCount++;
		sessionStorage.setItem('changeCount', this.changeCount);
		this.displayChangeCount();
	}

	displayChangeCount() {
		this.changeCountDisplay.textContent = this.changeCount;
	}
}

const taskElevenContainer = document.getElementById('container-task-eleven');
const backgroundColorManager = new BackgroundColorManager(taskElevenContainer);
// ================================================================
// Задача 12. Зберігати у пам’яті список справ, які користувачу 
// треба виконати (зберігати у localStorage). Періодично випадковим 
// чином вибирати якусь з справ і виводити користувачу 
// (з використанням confirm). Якщо користувач натискає на «Ок», 
// то видаляти цю задачу.
// ================================================================
function saveTodoList(todoList) {
	localStorage.setItem('todoList', JSON.stringify(todoList));
}

function getTodoList() {
	const storedList = localStorage.getItem('todoList');
	return storedList ? JSON.parse(storedList) : [];
}	

function showRandomTodo() {
	const storedList = getTodoList();

	if (storedList.length === 0) {
		clearInterval(intervalId);
		alert("У вас немає жодних справ!");
		return;
	}

	const randomIndex = Math.floor(Math.random() * storedList.length);
	const randomTodo = storedList[randomIndex];

	const confirmation = confirm(`Ваша наступна справа: "${randomTodo}". Ви хочете її виконати?`);

	if (confirmation) {
		storedList.splice(randomIndex, 1);
		saveTodoList(storedList);
		alert("Справа виконана!");
	}
}

// Починаємо періодичний вивід задач
// const intervalId = setInterval(showRandomTodo, 5000);

// Приклад використання:

const initialTodoList = ["Справа 1", "Справа 2", "Справа 3"];

// Завантажуємо список справ з localStorage, якщо він існує
// const storedList = getTodoList();

// Перевіряємо, чи в localStorage вже є список справ
if (storedList.length === 0) {
	// Якщо в localStorage немає списку справ, використовуємо початковий список
	saveTodoList(initialTodoList);
} else {
	// Якщо в localStorage є список справ, використовуємо його
	alert(`Завантажено список справ з localStorage: ${storedList}`);
}
