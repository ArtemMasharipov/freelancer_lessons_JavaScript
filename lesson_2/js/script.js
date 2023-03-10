//Homework_lesson_2
"use strict";
// Обчислити значення виразів
// ================================================================
// Задача 0.1 S1=a+12+b
// ================================================================
function calculateSumZero() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	const C = 12;
	const S1 = a + C + b;
	document.getElementById("resultZero").innerHTML = "S1 = " + S1.toFixed(2);
}
// ================================================================
// Задача 0.2 S2=Math.sqrt((a + b) / (2 * a))
// ================================================================
function calculateOne() {
	let a = parseFloat(document.getElementById("a_one").value);
	let b = parseFloat(document.getElementById("b_one").value);
	const S2 = Math.sqrt((a + b) / (2 * a));
	document.getElementById("resultOne").innerHTML = "S2 = " + S2.toFixed(2);
}
// ================================================================
// Задача 0.3 S3=Math.cbrt((a + b) * c)
// ================================================================
function calculateTwo() {
	let a = parseFloat(document.getElementById("a_two").value);
	let b = parseFloat(document.getElementById("b_two").value);
	let c = parseFloat(document.getElementById("c_two").value);
	const S3 = Math.cbrt((a + b) * c);
	document.getElementById("resultTwo").innerHTML = "S3 = " + S3.toFixed(2);
}
// ================================================================
// Задача 0.4 S4 = Math.sin(a / (-b))
// ================================================================
function calculateThree() {
	let a = parseFloat(document.getElementById("a_three").value);
	let b = parseFloat(document.getElementById("b_three").value);
	const S4 = Math.sin(a / (-b));
	document.getElementById("resultThree").innerHTML = "S4 = " + S4.toFixed(2);
}
// ================================================================
// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
// ================================================================
function calculateTaskOne() {
	let a = parseFloat(document.getElementById("a_task1").value);
	let b = parseFloat(document.getElementById("b_task1").value);
	const sum = a + b;
	const product = a * b;
	const division = a / b;
	document.getElementById("sum").innerHTML = sum.toFixed(2);
	document.getElementById("product").innerHTML = product.toFixed(2);
	document.getElementById("division").innerHTML = division.toFixed(2);
}
// ================================================================
// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// ================================================================
function calculateTaskTwo() {
  let currentYear = parseInt(document.getElementById("currentYear").value);
  let birthday = parseInt(document.getElementById("birthday").value);
  const userAge = currentYear - birthday;
  document.getElementById("resultTask2").innerHTML = `Вам ${userAge} років(рік)`;
}
// ================================================================
// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// ================================================================
function calculateTaskThree() {
	let price = parseFloat(document.getElementById("price").value);
	let quantity = parseFloat(document.getElementById("quantity").value);
	let totalCost = quantity * price;
	const MIN_TAXES = 0.05;
	const taxes = totalCost * MIN_TAXES;
	document.getElementById("resultTask3").innerHTML = `Загальна вартість ${totalCost.toFixed(2)}; ПДВ: ${taxes.toFixed(2)}`;
}
// ================================================================
// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// ================================================================
function calculateTaskFour() {
  const cmLength = parseFloat(document.getElementById("length").value);
  const meterLength = cmLength / 100;
  const kmLength = cmLength / 1e5;
  document.getElementById("resultTask4").innerHTML = `Довжина в метрах: ${meterLength.toFixed(3)} м; кілометрах: ${kmLength.toFixed(5)} км`;
}

// ================================================================
// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// ================================================================
function calculateTaskFive() {
	let seconds = parseFloat(document.getElementById("time").value);
	let secondsToHours = Math.floor(seconds / 3600);
	let secondsToMinutes = Math.floor((seconds % 3600) / 60);
	document.getElementById("resultTask5").innerHTML = ` ${secondsToHours} год ${secondsToMinutes} хв`;
}
// ================================================================
// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// ================================================================
function calculateTaskSix() {
	const productOneCost = parseFloat(document.getElementById("productOneCost").value);
	const productOneQuantity = parseInt(document.getElementById("productOneQuantity").value);
	const productTwoCost = parseFloat(document.getElementById("productTwoCost").value);
	const productTwoQuantity = parseInt(document.getElementById("productTwoQuantity").value);
	const productThreeCost = parseFloat(document.getElementById("productThreeCost").value);
	const productThreeQuantity = parseInt(document.getElementById("productThreeQuantity").value);

	const productOneTotal = parseFloat(productOneCost * productOneQuantity);
	const productTwoTotal = parseFloat(productTwoCost * productTwoQuantity);
	const productThreeTotal = parseFloat(productThreeCost * productThreeQuantity);
	const grandTotal = (productOneTotal + productTwoTotal + productThreeTotal).toFixed(2);

	const result = document.getElementById("resultTask6");
	result.innerHTML = `
			 <table>
				<thead>
				  <tr>
					 <th>Товар</th>
					 <th>Вартість</th>
					 <th>Кількість</th>
					 <th>Вартість товару</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					 <td>Товар 1</td>
					 <td>${productOneCost}</td>
					 <td>${productOneQuantity}</td>
					 <td>${productOneTotal}</td>
				  </tr>
				  <tr>
					 <td>Товар 2</td>
					 <td>${productTwoCost}</td>
					 <td>${productTwoQuantity}</td>
					 <td>${productTwoTotal}</td>
				  </tr>
				  <tr>
					 <td>Товар 3</td>
					 <td>${productThreeCost}</td>
					 <td>${productThreeQuantity}</td>
					 <td>${productThreeTotal}</td>
				  </tr>
				  <tr>
					 <td colspan="3">Загальна вартість</td>
					 <td>${grandTotal}</td>
				  </tr>
				</tbody>
			 </table>
		  `;
}
// ================================================================
// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// ================================================================

function calculateTaskSeven() {
	const month = Math.floor(Math.random() * 12) + 1;
	const dayOfWeek = Math.floor(Math.random() * 7);
	const sum = month + dayOfWeek;
	const result = document.getElementById("resultTask7");
	result.innerHTML = `Сума номера місяця ${month} та номера дня ${dayOfWeek}: ${sum}`;
}
