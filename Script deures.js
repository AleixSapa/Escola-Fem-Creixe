// script.js

let currentUser = null;

// Carregar dades en carregar la pàgina
document.addEventListener("DOMContentLoaded", function () {
    var savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        iniciarSessio(savedUser);
    }
});

// Iniciar sessió
document.getElementById("loginButton").addEventListener("click", function () {
    var username = document.getElementById("username").value.trim();
    if (username) {
        iniciarSessio(username);
    } else {
        alert("Escriu un nom per iniciar sessió!");
    }
});

function iniciarSessio(username) {
    currentUser = username;
    localStorage.setItem("currentUser", username);

    document.getElementById("login").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("userGreeting").textContent = username;

    carregarTasques();
}

// Tancar sessió
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    currentUser = null;

    document.getElementById("login").classList.remove("hidden");
    document.getElementById("content").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("taskList").innerHTML = "";
});

// Carregar tasques d'un usuari
function carregarTasques() {
    var taskList = document.getElementById("taskList");
    var savedTasks = JSON.parse(localStorage.getItem("tasks_" + currentUser)) || [];
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
    var savedTasks = JSON.parse(localStorage.getItem("tasks_" + currentUser)) || [];
    savedTasks.push({ text: text, completed: completed });
    localStorage.setItem("tasks_" + currentUser, JSON.stringify(savedTasks));
}

// Actualitzar l'estat d'una tasca al localStorage
function updateTaskStatus(text, completed) {
    var savedTasks = JSON.parse(localStorage.getItem("tasks_" + currentUser)) || [];
    savedTasks = savedTasks.map(function (task) {
        if (task.text === text) {
            return { text: text, completed: completed };
        }
        return task;
    });
    localStorage.setItem("tasks_" + currentUser, JSON.stringify(savedTasks));

    // Eliminar la tasca si està completada
    if (completed) {
        deleteTask(text);
    }
}

// Eliminar una tasca del localStorage
function deleteTask(text) {
    var savedTasks = JSON.parse(localStorage.getItem("tasks_" + currentUser)) || [];
    savedTasks = savedTasks.filter(function (task) {
        return task.text !== text;
    });
    localStorage.setItem("tasks_" + currentUser, JSON.stringify(savedTasks));
}
