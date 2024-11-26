// Array de cartes amb números en lloc de lletres
const cards = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    { id: 7, value: '7' },
    { id: 8, value: '8' },
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    { id: 7, value: '7' },
    { id: 8, value: '8' }
];

let flippedCards = [];
let matchedCards = [];
let points = 0;
let fails = 0; // Comptador de fallades
const maxFails = 20; // Nombre màxim de fallades

// Embarrejar les cartes
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Crear les cartes
function createCards() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.dataset.value = card.value;

        cardElement.addEventListener('click', flipCard);

        board.appendChild(cardElement);
    });
}

// Actualitzar la llista d'errors
function updateErrorList(card1, card2) {
    const errorList = document.getElementById('error-list');
    const errorItem = document.createElement('li');
    errorItem.textContent = `Error: Carta ${card1.dataset.id} (${card1.dataset.value}) i Carta ${card2.dataset.id} (${card2.dataset.value})`;
    errorList.appendChild(errorItem);
}

// Actualitzar el contador d'errors
function updateErrorCount() {
    document.getElementById('errors').textContent = fails;
}

// Girar la carta
function flipCard(event) {
    const card = event.target;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.textContent = card.dataset.value;
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Comprovar si les cartes coincideixen
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        points++;
        document.getElementById('punts').textContent = points;
        flippedCards = [];
        matchedCards.push(card1, card2);

        if (matchedCards.length === cards.length) {
            setTimeout(() => alert('Has guanyat!'), 500);
        }
    } else {
        fails++;  // Augmentem les fallades
        updateErrorCount(); // Actualitzem el comptador d'errors
        updateErrorList(card1, card2); // Afegim l'error a la llista

        if (fails >= maxFails) {
            setTimeout(() => alert('Has perdut! Nombre màxim de fallades assolit!'), 500);
            disableGame();  // Desactivar el joc després de fallar
        } else {
            setTimeout(() => {
                card1.textContent = '';
                card2.textContent = '';
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

// Desactivar el joc
function disableGame() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.removeEventListener('click', flipCard));
}

// Inicialitzar el joc
function startGame() {
    shuffleCards();
    createCards();
}

startGame();
