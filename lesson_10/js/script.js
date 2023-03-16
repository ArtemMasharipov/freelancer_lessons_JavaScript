//Homework_lesson_10. Arrays. Continuation - 2.
"use strict";
// ================================================================
// ================================================================
// При розв’язанні задач намагайтесь використовувати відповідні 
// методи (map, filter, reduce,…) всюди, де це можливо
// ================================================================
// ================================================================
// Задача. Дано історію цін на цінні папери за деякий період 
// (згенерувати від 1 до 10000)
// ================================================================

function generateRandomNumbers() {
	const randomNumbers = [];
	for (let i = 0; i < 10; i++) {
		const randomNumber = Math.floor(Math.random() * 10000) + 1;
		randomNumbers.push(randomNumber);
	}
	return randomNumbers;
}

const historyOfPricesArray = generateRandomNumbers();
console.log(historyOfPricesArray);

// ================================================================
// 1)Сформувати новий масив, у якому є тільки ті, 
// що більші за 1000 грн.
// ================================================================

const historyOfPricesGreaterThan1000Array = historyOfPricesArray.filter(element => element > 1000);
console.log(historyOfPricesGreaterThan1000Array);

// ================================================================
// 2)Сформувати новий масив, у якому є номери тільки тих, 
// що більші за 1000 грн.
// ================================================================

const indexesOfPricesGreaterThan1000 = historyOfPricesArray.reduce((acc, element, index) => {
  if (element > 1000) {
    acc.push(index);
  }
  return acc;
}, []);

console.log(indexesOfPricesGreaterThan1000);

// ================================================================
// 3)Сформувати список з тих цін, які більші за попереднє значення
// ================================================================

function getListOfPricesHigherThanPrevious(historyOfPricesArray) {
  let prevValue;
  return historyOfPricesArray.reduce((acc, currentValue) => {
    if (typeof prevValue !== 'undefined' && currentValue > prevValue) {
      acc.push(currentValue);
    }
    prevValue = currentValue;
    return acc;
  }, []);
}

const listOfPricesHigherThanPrevious = getListOfPricesHigherThanPrevious(historyOfPricesArray);

console.log(listOfPricesHigherThanPrevious);


// ================================================================
// 4)Сформувати новий масив, що міститиме значення цін у відсотках 
// стосовно максимального
// ================================================================

const maxPrice = Math.max(...historyOfPricesArray);
const pricesInPercentages = historyOfPricesArray.map((price) => (price / maxPrice) * 100);
console.log(pricesInPercentages);

// ================================================================
// 5)Підрахувати кількість змін цін
// ================================================================

const numberOfPriceChanges = historyOfPricesArray.reduce((count, price, index, array) => {
	if (index === 0) {
		return count; // перший елемент не порівнюємо з попереднім
	}
	if (price !== array[index - 1]) {
		count++;
	}
	return count;
}, 0);

console.log(numberOfPriceChanges);

// ================================================================
// 6)Визначити, чи є ціна, що менше 1000
// ================================================================

const isTherePriceLessThan1000 = historyOfPricesArray.some(element => element < 1000);
console.log(isTherePriceLessThan1000);

// ================================================================
// 7)Визначати, чи усі ціни більше за 1000
// ================================================================

const whehterAllPricesGreaterThan1000 = historyOfPricesArray.every(element => element > 1000);
console.log(whehterAllPricesGreaterThan1000);

// ================================================================
// 8)Підрахувати кількість цін, що більше за 1000
// ================================================================

const numberOfPricesGreaterThan1000 = historyOfPricesArray.reduce((count, price) => price > 1000 ? ++count : count, 0);
console.log(numberOfPricesGreaterThan1000);

// const numberOfPricesGreaterThan1000 = historyOfPricesArray.filter(price => price > 1000).length;
// console.log(numberOfPricesGreaterThan1000);

// ================================================================
// 9)Підрахувати суму цін, що більше за 1000
// ================================================================

const sumOfPricesGreaterThan1000 = historyOfPricesArray.reduce((sumOfPrices, price) =>
	price > 1000 ? sumOfPrices + price : sumOfPrices, 0);
console.log(sumOfPricesGreaterThan1000);

// ================================================================
// 10)Знайти першу ціну, що більше за 1000
// ================================================================

const firstPriceGreaterThan1000 = historyOfPricesArray.find(price => price > 1000);
console.log(firstPriceGreaterThan1000);
// ================================================================
// 11)Знайти індекс першої ціни, що більше за 1000
// ================================================================

const firstIndexGreaterThan1000 = historyOfPricesArray.findIndex(price => price > 1000);
console.log(firstIndexGreaterThan1000);

// ================================================================
// 12)Знайти останню ціну, що більше за 1000
// ================================================================

const lastPriceGreaterThan1000 = historyOfPricesArray.findLast(element=>element>1000);
console.log(lastPriceGreaterThan1000);

// ================================================================
// 13)Знайти індекс останньої ціни, що більше за 1000
// ================================================================

const lastIndexOfPriceGreaterThan1000 = historyOfPricesArray.findLastIndex(price => price > 1000);
console.log(lastIndexOfPriceGreaterThan1000);
