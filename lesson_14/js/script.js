//Homework_lesson_14. Objects. Introduсtion.
"use strict";
// ================================================================
// ================================================================
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією 
// з такими властивостями

// ----- Властивості ------
// - назва компанії на час розробки (назву періодично змінюють)
// - власник компанії
// - споснсори (масив спонсорів)
//  * прізвище спонсора
// * ім’я  спонсора
// * сума вкладень спонсора
// - рік випуску
// - вартість сайту
// ================================================================
// ================================================================
const websites = [
	{
		company: "Company A",
		owner: "John Smith",
		sponsors: [
			{ lastName: "Johnson", firstName: "Adam", amount: 5000 },
			{ lastName: "Lee", firstName: "Sarah", amount: 3000 },
		],
		year: 2005,
		cost: 8000,
	},
	{
		company: "Company B",
		owner: "Mary Johnson",
		sponsors: [
			{ lastName: "Wang", firstName: "Michael", amount: 8000 },
			{ lastName: "Garcia", firstName: "Samantha", amount: 6000 },
		],
		year: 2018,
		cost: 14000,
	},
	{
		company: "Company C",
		owner: "Robert Brown",
		sponsors: [
			{ lastName: "Davis", firstName: "Mark", amount: 10000 },
			{ lastName: "Wilson", firstName: "Emily", amount: 2000 },
		],
		year: 2000,
		cost: 12000,
	},
	{
		company: "Company D",
		owner: "David Lee",
		sponsors: [
			{ lastName: "Kim", firstName: "Jin", amount: 4000 },
			{ lastName: "Chen", firstName: "Lisa", amount: 900000 },
		],
		year: 2017,
		cost: 904000,
	},
	{
		company: "Company E",
		owner: "Jennifer Davis",
		sponsors: [
			{ lastName: "Gonzalez", firstName: "Daniel", amount: 7000 },
			{ lastName: "Hernandez", firstName: "Ava", amount: 500000 },
		],
		year: 2008,
		cost: 507000,
	},
];
// --------------------------Знайти:-------------------------------
// ================================================================
// 1) загальну вартість усіх сайтів
// ================================================================
const totalSitesCost = websites.reduce(
	(totalSitesSum, site) => totalSitesSum + site.cost, 0)
	
console.log("--------------------------------------------Задача 1");
console.log("1) Загальну вартість усіх сайтів:");
console.log(totalSitesCost);
// ================================================================
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// ================================================================
const quantityOfSitesMadeBetween2000And2009 = websites.reduce(
	(prevQuantity, sites) => sites.year > 2000 && sites.year < 2009 ? ++prevQuantity : prevQuantity,
	0);

console.log("2) Кількість сайтів, що було зроблено між 2000 та 2009 рр.:");
console.log(quantityOfSitesMadeBetween2000And2009);
// ================================================================
// 3) кількість сайтів, де сума спонсорських вкладень була більшою 
// за 100000
// ================================================================
// const AMOUNT_THRESHOLD = 100000;

// const countWebsitesWithTotalSponsorshipOver100000 = websites.reduce((count, website) => {
// 	const totalSponsorship = website.sponsors.reduce((total, sponsor) => total + sponsor.amount, 0);
// 	return totalSponsorship > AMOUNT_THRESHOLD ? count + 1 : count;
// }, 0);

// console.log("3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000:");
// console.log(countWebsitesWithTotalSponsorshipOver100000);
const AMOUNT_THRESHOLD = 100000;
let countWebsitesWithTotalSponsorshipOver100000 = 0;

for (const website of websites) {
	let totalSponsorship = 0;
	for (const sponsor of website.sponsors) {
		totalSponsorship += sponsor.amount;
	}
	if (totalSponsorship > AMOUNT_THRESHOLD) {
		countWebsitesWithTotalSponsorshipOver100000++;
	}
}

console.log("3) Кількість сайтів, де сума спонсорських вкладень була більшою за 100000:");
console.log(countWebsitesWithTotalSponsorshipOver100000);
// ================================================================
// 4) створити загальний список усіх спонсорів (поки можуть 
// повторюватись, просто зібрати усі у масив)
// ================================================================
const allSponsors = [];

for (const website of websites) {
	for (const sponsor of website.sponsors) {
		allSponsors.push(sponsor);
	}
}

console.log("4) Створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив):");
console.log(allSponsors);
// ================================================================
// 5) знайти рік, коли прибуток був найбільшим
// ================================================================
// const yearOfHighestProfit = websites.reduce((year, website) => website.cost > year.cost ? website : year).year;

let maxProfit = websites[0].cost;
let yearOfHighestProfit = websites[0].year;

for (let i = 1; i < websites.length; i++) {
	if (websites[i].cost > maxProfit) {
		maxProfit = websites[i].cost;
		yearOfHighestProfit = websites[i].year;
	}
}

console.log("5) Знайти рік, коли прибуток був найбільшим:");
console.log(yearOfHighestProfit);
// ================================================================
// 6) упорядкувати список за спаданням прибутку
// ================================================================
for (let i = 1; i < websites.length; i++) {
	let currentWebsite = websites[i];
	let j = i - 1;
	while (j >= 0 && websites[j].cost < currentWebsite.cost) {
		websites[j + 1] = websites[j];
		j--;
	}
	websites[j + 1] = currentWebsite;
}

console.log("6) Упорядкувати список за спаданням прибутку:");
console.log(websites);
// ================================================================
// 7) Створити 2 окремих списки з копіями об’єктів, 
// що містять сайти з вартість до 10000 і більше 10000
// ================================================================
const COMPARED_VALUE = 10000;
const cheaper10000Websites = [];
const expensive10000Websites = [];

for (const website of websites) {
	const websiteCopy = JSON.parse(JSON.stringify(website));
	if (website.cost < COMPARED_VALUE) {
		cheaper10000Websites.push(websiteCopy);
	} else {
		expensive10000Websites.push(websiteCopy);
	}
}

console.log("7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000:");
console.log("Список сайтів з вартістю менше 10000:");
console.log(cheaper10000Websites);
console.log("Список сайтів з вартістю більше 10000:");
console.log(expensive10000Websites);
// ================================================================
// ================================================================
// Задача 2. Розробити функцію, у яку передають об’єкт 
// (день, місяць, рік). Визначити, який буде рік через N місяців.
// ================================================================
// ================================================================
let userDate = {
	day: 31,
	month: 3,
	currentYear: 2023,
};

function getShiftedMonth({ month, currentYear }, N) {
	const yearShift = Math.floor((month - 1 + N) / 12); // визначаємо кількість років, які треба додати
	const shiftedYear = currentYear + yearShift; // додаємо кількість років до поточного року
	return shiftedYear;
}

// const N = parseInt(prompt("N="));
// const shiftedYear = getShiftedMonth(userDate, N);
// alert(`Через ${N} місяців буде ${shiftedYear} рік `);
// ================================================================
// ================================================================
// Задача 3. Ось приклад відповіді з одного з сайтів 
// (масив об’єктів з інформацією про товари) 
// ================================================================
// ================================================================


let dataList = [{
	"id": 344277463,
	"old_price": 1395,
	"old_usd_price": "37.70",
	"price": 1099,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "29.70",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 363766641,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 90,
	"min_month_price": 0,
	"sell_status": "unavailable",
	"status": "active",
	"usd_price": "2.43",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 339273715,
	"old_price": 38,
	"old_usd_price": "1.03",
	"price": 25,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "0.68",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 330746665,
	"old_price": 3087,
	"old_usd_price": "83.43",
	"price": 2548,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "68.86",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 344972806,
	"old_price": 699,
	"old_usd_price": "18.89",
	"price": 549,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "14.84",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 318302299,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 8500,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "229.73",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 361430565,
	"old_price": 3500,
	"old_usd_price": "94.59",
	"price": 1999,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "54.03",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 14429030,
	"old_price": 3339,
	"old_usd_price": "90.24",
	"price": 2999,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "81.05",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 56340912,
	"old_price": 2094,
	"old_usd_price": "56.59",
	"price": 1776,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "48.00",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 315292225,
	"old_price": 1799,
	"old_usd_price": "48.62",
	"price": 1499,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "40.51",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 28437961,
	"old_price": 42999,
	"old_usd_price": "1162.14",
	"price": 33999,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "918.89",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 339896833,
	"old_price": 6399,
	"old_usd_price": "172.95",
	"price": 5899,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "159.43",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 364354149,
	"old_price": 1600,
	"old_usd_price": "43.24",
	"price": 1500,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "40.54",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": {
		"id": 106,
		"discount_price": 1300,
		"title": "ціна по промокоду діє з 22.03 по 28.03",
		"price_show_in_site_id": 5151,
		"show_in_details": 1,
		"show_in_catalog": 1,
		"is_description": 1,
		"description": "\r<style>.popup-addprice-description h2 {display: none;}</style>\r<div class=\"cat-promo-i clearfix\">\r<h4 class=\"cat-promo-title\">Промокод на знижку</h4>\r<h2 style=\"font-size: 30px; color: #FB515D; display: inline-block; padding: 8px 16px; line-height: 35px; border: 2px dashed; border-radius: 5px;\">CYCC-MRKT-STRS-2245</h2>\r<div>\r<span class=\"btn-link btn-link-green\"><a href=\"https://rozetka.com.ua/ua/promo/allgalaxies/\" class=\"btn-link-i\" style=\"padding: 8px 16px; font-size: 17px; line-height: 20px;\">Більше товарів зі знижками</a></span>\r</div>\r</div>\r<div class=\"cat-promo-g-i-wrapper clearfix\">\r<div class=\"cat-promo-i clearfix\">\r<div class=\"cat-promo-desc\">\r<h4 class=\"cat-promo-title-small\">Як активувати промокод:</h4>\r<p> 1. Скопіюйте промокод.</p>\r<p>2. Додайте товар у кошик і перейдіть до оформлення товару. У вікні оформлення під сумою замовлення ви побачите посилання «Ввести промокод».</p>\r<p>3. Введіть промокод у полі, що з’явиться, і натисніть кнопку «Застосувати».</p><span></span>\r</div>\r</div>\r<div class=\"cat-promo-i clearfix\">\r<div class=\"cat-promo-desc\">\r<h4 class=\"cat-promo-title-small\">Під час застосування промокоду:</h4>\r<p>1. «Оплата частинами» та «Кредит 0%» без страхування не діють.</p>\r<p>2. Подарунки не входять у вартість і доступні лише при купівлі за ціною, що на сайті.</p><span></span>\r</div>\r</div>\r</div>\r\r",
		"promo_code": "",
		"url_for_image": "https://rozetka.com.ua/ua/promo/allgalaxies/",
		"images": "",
		"images_mobile": "",
		"hide_price": 0
	}
}, {
	"id": 363184995,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 4499,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "121.59",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 98077846,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 3113,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "84.14",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 310694668,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 3000,
	"min_month_price": 0,
	"sell_status": "unavailable",
	"status": "active",
	"usd_price": "81.08",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 362812029,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 21700,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "586.49",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 361422708,
	"old_price": 4100,
	"old_usd_price": "110.81",
	"price": 2699,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "72.95",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 318302257,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 8500,
	"min_month_price": 0,
	"sell_status": "unavailable",
	"status": "active",
	"usd_price": "229.73",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 310694498,
	"old_price": 0,
	"old_usd_price": "0.00",
	"price": 2963,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "80.08",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 363651273,
	"old_price": 5199,
	"old_usd_price": "140.51",
	"price": 4890,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "132.16",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 330747022,
	"old_price": 3087,
	"old_usd_price": "83.43",
	"price": 2606,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "70.43",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 362617635,
	"old_price": 4872,
	"old_usd_price": "131.68",
	"price": 2436,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "65.84",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}, {
	"id": 363614439,
	"old_price": 5199,
	"old_usd_price": "140.51",
	"price": 4890,
	"min_month_price": 0,
	"sell_status": "available",
	"status": "active",
	"usd_price": "132.16",
	"pl_charge_pcs": 0,
	"pl_use_instant_bonus": false,
	"pl_premium_bonus_charge_pcs": 0,
	"rests": -1,
	"min_price": 0,
	"max_price": 0,
	"has_shops": false,
	"info": null,
	"show_in_site": null
}];
// ================================================================
// 1) Загальну вартість (нові ціни - price)
// ================================================================
const totalPrice = dataList.reduce((prevSum, product) => prevSum + product.price, 0);

console.log("--------------------------------------------Задача 3");
console.log("1) Загальну вартість (нові ціни - price):");
console.log(totalPrice);
// ================================================================
// 2)Знайти кількість товарів, у яких ціна зменшилась 
// (price < old_price).
// ================================================================
const numOfProductsWithDecreasedPrice = dataList.reduce(
	(prevCount, product) => product.price < product.old_price ? ++prevCount : prevCount, 0);

console.log("2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price)");
console.log(numOfProductsWithDecreasedPrice);
// ================================================================
// 3) Товари, які доступні (sell_status:"available")
// ================================================================
const availableProducts = [];

for (const product of dataList) {
	if (product.sell_status === "available") availableProducts.push(product)
}

console.log("3) Товари, які доступні (sell_status:'available')");
console.log(availableProducts);
// ================================================================
// 4) Сформувати новий список об”єктів тільки доступних  для продажу 
// товарів, які міститимуть тільки ідентифікатор товару (id), 
// нову ціну (price), стару ціну (old_price), та ціну у 
// доларах (usd_price)
// ================================================================
const listOfAvailableProductsFiltered = [];

for (const product of dataList) {
	if (product.sell_status === "available") {
		listOfAvailableProductsFiltered.push({
			id: product.id,
			price: product.price,
			old_price: product.old_price,
			usd_price: product.usd_price,
		});
	}
}

console.log("4) Сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)");
console.log(listOfAvailableProductsFiltered);
