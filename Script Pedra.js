// Inicialitzem els punts
var puntsUsuari = 0;
var puntsOrdinador = 0;

function jugar(opcioJugador) {
    // Opcions possibles
    const opcions = ['pedra', 'paper', 'tisores'];

    // Triar una opció aleatòria per l'ordinador
    const opcioOrdinador = opcions[Math.floor(Math.random() * 3)];

    // Mostrar les opcions seleccionades
    const resultat = document.getElementById('resultat');

    // Comprovar qui ha guanyat i actualitzar els punts
    if (opcioJugador === opcioOrdinador) {
        resultat.textContent = `Empat! Tots dos heu triat ${opcioJugador}.`;
    } else if (
        (opcioJugador === 'pedra' && opcioOrdinador === 'tisores') ||
        (opcioJugador === 'paper' && opcioOrdinador === 'pedra') ||
        (opcioJugador === 'tisores' && opcioOrdinador === 'paper')
    ) {
        puntsUsuari++;
        resultat.textContent = `Has guanyat! ${opcioJugador} guanya contra ${opcioOrdinador}.`;
    } else {
        puntsOrdinador++;
        resultat.textContent = `Has perdut! ${opcioOrdinador} guanya contra ${opcioJugador}.`;
    }

    // Actualitzar els punts a la pantalla
    document.getElementById('puntsUsuari').textContent = puntsUsuari;
    document.getElementById('puntsOrdinador').textContent = puntsOrdinador;
}
