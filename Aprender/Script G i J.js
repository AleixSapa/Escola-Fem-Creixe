var preguntes = [
    {
        pregunta: "Quina és la capital de França?",
        opcions: ["Madrid", "París"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quin és el planeta més proper al Sol?",
        opcions: ["Venus", "Mercuri"],
        respostaCorrecta: 1
    },
    {
        pregunta: "Quin any va acabar la Segona Guerra Mundial?",
        opcions: ["1945", "1950"],
        respostaCorrecta: 0
    }
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
        for (var i = 0; i < 2; i++) {
            document.getElementById('opcio' + i).innerText = pregunta.opcions[i];
        }
    } else {
        mostrarResultats();
    }
}

function comprovarResposta(opcio) {
    var pregunta = preguntes[preguntaActual];
    if (opcio === pregunta.respostaCorrecta) {
        puntuacio++;
    }
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
