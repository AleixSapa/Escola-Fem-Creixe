var preguntes = [
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Jutge","Gutge"],
        respostaCorrecta: 0
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Jirafa","Girafa"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Geus","Jeus"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Girona","Jirona"],
        respostaCorrecta: 0
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Fugi","Fuji"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Mengar","Menjar"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Jordi","Gordi"],
        respostaCorrecta: 0
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Jogina","Joguina"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Magestad","Majestat"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quina és la correcta?",
        opcions: ["Magestat", "Majestat"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jent", "Gent"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Amija", "Amiga"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Juant", "Guant"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jangur", "Cangur"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Joguera", "Noguera"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Just", "Gust"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jos", "Gos"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Dijumenge", "Diumenge"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jet", "Jat"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Injectar", "Jnectar"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Àgil", "Àjil"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jengany", "Engany"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Amijes", "Amigues"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jelat", "Gelat"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Gesús", "Jesús"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jat", "Gat"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jineu", "Guineu"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Geep", "Jeep"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Pluga", "Pluja"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Àguila", "Àjila"],
        respostaCorrecta: 0
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Joe", "Goe"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jugar", "Gujar"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Jardi", "Jardí"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Progecció", "Projecció"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Guerra", "Guera"],
        respostaCorrecta: 1
      },
      {
        pregunta: "Quina és la correcta?",
        opcions: ["Rajola", "Rojola"],
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
