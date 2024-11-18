// Funció per comprovar les respostes de les sumes
document.getElementById("submitBtn").addEventListener("click", function () {
    // Obtenir les valors introduïts per l'usuari
    const sum1 = parseInt(document.getElementById("sum1").value);
    const sum2 = parseInt(document.getElementById("sum2").value);
    const sum3 = parseInt(document.getElementById("sum3").value);

    // Resultats esperats
    const correctAnswers = [8, 19, 14];

    // Comprovar les respostes
    let correct = 0;

    if (sum1 === correctAnswers[0]) correct++;
    if (sum2 === correctAnswers[1]) correct++;
    if (sum3 === correctAnswers[2]) correct++;

    // Mostrar el resultat
    const resultElement = document.getElementById("result");
    if (correct === 3) {
        resultElement.textContent = "Has resolt totes les sumes correctament! ";
        document.getElementById("nextBtn").style.display = "block";  // Mostrar botó per completar aventura
    } else {
        resultElement.textContent = `Has encertat ${correct} de les 3 sumes. Torna-ho a provar!`;
        document.getElementById("nextBtn").style.display = "none"; // No mostrar el botó de completar
    }
});

// Funció per completar l'aventura
function completeAdventure() {
    // Enviar a la pàgina següent de l'aventura
    window.location.href = "El-Laverint-Sumat.html"; // Redirigir a la nova pàgina d'aventura
}
