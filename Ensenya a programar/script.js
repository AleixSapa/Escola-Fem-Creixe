// Llista d'usuaris autoritzats (pots afegir més usuaris aquí)
var usuarisValids = ["aleix", "mat", "admin", "p"];

// Seleccionem els elements HTML
var loginContainer = document.getElementById("login-container");
var welcomeContainer = document.getElementById("welcome-container");
var loginBtn = document.getElementById("login-btn");
var logoutBtn = document.getElementById("logout-btn");
var usernameInput = document.getElementById("username");
var errorMsg = document.getElementById("error-msg");
var welcomeMsg = document.getElementById("welcome-msg");

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

// Funció per mostrar el missatge de benvinguda
function mostrarBenvinguda(username) {
  loginContainer.style.display = "none"; // Amaga la pantalla d'inici de sessió
  welcomeContainer.style.display = "block"; // Mostra la benvinguda
  welcomeMsg.textContent = `Benvingut, ${username}!`;
}

// Comprovar si hi ha un usuari actiu al carregar la pàgina
if (localStorage.getItem("currentUser")) {
  mostrarBenvinguda(localStorage.getItem("currentUser"));
}








localStorage.getItem = function Coença() {
  prompt("Per a fer diferents cuadrats com es fa?")
    (<Option>Amb un bucle</Option>)
    (<Option>Programent un a un</Option>)
    (<Option>Amb una funcio</Option>)
}

