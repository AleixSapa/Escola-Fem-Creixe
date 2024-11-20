function Sesio_1_Prova() {
    window.location.href=
    alert("Recorda que no pots mirar els exemples de la pàgina, només la teva memòria i, sobretot, Google o intel·ligències artificials.");
    alert("Recorda de posar la primera lletra en majúscula.");
    var prompt01 = prompt("Tenen diferència un h1 i un h2?");
    if (prompt01 == "Si") {
        alert("Molt bé, ho has completat!");
    } else {
        alert("Has fallat.");
        window.location.href = "https://aleixsapa.github.io/Escola-Fem-Creixe/Ensenyar%20a%20programar/Sesion%201.html";
    }
    var prompt02 = prompt("Hi Que tenen de diferencia");
    if (prompt02 == "") {
        alert("Molt bé, ho has completat!");
    } else {
        alert("Has fallat.");
        location.reload()
    }
    var prompt03 = prompt("");
    if (prompt03 == "Si") {
        alert("Molt bé, ho has completat!");
    } else {
        alert("Has fallat.");
        window.location.href = "https://aleixsapa.github.io/Escola-Fem-Creixe/Ensenyar%20a%20programar/Sesion%201.html";
    }

    var prompt01 = prompt("Has mirat els exemples, Google o intel·ligències artificials?");
    if (prompt01 == "No") {
        alert("Ho has fet bé!");
    } else {
        alert("Molt malament!");
    }
}