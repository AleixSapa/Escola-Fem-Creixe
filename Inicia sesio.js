var loginForm = document.getElementById("login-form");
var loginSection = document.getElementById("login-section");
var gameSection = document.getElementById("game-section");
var errorMsg = document.getElementById("error-msg");
var triesLeftMsg = document.getElementById("tries-left");

// Carregar la base de dades d'usuaris des de localStorage o crear-ne una de nova
var usuaris = JSON.parse(localStorage.getItem("usuaris")) || {
  Aleix: { password: "010914", intents: 1, data: "" },
  mat: { password: "0", intents: 0, data: "" },
  Emma: { password: "0", intents: 0, data: "" },
  Leo: { password: "0", intents: 0, data: "" },
  Luke: { password: "0", intents: 0, data: "" },
  Sofia: { password: "0", intents: 0, data: "" },
};

function guardarUsuaris() {
  localStorage.setItem("usuaris", JSON.stringify(usuaris));
}

function obtenirDataActual() {
  var avui = new Date();
  return avui.toISOString().split("T")[0]; // Format "YYYY-MM-DD"
}

function inicialitzarUsuari(username) {
  var dataActual = obtenirDataActual();
  if (usuaris[username].data !== dataActual) {
    usuaris[username].intents = 0; // Reiniciar intents
    usuaris[username].data = dataActual; // Actualitzar data
    guardarUsuaris(); // Guardar els canvis
  }
}

function actualitzarIntents(username) {
  if (usuaris[username].intents < 5) {
    usuaris[username].intents++;
    guardarUsuaris();
    return true;
  } else {
    return false;
  }
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (usuaris[username] && usuaris[username].password === password) {
    inicialitzarUsuari(username);

    var intentsRestants = 5 - usuaris[username].intents;

    loginSection.style.display = "none"; // Amaga el formulari de login
    gameSection.style.display = "block"; // Mostra els botons dels jocs
    triesLeftMsg.textContent =
      "Hola, " + username + "! Intents restants per avui: " + intentsRestants;

    // Bloquejar els botons si ja no té intents
    document.querySelectorAll(".game-container button a").forEach((enllaç) => {
      enllaç.addEventListener("click", function (event) {
        if (intentsRestants <= 0) {
          event.preventDefault();
          alert("Has arribat al límit de 5 jocs per avui.");
        } else {
          if (actualitzarIntents(username)) {
            intentsRestants--;
            triesLeftMsg.textContent =
              "Hola, " +
              username +
              "! Intents restants per avui: " +
              intentsRestants;
          }
        }
      });
    });

    errorMsg.textContent = ""; // Neteja l'error
  } else {
    errorMsg.textContent = "Nom d'usuari o contrasenya incorrectes.";
  }
});
