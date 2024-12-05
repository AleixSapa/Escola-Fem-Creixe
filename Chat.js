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
var startChatButton = document.getElementById("start-chat");
var createChatButton = document.getElementById("create-chat-button");
var sendButton = document.getElementById("send-button");
var messageInput = document.getElementById("message-input");
var chatsList = document.getElementById("chats-list");
var messagesDiv = document.getElementById("messages");
var chatTitle = document.getElementById("chat-title");

// Funció per omplir la llista d'usuaris disponibles
function populateUsersList() {
    selectUser.innerHTML = "<option value=''>Selecciona un usuari</option>";
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
    loginScreen.style.display = "none";
    chatScreen.style.display = "block";
    chatTitle.textContent = "Conversa amb " + username;
    updateChatsList();
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
    messagesDiv.innerHTML = "";
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
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplaçar cap avall
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

// Seleccionar un xat per veure'l
chatsList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        var chatName = e.target.textContent.replace(" i ", "-");
        if (chats[chatName] && chats[chatName].participants.includes(username)) {
            currentChat = chatName;
            chatTitle.textContent = "Conversa amb " + chatName.replace("-", " i ");
            loadMessages();
        } else {
            alert("No tens permís per entrar en aquest xat.");
        }
    }
});

// Enviar missatges
sendButton.addEventListener("click", function() {
    var messageText = messageInput.value.trim();
    if (messageText && currentChat) {
        addMessageToChat(username, messageText);
        messageInput.value = ""; // Buidar el camp de text després de l'enviament
    }
});

// Actualitzar la llista de xats
function updateChatsList() {
    chatsList.innerHTML = "";
    for (var chat in chats) {
        if (chats[chat].participants.includes(username)) {
            var chatElement = document.createElement("li");
            chatElement.textContent = chat.replace("-", " i ");
            chatsList.appendChild(chatElement);
        }
    }
}

// Guardar els xats a localStorage
function saveChats() {
    localStorage.setItem('chats', JSON.stringify(chats));
}

// Carregar els xats des de localStorage
function loadChats() {
    var savedChats = localStorage.getItem('chats');
    if (savedChats) {
        chats = JSON.parse(savedChats);
    }
}

// Configurar la selecció d'usuari i iniciar el xat
startChatButton.addEventListener("click", function() {
    var selectedUser = selectUser.value;
    if (selectedUser) {
        username = selectedUser;
        showChatScreen(); // Mostrem el xat un cop seleccionat l'usuari
    } else {
        alert("Si us plau, selecciona un usuari.");
    }
});

// Inicialització: omplir usuaris, carregar els xats i configurar la pàgina
window.onload = function() {
    populateUsersList(); // Omplir la llista d'usuaris quan es carrega la pàgina
    loadChats(); // Carregar els xats des de localStorage
};
