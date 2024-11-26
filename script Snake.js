// Variables globals
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }];
var food = { x: 0, y: 0 };
var direction = "RIGHT";
var changingDirection = false;
var points = 0;

// Mida de la cel·la
const grid = 10;

// Funció per generar la ubicació aleatòria de la menja
function generateFood() {
    food.x = Math.floor(Math.random() * 40) * grid;
    food.y = Math.floor(Math.random() * 40) * grid;
}

// Dibuixar la serp
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "green" : "black"; // Cap de la serp en verd
        ctx.fillRect(snake[i].x, snake[i].y, grid, grid);
    }
}

// Dibuixar el menjar
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, grid, grid);
}

// Moure la serp
function moveSnake() {
    var head = Object.assign({}, snake[0]);

    if (direction === "LEFT") head.x -= grid;
    if (direction === "RIGHT") head.x += grid;
    if (direction === "UP") head.y -= grid;
    if (direction === "DOWN") head.y += grid;

    snake.unshift(head); // Afegir la nova capçalera

    // Si la serp menja el menjar
    if (head.x === food.x && head.y === food.y) {
        points++;
        document.getElementById("punts").textContent = points;
        generateFood(); // Reposicionar el menjar
    } else {
        snake.pop(); // Eliminar la cua de la serp
    }
}

// Comprovar si la serp es col·lideix amb ella mateixa o amb les parets
function checkCollision() {
    var head = snake[0];

    // Col·lisions amb les parets
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    // Col·lisions amb el seu propi cos
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Controlar la direcció de la serp amb les fletxes
function changeDirection(event) {
    if (changingDirection) return;
    changingDirection = true;

    const keyPressed = event.keyCode;

    if (keyPressed === 37 && direction !== "RIGHT") direction = "LEFT";
    if (keyPressed === 38 && direction !== "DOWN") direction = "UP";
    if (keyPressed === 39 && direction !== "LEFT") direction = "RIGHT";
    if (keyPressed === 40 && direction !== "UP") direction = "DOWN";
}

// Funció per actualitzar el joc
function updateGame() {
    if (checkCollision()) {
        alert("Has perdut! Punts: " + points);
        snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }];
        points = 0;
        document.getElementById("punts").textContent = points;
        generateFood();
    }

    changingDirection = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Netejar el canvas
    moveSnake();
    drawSnake();
    drawFood();
}

// Inicialitzar el joc
generateFood();
document.addEventListener("keydown", changeDirection);
setInterval(updateGame, 100); // Actualitzar el joc cada 100ms