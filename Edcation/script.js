document.addEventListener('DOMContentLoaded', () => {
    const iniciarSessioButton = document.getElementById('iniciar-sessio');
    const usuariInput = document.getElementById('usuari');
    const aventuresDiv = document.getElementById('aventures');
    const aventuraSumesButton = document.getElementById('comenca-aventura-sumes');
    const aventuraRestesButton = document.getElementById('comenca-aventura-restes');
    const titolPregunta = document.getElementById('titol-pregunta');
    const preguntaText = document.getElementById('pregunta-text');
    const respostaInput = document.getElementById('resposta');
    const comprovarRespostaButton = document.getElementById('comprovar-resposta');
    const resultat = document.getElementById('resultat');
    const preguntaDiv = document.getElementById('preguntes');
    
    let usuari = null;
    let punts = 0;
    let preguntaIndex = 0;
    let aventuresCompletades = [];
    let preguntesActuals = [];

    // Funció per iniciar sessió
    function iniciarSessio() {
        const nomUsuari = usuariInput.value;
        if (nomUsuari) {
            usuari = nomUsuari;
            // Comprovem si l'usuari ja té punts i aventures completades
            const usuariData = JSON.parse(localStorage.getItem(usuari));
            if (usuariData) {
                punts = usuariData.punts || 0;
                aventuresCompletades = usuariData.aventuresCompletades || [];
            } else {
                // Si no existeix, creem l'usuari amb puntuació 0 i sense aventures completades
                localStorage.setItem(usuari, JSON.stringify({ punts: 0, aventuresCompletades: [] }));
            }

            // Mostrem les aventures i amaguem la secció de login
            document.getElementById('inici-sessio').style.display = 'none';
            aventuresDiv.style.display = 'block';

            // Mostrem l'aventura de restes només si l'usuari ha completat les sumes
            if (aventuresCompletades.includes('sumes')) {
                document.getElementById('aventura-restes').style.display = 'block';
            }
        } else {
            alert('Introdueix un nom d\'usuari');
        }
    }

    // Funció per començar l'aventura de sumes
    function comencarAventuraSumes() {
        preguntaIndex = 0; // Reiniciem l'índex de les preguntes
        preguntesActuals = [
            { pregunta: "5 + 3", resposta: 8 },
            { pregunta: "2 + 6", resposta: 8 },
            { pregunta: "4 + 7", resposta: 11 }
        ];

        // Canviem la secció per les preguntes
        document.getElementById('aventures').style.display = 'none';
        preguntaDiv.style.display = 'block';

        // Mostrem la primera pregunta
        mostrarPregunta();
    }

    // Funció per començar l'aventura de restes
    function comencarAventuraRestes() {
        preguntaIndex = 0; // Reiniciem l'índex de les preguntes
        preguntesActuals = [
            { pregunta: "9 - 3", resposta: 6 },
            { pregunta: "7 - 2", resposta: 5 },
            { pregunta: "8 - 5", resposta: 3 }
        ];  

        // Canviem la secció per les preguntes
        document.getElementById('aventures').style.display = 'none';
        preguntaDiv.style.display = 'block';

        // Mostrem la primera pregunta
        mostrarPregunta();
    }

    // Funció per mostrar la pregunta actual
    function mostrarPregunta() {
        if (preguntaIndex < preguntesActuals.length) {
            titolPregunta.textContent = `Pregunta de l'aventura de ${aventuresCompletades.includes('sumes') ? 'restes' : 'sumes'}`;
            preguntaText.textContent = preguntesActuals[preguntaIndex].pregunta;
        } else {
            // Quan acaba l'aventura, guardem que l'usuari l'ha completada
            if (aventuresCompletades.includes('sumes') && !aventuresCompletades.includes('restes')) {
                aventuresCompletades.push('restes');
                localStorage.setItem(usuari, JSON.stringify({ punts, aventuresCompletades }));
                alert(`Has completat l'aventura de sumes! Ara pots començar l'aventura de restes.`);
            }

            // Finalitzar l'aventura i tornar a les aventures
            preguntaDiv.style.display = 'none';
            document.getElementById('aventures').style.display = 'block';
        }
    }

    // Funció per comprovar la resposta
    function comprovarResposta() {
        const respostaUsuari = parseInt(respostaInput.value);
        const preguntaActual = preguntesActuals[preguntaIndex];

        if (respostaUsuari === preguntaActual.resposta) {
            punts += 100;
            localStorage.setItem(usuari, JSON.stringify({ punts, aventuresCompletades }));
            resultat.textContent = "Resposta correcta! Punts: " + punts;
            preguntaIndex++;
            mostrarPregunta();  // Mostrem la següent pregunta o finalitzem l'aventura
        } else {
            resultat.textContent = "Resposta incorrecta. Torna-ho a provar.";
        }
    }

    // Associar esdeveniments
    iniciarSessioButton.addEventListener('click', iniciarSessio);
    aventuraSumesButton.addEventListener('click', comencarAventuraSumes);
    aventuraRestesButton.addEventListener('click', comencarAventuraRestes);
    comprovarRespostaButton.addEventListener('click', comprovarResposta);
});
