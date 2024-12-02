var preguntes = [
    {a: 10, b: 3},
    {a: 15, b: 7},
    {a: 20, b: 9},
    {a: 30, b: 12},
    {a: 50, b: 22},
    {a: 45, b: 18},
    {a: 60, b: 25},
    {a: 70, b: 35},
    {a: 80, b: 42},
    {a: 100, b: 53},
    {a: 120, b: 68},
    {a: 150, b: 73},
    {a: 200, b: 89},
    {a: 250, b: 123},
    {a: 300, b: 145},
    {a: 350, b: 187},
    {a: 400, b: 212},
    {a: 500, b: 289},
    {a: 600, b: 317},
    {a: 700, b: 389},
    {a: 800, b: 420},
    {a: 900, b: 531},
    {a: 1000, b: 623},
    {a: 1200, b: 745},
    {a: 1500, b: 865},
    {a: 1600, b: 932},
    {a: 1800, b: 1053},
    {a: 1900, b: 1124},
    {a: 2100, b: 1348},
    {a: 2500, b: 1752},
    {a: 3000, b: 1789},
    {a: 3200, b: 1984},
    {a: 3500, b: 2021},
    {a: 3800, b: 2256},
    {a: 4200, b: 2387},
    {a: 4500, b: 2461},
    {a: 4900, b: 2624},
    {a: 5200, b: 2803},
    {a: 5500, b: 2957},
    {a: 6000, b: 3125},
    {a: 6300, b: 3298},
    {a: 6500, b: 3452},
    {a: 7000, b: 3589},
    {a: 7500, b: 3761},
    {a: 8000, b: 3892},
    {a: 8500, b: 4014},
    {a: 9000, b: 4157},
    {a: 9500, b: 4289},
    {a: 10000, b: 4401},
    {a: 10500, b: 4532}
];

var resultatsDiv = document.getElementById('resultats');

for (var i = 0; i < preguntes.length; i++) {
    var resultat = preguntes[i].a - preguntes[i].b;
    var preguntaDiv = document.createElement('div');
    preguntaDiv.classList.add('pregunta');
    preguntaDiv.innerHTML = preguntes[i].a + " - " + preguntes[i].b + " = ";

    var respostaDiv = document.createElement('span');
    respostaDiv.classList.add('resposta');
    respostaDiv.innerHTML = resultat;

    preguntaDiv.appendChild(respostaDiv);
    resultatsDiv.appendChild(preguntaDiv);
}
