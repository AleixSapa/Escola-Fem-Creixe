function QuiEts() {
    var pepol=prompt("Quin és el teu nom?");
    redireccio(pepol)
}
function redireccio(NomDeLaPersona) {
    
    if (NomDeLaPersona === "Aleix") {
        alert("Hola Aleix! Tens accés a continguts especials!"+" "+"¡Anem a programar!");
        // Aquí pots afegir coses especials per a Aleix
        EsElAleix()
    }
    if(NomDeLaPersona==""){
        alert("As de fuicar el teu nom");
        QuiEts()
    }else {
        alert("Hola " + NomDeLaPersona)
        // Aquí pots afegir coses per als altres noms
        NoEsElAleix()
    }

};

function EsElAleix(){
    var eleccio = prompt(
        "Tria una opció:\n1. Estudints i mestres\n2. Calendari\n3. Alubnos I Profesores\n4. Carta\n5.Deures\n6. Aprender\n7. Chat\n8. Ensenyar a programar\n9. Fotos\n10. Horari Setmanal\n11. Jocs"
    )
    if (eleccio === "1") {
        window.location.href = "Alubnos I Profesores.html"
    } else if (eleccio === "2") {
        window.location.href = "Calendari.html"
    } else if (eleccio === "3") {
        window.location.href = "Ficha.html"
    } else if (eleccio === "4") {
        window.location.href = "Carta.html"
    } else if (eleccio === "5") {
        window.location.href = "Deures.html"
    } else if (eleccio === "6") {
        window.location.href = "Aprender.html"
    } else if (eleccio === "7") {
        window.location.href = "chat.html"
    } else if (eleccio === "8") {
        window.location.href = "Ensenyar a programa.html"
    } else if (eleccio === "9") {
        window.location.href = "Fotos.html"
    } else if (eleccio === "10") {
        window.location.href = "Horario Semanal.html"
    } else if (eleccio === "11") {
        window.location.href = "Jocs.html"
    }
    
}
function NoEsElAleix(){
    var eleccio = prompt(
        "Tria una opció:\n1. Estudints i mestres\n2. Calendari\n3. Ficha\n4. Carta\n5. Deures"
    );
    
    if (eleccio === "1") {
        window.location.href = "Alubnos I Profesores.html"
    } else if (eleccio === "2") {
        window.location.href = "Calendari.html"
    } else if (eleccio === "3") {
        window.location.href = "Ficha.html"
    } else if (eleccio === "4") {
        window.location.href = "Carta.html"
    }else if (eleccio === "5") {
        window.location.href = "Deures.html"
    }
      
}


/*
var botoPrincipal = document.getElementById("principal");
botoPrincipal.onclick = function EsAleix() {
    var eleccio = prompt(
        "Tria una opció:\n1. Google\n2. Viquipèdia\n3. YouTube"
    );

    if (eleccio === "1") {
        window.location.href = "https://www.google.com"
    } else if (eleccio === "2") {
        window.location.href = "https://www.wikipedia.org"
    } else if (eleccio === "3") {
        window.location.href = "https://www.youtube.com"
    } else {
        alert("Opció no vàlida. Torna a intentar-ho.")
    }
}
botoPrincipal.onclick = function NoEsElAleix() {
    var eleccio = prompt(
        "Tria una opció:\n1. Google\n2. Viquipèdia\n3. YouTube"
    );

    if (eleccio === "1") {
        window.location.href = "https://www.google.com"
    } else if (eleccio === "2") {
        window.location.href = "https://www.wikipedia.org"
    } else if (eleccio === "3") {
        window.location.href = "https://www.youtube.com"
    } else {
        alert("Opció no vàlida. Torna a intentar-ho.")
    }
}
function Pregunta(){
var QuiEts=prompt("Com et dius")
alert("Hola "+QuiEts)
Opcions(QuiEts)
}
function Opcions(LaPersona){
    if(LaPersona==="Aleix"){
        EsAleix()
    }else{
        NoEsElAleix()
    }
}
*/