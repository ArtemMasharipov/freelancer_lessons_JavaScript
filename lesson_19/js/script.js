//Homework_lesson_19. Practice.
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
	"./img/laptop_1.png",
	"Ноутбук Lenovo IdeaPad L3 15ITL6 (82HL00HCRA) Platinum Grey / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ",
	"16 999"
);
product1.render(containerTaskOne);

const product2 = new ProductCard(
	"./img/laptop_2.png",
	"Ноутбук ASUS TUF Gaming A15 FA506ICB-HN119 (90NR0667-M00KT0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050",
	"35 999"
);
product2.render(containerTaskOne);

const product3 = new ProductCard(
	"./img/laptop_3.png",
	"Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGN63) Space Gray",
	"43 499"
);
product3.render(containerTaskOne);

const product4 = new ProductCard(
	"./img/laptop_4.png",
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
			arrowIcon.src = `./img/${iconClass}.png`;
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
	constructor(container, minSize = 1, maxSize = 4, minInterval = 200, maxInterval = 1000) {
		this.container = container;
		this.minSize = minSize;
		this.maxSize = maxSize;
		this.minInterval = minInterval;
		this.maxInterval = maxInterval;
		this.timer = null;
		this.create();
	}

	createStar() {
		const star = document.createElement('div');
		star.className = 'star';
		star.style.width = `${this.minSize}px`;
		star.style.height = `${this.minSize}px`;
		star.style.top = `${Math.random() * 100}%`;
		star.style.left = `${Math.random() * 100}%`;
		this.container.appendChild(star);
		return star;
	}

	animateStar(star) {
		let size = this.minSize;
		let interval = Math.random() * (this.maxInterval - this.minInterval) + this.minInterval;
		this.timer = setInterval(() => {
			size += 1;
			star.style.width = `${size}px`;
			star.style.height = `${size}px`;

			if (size >= this.maxSize) {
				clearInterval(this.timer);
				star.remove();
				this.create();
			}
		}, interval);
	}

	create() {
		const star = this.createStar();
		this.animateStar(star);
	}
}

const container = document.getElementById('stars-container');
const numStars = 50;
for (let i = 0; i < numStars; i++) {
	new Star(container, 1, 4, 200, 1000);
}
// ================================================================
// Задача 5. Байрактар. З верхньої частини екрану у випадковій 
// позиції по горизонталі з’являються танки, які їдуть вниз. 
// При кліку на танк він вибухає і зникає з екрану. 
// ================================================================
class TankGame {
	constructor(container, maxTanks, tankSpeed) {
		this.container = container;
		this.tanks = [];
		this.maxTanks = maxTanks;
		this.tankSpeed = tankSpeed;
	}

	startGame() {
		this.createTankInterval = setInterval(() => this.createTank(), 1500);
		this.container.addEventListener("click", (event) => this.handleTankClick(event));
	}

	createTank() {
		if (this.tanks.length < this.maxTanks) {
			const tank = document.createElement("div");
			tank.classList.add("tank");
			tank.style.left = `${this.createRandomPosition(tank)}px`;
			this.container.appendChild(tank);
			this.tanks.push(tank);
			this.moveTank(tank, this.tankSpeed);
		}
	}

	createRandomPosition(tank) {
		const tankWidth = tank.offsetWidth;
		const maxHorizontalPosition = this.container.offsetWidth - tankWidth - 60;
		return Math.floor(Math.random() * maxHorizontalPosition) + 10;
	}


	moveTank(tank, speed) {
		const move = () => {
			const { offsetTop } = tank;
			const newTopPosition = offsetTop + speed;
			if (newTopPosition > this.container.offsetHeight) {
				const index = this.tanks.indexOf(tank);
				if (index !== -1) {
					this.tanks.splice(index, 1);
				}
			} else {
				tank.style.top = `${newTopPosition}px`;
				window.requestAnimationFrame(move);
			}
		};
		window.requestAnimationFrame(move);
	}

	createExplosion(tank) {
		const explosion = document.createElement("div");
		explosion.classList.add("explosion");
		explosion.style.top = `${tank.offsetTop + tank.offsetHeight / 2}px`;
		explosion.style.left = `${tank.offsetLeft}px`;
		this.container.appendChild(explosion);
		setTimeout(() => {
			this.container.removeChild(explosion);
		}, 500);
	}

	removeTank(tank) {
		this.container.removeChild(tank);
		const index = this.tanks.indexOf(tank);
		this.tanks.splice(index, 1);
	}

	handleTankClick(event) {
		const tank = event.target;
		if (tank.classList.contains("tank")) {
			if (this.container.contains(tank)) {
				this.createExplosion(tank);
				this.removeTank(tank);
			}
		}
	}

}

const containerTaskFive = document.getElementById("game-container");
const game = new TankGame(containerTaskFive, 10, 1);
game.startGame();
