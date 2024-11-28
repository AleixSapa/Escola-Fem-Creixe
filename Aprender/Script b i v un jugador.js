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
var puntuacio = 0;

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
    } else {
        mostrarResultats();
    }
}

function comprovarResposta(opcio) {
    var pregunta = preguntes[preguntaActual];
    if (opcio === pregunta.respostaCorrecta) {
        puntuacio++;
     //   alert("Ho has encertat! Molt bé!");
    }
   // else{ alert("Has fallat"); }
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultats() {
    document.getElementById('joc').style.display = 'none';
    document.getElementById('resultats').style.display = 'block';
    document.getElementById('resultatsText').innerText = "Has obtingut " + puntuacio + " de " + preguntes.length + " respostes correctes!";
}

function reiniciar() {
    preguntaActual = 0;
    puntuacio = 0;
    document.getElementById('resultats').style.display = 'none';
    document.getElementById('inici').style.display = 'block';
}
document.getElementById('opcio1').innerText = pregunta.opcions[0];
document.getElementById('opcio2').innerText = pregunta.opcions[1];
