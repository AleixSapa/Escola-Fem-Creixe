
// script.js

let currentUser = null;

// Carregar dades en carregar la pàgina
document.addEventListener("DOMContentLoaded", function () {
    var savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        iniciarSessio(savedUser);
    } else {
        mostrarOpcionsDeLogin(); // Si no hi ha usuari guardat, mostrar opcions de login
    }
});

// Mostrar les opcions de registre o login
function mostrarOpcionsDeLogin() {

    document.getElementById("register").classList.remove("hidden");
    document.getElementById("login").classList.remove("hidden");

}
// Registrar un usuari nou
document.getElementById("registerButton").addEventListener("click", function () {
    var newUsername = document.getElementById("newUsername").value.trim();
    if (newUsername && !localStorage.getItem(newUsername)) {
        // Crear un compte nou
        localStorage.setItem(newUsername, JSON.stringify([])); // Guardem un array buit de tasques per aquest usuari
        alert("Usuari creat! Ara pots iniciar sessió.");
        document.getElementById("register").classList.add("hidden");
        document.getElementById("login").classList.remove("hidden");
    } else if (!newUsername) {
        alert("Escriu un nom d'usuari.");
    } else {
        alert("Aquest nom d'usuari ja existeix.");
    }
});

// Iniciar sessió
document.getElementById("loginButton").addEventListener("click", function () {
    var username = document.getElementById("username").value.trim();
    if (username && localStorage.getItem(username)) {
        iniciarSessio(username);
    } else {
        alert("Aquest usuari no existeix.");
    }
});

function iniciarSessio(username) {
    currentUser = username;
    localStorage.setItem("currentUser", username);

    document.getElementById("login").classList.add("hidden");
    document.getElementById("register").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("userGreeting").textContent = username;

    carregarTasques();
}

// Tancar sessió
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    currentUser = null;

    document.getElementById("login").classList.remove("hidden");
    document.getElementById("register").classList.add("hidden");
    document.getElementById("content").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("newUsername").value = "";
    document.getElementById("taskList").innerHTML = "";
});

// Carregar tasques d'un usuari
function carregarTasques() {
    var taskList = document.getElementById("taskList");
    var savedTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    taskList.innerHTML = ""; // Netejar la llista

    savedTasks.forEach(function (task) {
        addTaskToList(task.text, task.completed);
    });
}

// Afegir una tasca
document.getElementById("addTask").addEventListener("click", function () {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTaskToList(taskText, false);
        saveTask(taskText, false);
        taskInput.value = ""; // Netejar el camp de text
    } else {
        alert("Escriu una tasca abans d'afegir-la!");
    }
});

// Afegir tasca a la llista visualment
function addTaskToList(text, completed) {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = text;

    // Si la tasca està completada, marcar-la
    if (completed) {
        li.classList.add("complete");
    }

    // Botó de completar
    var completeBtn = document.createElement("button");
    completeBtn.textContent = "Completa";
    completeBtn.style.marginLeft = "10px";
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("complete");
        updateTaskStatus(text, li.classList.contains("complete"));
    });

    // Botó d'eliminar
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        deleteTask(text);
    });

    // Afegir botons a l'element de la llista
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Afegir l'element de llista a la llista de tasques
    taskList.appendChild(li);
}

// Guardar una tasca nova al localStorage
function saveTask(text, completed) {
    var savedTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    savedTasks.push({ text: text, completed: completed });
    localStorage.setItem(currentUser, JSON.stringify(savedTasks));
}

// Actualitzar l'estat d'una tasca al localStorage
function updateTaskStatus(text, completed) {
    var savedTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    savedTasks = savedTasks.map(function (task) {
        if (task.text === text) {
            return { text: text, completed: completed };
        }
        return task;
    });
    localStorage.setItem(currentUser, JSON.stringify(savedTasks));
}

// Eliminar una tasca del localStorage
function deleteTask(text) {
    var savedTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    savedTasks = savedTasks.filter(function (task) {
        return task.text !== text;
    });
    localStorage.setItem(currentUser, JSON.stringify(savedTasks));
}
