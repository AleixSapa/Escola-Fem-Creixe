// Llista d'usuaris autoritzats (pots afegir més usuaris aquí)
var usuarisValids = ["aleix", "mat", "admin","proves"];

// Seleccionem els elements HTML
var loginContainer = document.getElementById("login-container");
var welcomeContainer = document.getElementById("welcome-container");
var loginBtn = document.getElementById("login-btn");
var logoutBtn = document.getElementById("logout-btn");
var usernameInput = document.getElementById("username");
var errorMsg = document.getElementById("error-msg");
var welcomeMsg = document.getElementById("welcome-msg");
var eggercicisContainer = document.getElementById("eggercicis-container");

// Estat dels exercicis desbloquejats
var desbloquejat = {
  logo: true,
  karel: false,
  web: false,
};

// Respostes correctes per cada categoria
var respostesCorrectes = {
  logo: ["avançar", "girar", "dibuixar", "esborrar"],
  karel: ["moure", "girar-esquerra", "recollir", "deixar"],
  web: ["html", "css", "javascript", "etiqueta"],
};

// Funció per iniciar sessió
loginBtn.addEventListener("click", function () {
  var username = usernameInput.value.trim().toLowerCase(); // Convertim a minúscules
  if (usuarisValids.includes(username)) {
    localStorage.setItem("currentUser", username);
    mostrarBenvinguda(username);
    errorMsg.style.display = "none"; // Amaga el missatge d'error
  } else {
    errorMsg.style.display = "block"; // Mostra el missatge d'error
  }
});

// Funció per tancar sessió
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  location.reload(); // Recàrrega la pàgina per reiniciar tot
});

// Funció per mostrar el missatge de benvinguda i els exercicis
function mostrarBenvinguda(username) {
  loginContainer.style.display = "none"; // Amaga la pantalla d'inici de sessió
  welcomeContainer.style.display = "block"; // Mostra la benvinguda
  welcomeMsg.textContent = `Benvingut, ${username}!`; // Missatge personalitzat
  mostrarExercicis();
}

// Funció per mostrar només els exercicis desbloquejats
function mostrarExercicis() {
  var logoEx = document.getElementById("logo-exercises");
  var karelEx = document.getElementById("karel-exercises");
  var webEx = document.getElementById("web-exercises");

  if (desbloquejat.logo) {
    logoEx.style.display = "block";
    activarPreguntes(logoEx, "logo");
  } else {
    logoEx.style.display = "none";
  }

  if (desbloquejat.karel) {
    karelEx.style.display = "block";
    activarPreguntes(karelEx, "karel");
  } else {
    karelEx.style.display = "none";
  }

  if (desbloquejat.web) {
    webEx.style.display = "block";
    activarPreguntes(webEx, "web");
  } else {
    webEx.style.display = "none";
  }
}

// Funció per fer que les preguntes siguin interactives
function activarPreguntes(container, categoria) {
  var preguntes = container.querySelectorAll("li");
  preguntes.forEach(function (pregunta, index) {
    pregunta.addEventListener("click", function () {
      var resposta = prompt(`Respon la pregunta: ${pregunta.textContent}`);
      if (resposta !== null) {
        validarResposta(categoria, index, resposta, function (esCorrecte) {
          if (esCorrecte) {
            pregunta.textContent += ` — Resposta correcta: ${resposta}`;
            pregunta.style.color = "green";
            pregunta.dataset.respost = "true";
          } else {
            pregunta.textContent += ` — Resposta incorrecta: ${resposta}`;
            pregunta.style.color = "red";
          }
          verificarProgres(categoria);
        });
      }
    });
  });
}

// Funció per verificar si s'han completat totes les preguntes d'una categoria
function verificarProgres(categoria) {
  var container = document.getElementById(`${categoria}-exercises`);
  var preguntes = container.querySelectorAll("li");
  var completat = true;
  preguntes.forEach(function (pregunta) {
    if (!pregunta.dataset.respost) {
      completat = false;
    }
  });

  if (completat) {
    desbloquejarSeguent(categoria);
  }
}

// Funció per desbloquejar el següent conjunt d'exercicis
function desbloquejarSeguent(categoria) {
  if (categoria === "logo") {
    desbloquejat.karel = true;
  } else if (categoria === "karel") {
    desbloquejat.web = true;
  }
  mostrarExercicis();
}

// Funció per validar la resposta
function validarResposta(categoria, index, resposta, callback) {
  var correctAnswer = respostesCorrectes[categoria][index];
  var esCorrecte = resposta.trim().toLowerCase() === correctAnswer.toLowerCase();
  callback(esCorrecte);
}

// Comprovar si hi ha un usuari actiu al carregar la pàgina
if (localStorage.getItem("currentUser")) {
  mostrarBenvinguda(localStorage.getItem("currentUser"));
}
