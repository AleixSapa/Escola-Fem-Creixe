// Variables globals
var username = "";
var currentChat = null;
var chats = {}; // Objecte per emmagatzemar els xats (clau: nom d'usuari, valor: array de missatges)
var users = []; // Llista d'usuaris actualment connectats

// Selecció d'elements
var loginScreen = document.getElementById("login-screen");
var chatScreen = document.getElementById("chat-screen");
var usernameInput = document.getElementById("username");
var startChatButton = document.getElementById("start-chat");
var selectUser = document.getElementById("select-user");
var createChatButton = document.getElementById("create-chat-button");
var chatsList = document.getElementById("chats-list");
var messagesDiv = document.getElementById("messages");
var messageInput = document.getElementById("message-input");
var sendButton = document.getElementById("send-button");
var chatTitle = document.getElementById("chat-title");
var usersList = document.getElementById("users-list");

// Comprovar si ja hi ha un usuari guardat
if (localStorage.getItem("username")) {
    username = localStorage.getItem("username");  // Recuperar el nom de l'usuari des de localStorage
    loginScreen.style.display = "none";
    chatScreen.style.display = "flex";
    addUser(username); // Afegir l'usuari a la llista d'usuaris connectats
    updateUsersList();
} else {
    // Si no hi ha cap usuari guardat, mostrar la pantalla de registre
    loginScreen.style.display = "block";
    chatScreen.style.display = "none";
}

// Entrar al xat
startChatButton.addEventListener("click", function () {
    username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem("username", username);  // Guardar el nom de l'usuari a localStorage
        loginScreen.style.display = "none";
        chatScreen.style.display = "flex";
        addUser(username); // Afegir l'usuari a la llista d'usuaris connectats
        updateUsersList();
    }
});

// Afegir un usuari a la llista d'usuaris connectats
function addUser(name) {
    if (!users.includes(name)) {
        users.push(name);
    }
    updateUsersList();
}

// Actualitzar la llista d'usuaris disponibles
function updateUsersList() {
    // Actualitzar la llista de persones disponibles per crear un xat
    usersList.innerHTML = "";
    selectUser.innerHTML = "<option value=''>Selecciona un usuari</option>"; // Reiniciar llista
    users.forEach(function (user) {
        if (user !== username) {
            var userElement = document.createElement("li");
            userElement.textContent = user;
            usersList.appendChild(userElement);

            var optionElement = document.createElement("option");
            optionElement.value = user;
            optionElement.textContent = user;
            selectUser.appendChild(optionElement);
        }
    });
}

// Crear un nou xat privat
createChatButton.addEventListener("click", function () {
    var selectedUser = selectUser.value;
    if (selectedUser && selectedUser !== username) {
        if (!chats[selectedUser]) {
            chats[selectedUser] = [];
        }
        updateChatsList();
    }
});

// Seleccionar un xat
chatsList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        currentChat = e.target.textContent;
        chatTitle.textContent = "Conversa amb " + currentChat;
        loadMessages();
    }
});

// Enviar un missatge
sendButton.addEventListener("click", function () {
    var messageText = messageInput.value.trim();
    if (messageText && currentChat) {
        chats[currentChat].push({ user: username, text: messageText });
        messageInput.value = "";
        loadMessages();
    }
});

// Carregar els missatges del xat seleccionat
function loadMessages() {
    messagesDiv.innerHTML = ""; // Netejar missatges antics
    var chatMessages = chats[currentChat] || [];
    chatMessages.forEach(function (message) {
        var messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${message.user}:</strong> ${message.text}`;
        messageElement.style.margin = "5px 0";
        messageElement.style.padding = "10px";
        messageElement.style.background = message.user === username ? "#d1ffd6" : "#e1f5fe";
        messageElement.style.borderRadius = "5px";
        messagesDiv.appendChild(messageElement);
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplaçar cap avall
}

// Actualitzar llista de xats privats
function updateChatsList() {
    chatsList.innerHTML = "";
    for (var user in chats) {
        if (user !== username) {
            var chatElement = document.createElement("li");
            chatElement.textContent = user;
            chatsList.appendChild(chatElement);
        }
    }
}
