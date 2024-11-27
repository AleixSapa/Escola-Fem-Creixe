const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');

let isJumping = false;
let score = 0;

// Control del salt
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

// Funció de salt
function jump() {
    isJumping = true;
    let jumpHeight = 0;

    // Anima el salt
    const jumpInterval = setInterval(() => {
        if (jumpHeight < 100) {
            jumpHeight += 10;
            player.style.bottom = `${jumpHeight}px`;
        } else {
            clearInterval(jumpInterval);
            fall();
        }
    }, 50);
}

// Funció de caiguda
function fall() {
    let fallHeight = 100;
    const fallInterval = setInterval(() => {
        if (fallHeight > 0) {
            fallHeight -= 10;
            player.style.bottom = `${fallHeight}px`;
        } else {
            clearInterval(fallInterval);
            isJumping = false;
        }
    }, 50);
}

// Comprovar la col·lisió amb l'obstacle
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (playerRect.left < obstacleRect.left + obstacleRect.width &&
        playerRect.left + playerRect.width > obstacleRect.left &&
        playerRect.bottom < obstacleRect.bottom + obstacleRect.height &&
        playerRect.bottom + playerRect.height > obstacleRect.bottom) {
        resetGame();
    }
}

// Funció per reiniciar el joc
function resetGame() {
    alert("As Perdut Amb "+score+" Punts")
    score = 0;
    scoreDisplay.textContent = `Punts: ${score}`;
    obstacle.style.animation = 'none';  // Aturar l'animació de l'obstacle
    obstacle.offsetHeight;  // Forçar el reflow
    obstacle.style.animation = '';  // Reiniciar l'animació
    obstacle.style.right = '0px';
}

// Augmentar punts i moure l'obstacle
function updateGame() {
    score++;
    scoreDisplay.textContent = `Punts: ${score}`;
    checkCollision();
}
function Reset() {
    checkCollision();
}
setInterval(updateGame, 4750);
setInterval(Reset,  10);
