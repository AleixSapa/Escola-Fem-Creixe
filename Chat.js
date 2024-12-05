// Usuaris predefinits
var users = ["Aleix", "Mat", "Vanessa", "Sara", "Pilar", "Clara", "Sofia", "Luke", "Leo", "Emma"]; // Llista d'usuaris

// Variables globals
var username = "";  // Nom d'usuari seleccionat
var currentChat = null;  // Xat actual seleccionat
var chats = {};  // Emmagatzemem els xats entre usuaris

// Selecció d'elements del DOM
var loginScreen = document.getElementById("login-screen");
var chatScreen = document.getElementById("chat-screen");
var selectUser = document.getElementById("select-user");
var selectUser2 = document.getElementById("select-user-2");
var createChatButton = document.getElementById("create-chat-button");
var sendButton = document.getElementById("send-button");
var messageInput = document.getElementById("message-input");
var chatsList = document.getElementById("chats-list");
var messagesDiv = document.getElementById("messages");
var chatTitle = document.getElementById("chat-title");

// Funció per omplir la llista d'usuaris disponibles
function populateUsersList() {
    selectUser.innerHTML = "<option value=''>Selecciona el teu nom</option>";
    selectUser2.innerHTML = "<option value=''>Selecciona un usuari</option>";
    users.forEach(function(user) {
        var option = document.createElement("option");
        option.value = user;
        option.textContent = user;
        selectUser.appendChild(option);
        selectUser2.appendChild(option.cloneNode(true));
    });
}

// Funció per mostrar la pantalla de xat
function showChatScreen() {
    loginScreen.style.display = "none";  // Ocultar la pantalla de login
    chatScreen.style.display = "block";  // Mostrar la pantalla de xat
    chatTitle.textContent = "Conversa amb " + username;  // Establir el títol de la conversa
    updateChatsList();  // Actualitzar la llista de xats quan entres al xat
}

// Afegir un missatge al xat
function addMessageToChat(user, text) {
    if (!chats[currentChat]) {
        chats[currentChat] = { participants: [], messages: [] };
    }
    chats[currentChat].messages.push({ user: user, text: text });
    saveChats();
    loadMessages();
}

// Cargar els missatges del xat seleccionat
function loadMessages() {
    messagesDiv.innerHTML = "";  // Buidem la secció de missatges abans de carregar els nous
    var chatData = chats[currentChat];
    if (chatData) {
        chatData.messages.forEach(function(message) {
            var messageElement = document.createElement("div");
            messageElement.innerHTML = `<strong>${message.user}:</strong> ${message.text}`;
            messageElement.style.margin = "5px 0";
            messageElement.style.padding = "10px";
            messageElement.style.background = message.user === username ? "#d1ffd6" : "#e1f5fe";
            messageElement.style.borderRadius = "5px";
            messagesDiv.appendChild(messageElement);
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplaçar cap avall per veure els missatges més nous
    }
}

// Crear un xat privat entre dos usuaris
createChatButton.addEventListener("click", function() {
    var selectedUser = selectUser2.value;
    if (selectedUser && selectedUser !== username) {
        var chatName = [username, selectedUser].sort().join("-");  // Nom del xat privat, per exemple "Aleix-Mat"
        
        if (!chats[chatName]) {
            chats[chatName] = { participants: [username, selectedUser], messages: [] };  // Crear el xat si no existeix
        }
        currentChat = chatName;  // Establir el xat actual com el nou creat
        updateChatsList();  // Actualitzar la llista de xats
        saveChats();  // Guardar els xats
        alert("Xat creat amb èxit!");
    } else {
        alert("Has de seleccionar un usuari vàlid per crear un xat.");
    }
});

// Afegir els xats creats a la llista
function updateChatsList() {
    chatsList.innerHTML = "";  // Buidem la llista abans de refrescar-la
    for (var chat in chats) {
        if (chats[chat].participants.includes(username)) {
            var chatElement = document.createElement("li");
            chatElement.textContent = chat.replace("-", " i ");

            // Crear el botó per anar al xat
            var goToChatButton = document.createElement("button");
            goToChatButton.textContent = "Anar al xat"; // Nom del botó
            goToChatButton.setAttribute("data-chat-name", chat); // Guardem el nom del xat al botó

            // Quan es faci clic al botó, carreguem el xat corresponent
            goToChatButton.addEventListener("click", function() {
                var chatName = this.getAttribute("data-chat-name"); // Agafem el nom del xat
                currentChat = chatName; // Estableix el xat actual com el seleccionat
                chatTitle.textContent = "Conversa amb " + chatName.replace("-", " i ");
                loadMessages(); // Carreguem els missatges del xat seleccionat
            });

            chatElement.appendChild(goToChatButton);
            chatsList.appendChild(chatElement);
        }
    }
}

// Guardar els xats a localStorage
function saveChats() {
    localStorage.setItem("chats", JSON.stringify(chats));
}

// Carregar els xats des de localStorage
function loadChats() {
    var savedChats = localStorage.getItem("chats");
    if (savedChats) {
        chats = JSON.parse(savedChats);
    }
}

// Quan es fa clic al botó "Iniciar sessió"
document.getElementById("login-button").addEventListener("click", function() {
    username = selectUser.value;
    if (username) {
        loadChats();
        showChatScreen();
    } else {
        alert("Selecciona un nom d'usuari.");
    }
});

// Quan es fa clic al botó d'enviar missatge
sendButton.addEventListener("click", function() {
    var message = messageInput.value.trim();
    if (message) {
        addMessageToChat(username, message); // Afegeix el missatge al xat
        messageInput.value = ""; // Buidar el camp de missatge després d'enviar
    }
});

// Carregar la llista d'usuaris en començar
populateUsersList();
