//Homework_lesson_18. DOM. BOM. Document. Events - beginning.
"use strict";
// ================================================================
// Задача 1. Відображаємо картки товарів, які користувач може 
// вибирати. Вибраний товар має зелену рамку
// ================================================================
class ProductCard {
	constructor(image, description, price) {
		this.image = image;
		this.description = description;
		this.price = price;
	}

	render(container) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const productImage = document.createElement("img");
		productImage.src = this.image;
		productImage.alt = "Product Image";
		productCard.appendChild(productImage);

		const productDescription = document.createElement("p");
		productDescription.textContent = this.description;
		productCard.appendChild(productDescription);

		const productPrice = document.createElement("p");
		productPrice.textContent = this.price;
		productCard.appendChild(productPrice);

		container.appendChild(productCard);
	}
}

const containerTaskOne = document.querySelector("#card__product-container");

const product1 = new ProductCard(
	"../img/laptop_1.png",
	"Ноутбук Lenovo IdeaPad L3 15ITL6 (82HL00HCRA) Platinum Grey / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ",
	"16 999"
);
product1.render(containerTaskOne);

const product2 = new ProductCard(
	"../img/laptop_2.png",
	"Ноутбук ASUS TUF Gaming A15 FA506ICB-HN119 (90NR0667-M00KT0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050",
	"35 999"
);
product2.render(containerTaskOne);

const product3 = new ProductCard(
	"../img/laptop_3.png",
	"Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGN63) Space Gray",
	"43 499"
);
product3.render(containerTaskOne);

const product4 = new ProductCard(
	"../img/laptop_4.png",
	"Ноутбук ASUS Laptop X515EA-BQ2066 (90NB0TY1-M00VF0) Slate Grey / Intel Core i3-1115G4 / RAM 12 ГБ / SSD 512 ГБ",
	"19 999"
);
product4.render(containerTaskOne);
// ================================================================
// Задача 2. Дано список спортсменів. Потрібно сформувати список 
// тих, які будуть брати участь у змаганні. При цьому є два стовпці. 
// В одному відображені всі спортсмени, в іншому – список тих, хто 
// був вибраний. При натисканні на зелену стрілку спортсмен 
// переміщається у список для змагань. При натисканні на червону 
// стрілку спортсмен переміщається у загальний список.
// ================================================================
// Створення класу, що представляє спортсмена
class SportPlayer {
	constructor(name) {
		this.name = name;
	}
}

class SportPlayersList {
	constructor(players, selectedPlayers, container) {
		this.players = players;
		this.selectedPlayers = selectedPlayers;
		this.container = container;
		this.render();
	}

	addOrRemovePlayer(player, fromList, toList) {
		const index = fromList.indexOf(player);
		if (index !== -1) {
			fromList.splice(index, 1);
			toList.push(player);
			this.render();
		}
	}

	createPlayersList(list, headerText, className, iconClass, altText, onClickFunction) {
		const playersDiv = document.createElement("div");
		playersDiv.className = className;

		const playersList = document.createElement("ul");
		playersList.className = `${className}-list`;

		const playersHeader = document.createElement("h3");
		playersHeader.textContent = headerText;
		playersDiv.appendChild(playersHeader);

		list.forEach(player => {
			const playerItem = document.createElement("li");
			playerItem.className = `${className}-item`;

			const playerName = document.createElement("span");
			playerName.textContent = player.name;
			playerItem.appendChild(playerName);

			const arrowIcon = document.createElement("img");
			arrowIcon.src = `../img/${iconClass}.png`;
			arrowIcon.alt = altText;
			arrowIcon.className = "arrow-icon";
			arrowIcon.addEventListener("click", () => {
				onClickFunction(player);
			});

			playerItem.appendChild(arrowIcon);
			playersList.appendChild(playerItem);
		});

		playersDiv.appendChild(playersList);

		return playersDiv;
	}

	render() {
		this.container.innerHTML = "";

		const availablePlayersDiv = this.createPlayersList(this.players, "Загальний список", "available-players", "green_arrow", "Add", player => {
			this.addOrRemovePlayer(player, this.players, this.selectedPlayers);
		});

		const selectedPlayersDiv = this.createPlayersList(this.selectedPlayers, "Обрані для змагання", "selected-players", "red_arrow", "Remove", player => {
			this.addOrRemovePlayer(player, this.selectedPlayers, this.players);
		});

		this.container.appendChild(availablePlayersDiv);
		this.container.appendChild(selectedPlayersDiv);
	}
}


// Створення списку спортсменів
const players = [
	new SportPlayer("Іванов Іван"),
	new SportPlayer("Петров Петро"),
	new SportPlayer("Сидоров Олександр"),
	new SportPlayer("Коваленко Микола"),
	new SportPlayer("Павлюк Олег"),
];

// Створення списку вибраних спортсменів
const selectedPlayers = [];

// Створення списку спортсменів та його рендерінг 
const containerTaskTwo = document.getElementById("players-list-container");
const sportPlayersList = new SportPlayersList(players, selectedPlayers, containerTaskTwo);

// ================================================================
// Задача 3. Відобразити падаючий сніг. Сніжинка з’являється у 
// верхній частині екрану і з випадковою швидкістю рухається вниз. 
// Як тільки сніжинка досягає нижньої частини екрану вона знову 
// повинна з’явитись у верхній частині екрану.
// ================================================================
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	snowflake.style.left = `${Math.random() * 100}%`;
	snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
	snowContainer.appendChild(snowflake);

	snowflake.addEventListener('animationend', () => {
		snowContainer.removeChild(snowflake);
		createSnowflake();
	});
}

setInterval(createSnowflake, 100);
// ================================================================
// Задача 4. Сяючі зорі. Вказана кількість зірочок повинна 
// з’являтися у випадковій частині екрану. Кожна зірка з певним 
// кроком і інтервалом збільшується від мінімального до максимального 
// розміру. Як тільки досягнути максимального розміру зірочка повинна 
// з’являтися у іншій випадковій позиції.
// ================================================================
class Star {
	constructor(container) {
		this.container = container;
		this.size = 1;
		this.maxSize = Math.random() * 5 + 2;
		this.step = Math.random() * 0.5 + 0.5;
		this.intervalId = null;
		this.checkCollision = null;
		this.x = null;
		this.y = null;
		this.create();
	}

	create() {
		this.element = document.createElement('div');
		this.element.classList.add('star');
		this.element.style.left = `${Math.random() * 100}%`;
		this.element.style.top = `${Math.random() * 100}%`;
		this.container.appendChild(this.element);
		this.animate();
	}

	animate() {
		this.intervalId = setInterval(() => {
			this.size += this.step;
			this.element.style.width = `${this.size}px`;
			this.element.style.height = `${this.size}px`;
			this.element.style.opacity = `${this.size / this.maxSize}`;
			if (this.size >= this.maxSize) {
				clearInterval(this.intervalId);
				this.x = this.element.offsetLeft;
				this.y = this.element.offsetTop;
			}
		}, Math.random() * 100 + 50);

		this.checkCollision = setInterval(() => {
			const newStarX = this.element.offsetLeft + this.maxSize / 2;
			const newStarY = this.element.offsetTop + this.maxSize / 2;
			for (const existingStar of stars) {
				const distance = Math.sqrt((existingStar.x - newStarX) ** 2 + (existingStar.y - newStarY) ** 2);
				if (distance < existingStar.maxSize / 2 + this.maxSize / 2 + 2) {
					clearInterval(this.intervalId);
					clearInterval(this.checkCollision);
					this.element.remove();
					return;
				}
			}
		}, 10);
	}
}

const starContainer = document.getElementById('stars-container');
const stars = [];

function createStars(numStars) {
	for (let i = 0; i < numStars; i++) {
		stars.push(new Star(starContainer));
	}
}

setInterval(() => {
	createStars(40);
}, 500);
// ================================================================
// Задача 5. Байрактар. З верхньої частини екрану у випадковій 
// позиції по горизонталі з’являються танки, які їдуть вниз. 
// При кліку на танк він вибухає і зникає з екрану. 
// ================================================================
class TankGame {
	constructor(container) {
		this.container = container;
		this.tanks = [];
		this.createTank();
		setInterval(() => {
			this.createTank();
		}, 400);
	}

	createTank() {
		const tank = document.createElement('div');
		tank.classList.add('tank');
		tank.style.top = '0';
		tank.style.left = `${this.getRandomPosition()}px`;
		this.container.appendChild(tank);
		this.tanks.push(tank);
		this.moveTank(tank);
	}

	moveTank(tank) {
		const intervalId = setInterval(() => {
			const top = parseInt(tank.style.top);
			tank.style.top = `${top + 5}px`;
			if (top >= window.innerHeight - 100) {
				clearInterval(intervalId);
				this.container.removeChild(tank);
				this.tanks = this.tanks.filter((t) => t !== tank);
			}
		}, 100);
	}

	getRandomPosition() {
		let position = Math.floor(Math.random() * (this.container.clientWidth - 100));
		for (let tank of this.tanks) {
			if (position >= parseInt(tank.style.left) - 100 && position <= parseInt(tank.style.left) + 100) {
				position = this.getRandomPosition();
				break;
			}
		}
		return position;
	}

	addTankExplosion(tank) {
		const explosion = document.createElement('div');
		explosion.classList.add('explosion');
		explosion.style.top = tank.style.top;
		explosion.style.left = tank.style.left;
		this.container.appendChild(explosion);
		setTimeout(() => {
			this.container.removeChild(explosion);
		}, 1000);
	}

	addEventListeners() {
		this.container.addEventListener('click', (event) => {
			const clickedTank = event.target.closest('.tank');
			if (clickedTank) {
				this.addTankExplosion(clickedTank);
				this.container.removeChild(clickedTank);
				this.tanks = this.tanks.filter((t) => t !== clickedTank);
			}
		});
	}

	start() {
		this.addEventListeners();
	}
}

const containerTaskFive = document.getElementById('game-container');
const game = new TankGame(containerTaskFive);
game.start();
