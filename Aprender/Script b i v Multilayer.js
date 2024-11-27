var preguntes = [
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Beure", "Veure"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Poble", "Boble"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Arbre", "Abre"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Vamable", "Amable"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Emvotit", "Embotit"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Inbent", "Invent"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Conbenir", "Convenir"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Canbair", "Canviar"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Embiar", "Enviar"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Símvol", "Símbol"],
        respostaCorrecta: 0
      },                                    
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Povra", "Pobra"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Ambulància", "Amvulància"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Tomba", "Tomva"],
        respostaCorrecta: 1
      },
];

var preguntaActual = 0;
var puntuacioJugador1 = 0;
var puntuacioJugador2 = 0;
var tornJugador1 = true; // Comença el jugador 1

function començarJoc() {
    // Barrejar les preguntes abans de començar
    preguntes = barrejarPreguntes(preguntes);

    document.getElementById('inici').style.display = 'none';
    document.getElementById('joc').style.display = 'block';
    mostrarPregunta();
}

function barrejarPreguntes(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercanviar les preguntes
    }
    return array;
}

function mostrarPregunta() {
    if (preguntaActual < preguntes.length) {
        var pregunta = preguntes[preguntaActual];
        document.getElementById('pregunta').innerText = pregunta.pregunta;

        // Assignar el text de les opcions als botons
        document.getElementById('opcio1').innerText = pregunta.opcions[0];
        document.getElementById('opcio2').innerText = pregunta.opcions[1];

        // Mostrar quin jugador li toca
        if (tornJugador1) {
            document.getElementById('torn').innerText = "Li toca al Jugador 1";
        } else {
            document.getElementById('torn').innerText = "Li toca al Jugador 2";
        }

    } else {
        mostrarResultats();
    }
}

function comprovarResposta(opcio) {
    var pregunta = preguntes[preguntaActual];
    
    if (opcio === pregunta.respostaCorrecta) {
        // El jugador encertó la pregunta
        if (tornJugador1) {
            puntuacioJugador1++;
        } else {
            puntuacioJugador2++;
        }
    } else {
        // Si el jugador falla, mostrem un alert i canvia el torn
        alert("Has fallat! Ara li toca a l'altre jugador.");
    }

    // Canviem el torn
    tornJugador1 = !tornJugador1;
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultats() {
    document.getElementById('joc').style.display = 'none';
    document.getElementById('resultats').style.display = 'block';
    document.getElementById('resultatsText').innerText = 
        "Puntuació Jugador 1: " + puntuacioJugador1 + "\n" +
        "Puntuació Jugador 2: " + puntuacioJugador2;
}

function reiniciar() {
    preguntaActual = 0;
    puntuacioJugador1 = 0;
    puntuacioJugador2 = 0;
    tornJugador1 = true; // Tornem a començar amb el jugador 1
    document.getElementById('resultats').style.display = 'none';
    document.getElementById('inici').style.display = 'block';
}
