function Avans_QuelocalStorage(params) {
    params
}
function localStorage(Avans_Que,Pun_Que) {
    Avans_Que,localStorage,Pun_Que
}
function Despres(params) {
    
}
// Identifiquem els botons
var logo = document.getElementById("logo");
var karel = document.getElementById("karel");
var python = document.getElementById("python");
var web = document.getElementById("web");
// Funció per carregar l'estat del progrés
function carregarProgres() {
  var estatKarel = localStorage.getItem("karel");
  var estatPython = localStorage.getItem("python");
  var estatWeb = localStorage.getItem("web");
  if (estatKarel === "desbloquejat") {
    karel.classList.remove("bloquejat");
    karel.classList.add("desbloquejat");
    karel.disabled = false;
  }
  if (estatPython === "desbloquejat") {
    python.classList.remove("bloquejat");
    python.classList.add("desbloquejat");
    python.disabled = false;
  }
  if (estatWeb === "desbloquejat") {
    web.classList.remove("bloquejat");
    web.classList.add("desbloquejat");
    web.disabled = false;
  }
}

// Funcions per desbloquejar cursos
logo.addEventListener("click", function () {
  alert("Has completat Logo! Karel es desbloqueja.");
  localStorage.setItem("karel", "desbloquejat");
  carregarProgres();
});

karel.addEventListener("click", function () {
  alert("Has completat Karel! Python es desbloqueja.");
  localStorage.setItem("python", "desbloquejat");
  carregarProgres();
});

python.addEventListener("click", function () {
  alert("Has completat Python! Web es desbloqueja.");
  localStorage.setItem("web", "desbloquejat");
  carregarProgres();
});

// Carregar el progrés en iniciar
carregarProgres();
