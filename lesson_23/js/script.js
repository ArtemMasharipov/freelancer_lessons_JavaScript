//Homework_lesson_23. Working with dates. Strings. Regular expressions.
"use strict";
// ================================================================
// --------------------------Date------------------------------
// ================================================================
console.log('---------------------Date---------------------------');

function daysToMilliseconds(days) {
	const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
	return days * MILLISECONDS_PER_DAY;
}
// ================================================================
// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату 
// на момент його повернення.
// ================================================================
console.log('=====================Задача 1=======================');

const VACATION_DAYS = 56;
const currentDate = new Date();

// Додавання 56 днів до поточної дати
const returnDate = new Date(currentDate.getTime() + daysToMilliseconds(VACATION_DAYS));

// Форматування дати у зручний для відображення формат
const formattedReturnDate = returnDate.toLocaleDateString();

console.log(`Дата повернення: ${formattedReturnDate}`);
// ================================================================
// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, 
// день) та кількість днів придатності. Визначити чи є він придатним 
// на даний момент.
// ================================================================
console.log('=====================Задача 2=======================');

// Отримання введених користувачем даних: рік, місяць, день
// const year = parseInt(prompt("Введіть рік виробництва:"));
// const month = parseInt(prompt("Введіть місяць виробництва (1-12):"));
// const day = parseInt(prompt("Введіть день виробництва:"));
const year = 2023;
const month = 5;
const day = 20;

// Отримання кількості днів придатності
// const expirationDays = parseInt(prompt("Введіть кількість днів придатності:"));
const expirationDays = 7;

// Створення об'єкту Date з введеними користувачем даними
const productionDate = new Date(year, month - 1, day);

// Отримання поточної дати
const currentDateTaskTwo = new Date();

// Додавання кількості днів придатності до дати виробництва
const expirationDate = new Date(productionDate.getTime() + daysToMilliseconds(expirationDays));

// Перевірка, чи є йогурт придатним на поточний момент
const isFresh = currentDateTaskTwo <= expirationDate;

// Виведення результату
if (isFresh) {
	console.log("Йогурт є придатним до споживання.");
} else {
	console.log("Йогурт не є придатним до споживання.");
}
// ================================================================
// Задача 3. Сформувати масив з 1000 елементів від 1 до 800. 
// Порівняти час сортування бульбашкою і  вставкою.
// ================================================================
console.log('=====================Задача 3=======================');

// Функція для генерації випадкових чисел
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для сортування методом бульбашки
function bubbleSort(arr) {
	const length = arr.length;
	let swapped;

	do {
		swapped = false;

		for (let i = 0; i < length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

// Функція для сортування методом вставки
function insertionSort(arr) {
	const length = arr.length;

	for (let i = 1; i < length; i++) {
		const current = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = current;
	}

	return arr;
}

// Функція для вимірювання часу виконання сортування
function measureSortingTime(sortFunction, arr) {
	const startTime = new Date();
	sortFunction(arr);
	const endTime = new Date();
	return endTime - startTime;
}

// Створення масиву з випадковими елементами
const arrayTaskThree = Array.from({ length: 1000 }, () => generateRandomNumber(1, 800));

// Вимірювання часу виконання сортування методом бульбашки
const bubbleSortTime = measureSortingTime(bubbleSort, [...arrayTaskThree]);

// Вимірювання часу виконання сортування методом вставки
const insertionSortTime = measureSortingTime(insertionSort, [...arrayTaskThree]);

console.log(`Час сортування методом бульбашки: ${bubbleSortTime} мс`);
console.log(`Час сортування методом вставки: ${insertionSortTime} мс`);
// ================================================================
// Задача 4. Задаємо користувачу задачу з додавання двох чисел. 
// Визначити скільки секунд було використано для розв’язання задачі.
// ================================================================
console.log('=====================Задача 4=======================');

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateSum(minRange, maxRange) {
	const number1 = generateRandomNumber(minRange, maxRange);
	const number2 = generateRandomNumber(minRange, maxRange);

	const sum = number1 + number2;

	console.log(`Обчисліть суму: ${number1} + ${number2}`);

	const startTime = new Date().getTime();// Виміряти початковий час перед очікуванням введення користувачем суми

	// const userSum = parseInt(prompt(`Обчисліть суму: ${number1} + ${number2}`));

	const endTime = new Date().getTime();// Виміряти час після введення користувачем суми

	const timeInSeconds = (endTime - startTime) / 1000;// Обчислити різницю часу в секундах

	// const isCorrect = userSum === sum;

	// return { sum, isCorrect, timeInSeconds };
	return { sum, timeInSeconds };
}

const minRange = 1;
const maxRange = 100;

const result = calculateSum(minRange, maxRange);

// Вивести результати
// if (result.isCorrect) {
//   console.log("Вірно!");
// } else {
//   console.log("Невірно!");
// }

console.log(`Час виконання: ${result.timeInSeconds} с`);
// ================================================================
// ---------------------------String-------------------------------
// ================================================================
console.log('---------------------String-------------------------');
// ================================================================
// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри 
// (використати метод test та регулярні вирази).
// ================================================================
console.log('=====================Задача 1=======================');

function findStringsContainingDigits(strings) {
	const regex = /\d/;

	const result = [];

	for (const string of strings) {
		if (regex.test(string)) {
			result.push(string);
		}
	}

	return result;
}

const strings = ["Hello", "123", "World", "456", "123World"];
const stringsWithDigits = findStringsContainingDigits(strings);

console.log(stringsWithDigits);
// ================================================================
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// ================================================================
console.log('=====================Задача 2=======================');

function findStringsWithoutDigits(strings) {
	const regex = /^\D*$/;

	const result = [];

	for (const string of strings) {
		if (regex.test(string)) {
			result.push(string);
		}
	}

	return result;
}

const stringsWithoutDigits = findStringsWithoutDigits(strings);

console.log(stringsWithoutDigits);
// ================================================================
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// ================================================================
console.log('=====================Задача 3=======================');

function findStringsWithVowels(strings) {
	const regex = /[aeiou]/i;

	const result = [];

	for (const string of strings) {
		if (regex.test(string)) {
			result.push(string);
		}
	}

	return result;
}

const stringsTaskThree = ["Hello", "123", "World", "456", "Hello123"];
const stringsWithVowels = findStringsWithVowels(stringsTaskThree);

console.log(stringsWithVowels);
// ================================================================
// Задача 4. Дано масив рядків. Вивести ті, 
// у яких немає голосних літер.
// ================================================================
console.log('=====================Задача 4=======================');

function findStringsWithoutVowels(strings) {
	const regex = /^[^aeiou]+$/i;

	const result = [];

	for (const string of strings) {
		if (regex.test(string)) {
			result.push(string);
		}
	}

	return result;
}

const stringsTaskFour = ["Hello", "123", "World", "456", "Hello123", "https"];
const stringsWithoutVowels = findStringsWithoutVowels(stringsTaskFour);

console.log(stringsWithoutVowels);
// ================================================================
// Задача 5. Дано масив рядків. Вивести ті, 
// у яких є або цифра 1 або цифра 3.
// ================================================================
console.log('=====================Задача 5=======================');

const stringsTaskFive = ["hello", "world", "123", "apple", "321", "3", "1"];

const resultTaskFive = [];

for (const str of stringsTaskFive) {
	if (/[13]/.test(str)) {
		resultTaskFive.push(str);
	}
}

console.log(resultTaskFive);
// ================================================================
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
// ================================================================
console.log('=====================Задача 6=======================');

const textTaskSix = "Lorem ipsum 42 dolor sit amet, consec12tet9ur adipiscing 123 elit.";

const numbers = textTaskSix.match(/\d+/g);

console.log(numbers);
// ================================================================
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, 
// які були використано.
// ================================================================
console.log('=====================Задача 7=======================');

const textTaskSeven = "Lorem ipsum (dolor) sit amet, consectetur [adipiscing] elit.";
const delimiters = /[.,!?;:"'(){}\[\]<>]/g;

const punctuationMarks = textTaskSeven.match(delimiters);

console.log(punctuationMarks);
// ================================================================
// Задача 8. Дано рядок тексту. Вивести усі складові, 
// які розділені розділовими знаками.
// ================================================================
console.log('=====================Задача 8=======================');

const textTaskEight = "Рядок тексту, який потрібно розділити. Розділові знаки: кома, крапка, знак оклику!";

const components = textTaskEight.split(delimiters).filter(component => component.length > 0);

console.log(components);
// ================================================================
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату 
// у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// ================================================================
console.log('=====================Задача 9=======================');

const textTaskNine = "Сьогоднішня дата: 21.05.2023";

const regexTaskNine = /\b\d{2}\.\d{2}\.\d{4}\b/;
const containsDate = regexTaskNine.test(textTaskNine);

console.log(containsDate);
// ================================================================
// Задача 10. Дано рядок тексту. Підрахувати кількість 
// двоцифрових чисел у рядку.
// ================================================================
console.log('=====================Задача 10=======================');

const textTaskTen = "Текст з двоцифровими числами 12, 45, 67, 89, 101.";

const regexTaskTen = /\b\d{2}\b/g;
const matchesTaskTen = textTaskTen.match(regexTaskTen);

const count = matchesTaskTen ? matchesTaskTen.length : 0;

console.log(count);
// ================================================================
// Задача 11. Визначити чи може бути рядок тексту номером 
// банківської картки (приклад: «4142-3433-2323-3434»). 
// Знайти усі такі номери.
// ================================================================
console.log('=====================Задача 11=======================');

const textTaskEleven = "Текст з номерами карток: 4142-3433-2323-3434, 1234-5678-9012-3456, 1111-2222-3333-4444.";

const regexTaskEleven = /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g;
const matchesTaskEleven = textTaskEleven.match(regexTaskEleven);

console.log(matchesTaskEleven ? matchesTaskEleven : "У тексті відсутні номери банківських карток.");
// ================================================================
// Задача 12. Дано адресу сайту. Визначити, 
// чи є він урядовим (містить домен “gov”)
// ================================================================
console.log('=====================Задача 12=======================');

const websiteAddress = "https://www.example.gov";
const regexTaskTwelve = /\.gov\b/i;
const isGovernmentWebsite = regexTaskTwelve.test(websiteAddress);

console.log(isGovernmentWebsite);
// ================================================================
// Задача 13. Вибрати усі роки після 
// 2021 року з отриманого повідомлення
// ================================================================
console.log('=====================Задача 13=======================');

const messageTaskThirteen = "Це повідомлення містить роки: 2020, 2021, 2022 і 2023";

const regexTaskThirteen = /\b(202[2-9]|20[3-9][0-9]|2[1-9]\d{2})\b/g;
const years = messageTaskThirteen.match(regexTaskThirteen);

console.log(years);
// ================================================================
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон 
// телефоном з України (починаєтсья на «+38»)
// ================================================================
console.log('=====================Задача 14=======================');

const phoneNumber = "+380987654321";
const regexTaskFourteen = /^\+?38/;
const isUkrainianPhoneNumber = regexTaskFourteen.test(phoneNumber);

console.log(isUkrainianPhoneNumber);
// ================================================================
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку 
// через пробіл.  Замінити пробіл на дефіс.
// ================================================================
console.log('=====================Задача 15=======================');

// const fullName = prompt("Введіть прізвище та ім'я через пробіл:");
const fullName = "Іванов Іван";
const replacedFullName = fullName.replace(/(\S)\s+(\S)/, "$1-$2");

console.log(replacedFullName);

// ================================================================
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». 
// Отримати рядкове представлення дати у форматі «день/місяць/рік»
// ================================================================
console.log('=====================Задача 16=======================');

// const inputDate = prompt("Введіть дату у форматі день.місяць.рік:");
const inputDate = "21.05.2023";
const formattedDate = inputDate.replaceAll('.', '/');

console.log(formattedDate);

// ================================================================
// Задача 17. Користувач вводить день (номер дня (0-6) або 
// «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
// ================================================================
console.log('=====================Задача 17=======================');
// const inputDay = prompt("Введіть номер дня або назву дня (0-6 або sun, mon, tue, wed, thu, fri, sat):");
const inputDay = 6;
const regexTaskSeventeen = /^([0-6]|sun|mon|tue|wed|thu|fri|sat)$/i;

if (!regexTaskSeventeen.test(inputDay)) {
	throw new Error("Недопустиме значення дня. Введіть число від 0 до 6 або назву дня.");
}

const isWeekend = /^(0|6|sat|sun)$/i.test(inputDay);
const resultTaskSeventeen = isWeekend ? "Це вихідний день." : "Це робочий день.";

console.log(resultTaskSeventeen);





