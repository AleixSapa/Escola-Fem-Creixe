// Funció per comprovar les respostes del Laverint
document.getElementById("submitLaverintBtn").addEventListener("click", function () {
    // Obtenir les valors introduïts per l'usuari
    const sum4 = parseInt(document.getElementById("sum4").value);
    const sum5 = parseInt(document.getElementById("sum5").value);
    const sum6 = parseInt(document.getElementById("sum6").value);

    // Resultats esperats per al Laverint
    const correctAnswersLaverint = [15, 23, 19];

    // Comprovar les respostes
    let correct = 0;

    if (sum4 === correctAnswersLaverint[0]) correct++;
    if (sum5 === correctAnswersLaverint[1]) correct++;
    if (sum6 === correctAnswersLaverint[2]) correct++;

    // Mostrar el resultat
    const resultElementLaverint = document.getElementById("resultLaverint");
    if (correct === 3) {
        resultElementLaverint.textContent = "Has resolt totes les sumes correctament! ";
        document.getElementById("nextLaverintBtn").style.display = "block";  // Mostrar botó per completar aventura
    } else {
        resultElementLaverint.textContent = `Has encertat ${correct} de les 3 sumes. Torna-ho a provar!`;
        document.getElementById("nextLaverintBtn").style.display = "none"; // No mostrar el botó de completar
    }
});

// Funció per completar el Laverint
function completeLaverintAdventure() {
    alert("Has completat l'aventura del Laverint! Felicitats!");
    // Aquí pots fer altres accions, com actualitzar el progrés de l'usuari
    // Redirigir a la següent aventura o a la pàgina principal
    window.location.href = "index.html";  // Torna a la pàgina principal
}
